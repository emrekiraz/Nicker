import { NextRequest, NextResponse } from "next/server";
import { generateBrandNames, initGeminiAPI } from "@/services/gemini";
import { checkDomainAvailability } from "@/services/namecheap";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { productIdea, keywords, domainExtensions = ["com"] } = body;

    // Validate request
    if (!productIdea || !keywords) {
      return NextResponse.json(
        { error: "Product idea and keywords are required" },
        { status: 400 }
      );
    }

    // Initialize Gemini API with API key from environment variable
    // In a production app, this would be done at the app level, not per request
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Gemini API key is not configured" },
        { status: 500 }
      );
    }
    initGeminiAPI(apiKey);

    // Generate brand names
    const brandNames = await generateBrandNames(productIdea, keywords, 5);

    // Create domain names to check based on brand names and extensions
    const domainsToCheck: string[] = [];
    brandNames.forEach((name) => {
      domainExtensions.forEach((ext) => {
        domainsToCheck.push(`${name.toLowerCase()}.${ext}`);
      });
    });

    // Check domain availability
    // Note: In a real app, you would use the actual Namecheap API
    const domainResults = await checkDomainAvailability(domainsToCheck);

    // Transform results into the expected format
    const results = brandNames.map((name) => {
      const domains = domainExtensions.map((ext) => {
        const domainFull = `${name.toLowerCase()}.${ext}`;
        const domainInfo = domainResults.find((d) => d.domain === domainFull);
        
        return {
          extension: ext,
          available: domainInfo?.available || false,
          price: domainInfo?.price,
        };
      });

      return {
        name,
        domains,
      };
    });

    return NextResponse.json({ brands: results });
  } catch (error: any) {
    console.error("Error generating brand names:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate brand names" },
      { status: 500 }
    );
  }
} 