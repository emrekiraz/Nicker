import { NextRequest, NextResponse } from "next/server";
import { generateBrandNames, initGeminiAPI } from "@/services/gemini";
import { checkDomainAvailability, initNamecheapAPI } from "@/services/namecheap";

// Fallback brand names in case the API fails
const fallbackBrandNames = [
  "ByteSync",
  "NexaWave",
  "PulseFlow",
  "EchoLink",
  "ZenithPro",
  "QuantumLeap",
  "VividPeak",
  "NovaFusion",
  "AstraVibe",
  "EnvisionX"
];

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
    const geminiApiKey = process.env.GEMINI_API_KEY;
    if (!geminiApiKey) {
      return NextResponse.json(
        { error: "Gemini API key is not configured" },
        { status: 500 }
      );
    }
    
    // Initialize Namecheap API
    const namecheapUser = process.env.NAMECHEAP_API_USER;
    const namecheapApiKey = process.env.NAMECHEAP_API_KEY;
    const namecheapUsername = process.env.NAMECHEAP_USERNAME;
    const namecheapClientIp = process.env.NAMECHEAP_CLIENT_IP || "127.0.0.1";
    
    if (!namecheapUser || !namecheapApiKey || !namecheapUsername) {
      return NextResponse.json(
        { error: "Namecheap API credentials are not configured" },
        { status: 500 }
      );
    }
    
    // Initialize both APIs
    initNamecheapAPI({
      apiUser: namecheapUser,
      apiKey: namecheapApiKey,
      username: namecheapUsername,
      clientIp: namecheapClientIp
    });
    
    let brandNames: string[] = [];
    
    try {
      // Try to generate brand names using the API
      initGeminiAPI(geminiApiKey);
      brandNames = await generateBrandNames(productIdea, keywords, 5);
    } catch (apiError) {
      console.error("Error calling Gemini API, using fallback brand names:", apiError);
      // Use fallback brand names if the API fails
      brandNames = fallbackBrandNames.slice(0, 5);
    }

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