import axios from "axios";

// Interface for domain check results
export interface DomainCheckResult {
  domain: string;
  available: boolean;
  price?: string;
}

// Namecheap API configuration
// In production, these would be environment variables
let apiConfig = {
  apiUser: "",
  apiKey: "",
  username: "",
  clientIp: "",
};

/**
 * Initialize the Namecheap API configuration
 */
export function initNamecheapAPI(config: {
  apiUser: string;
  apiKey: string;
  username: string;
  clientIp: string;
}) {
  apiConfig = config;
}

/**
 * Check domain availability
 * Note: In a real implementation, you would use the actual Namecheap API.
 * This is a mockup for demonstration purposes.
 */
export async function checkDomainAvailability(
  domains: string[]
): Promise<DomainCheckResult[]> {
  if (!apiConfig.apiKey) {
    throw new Error("Namecheap API not initialized. Call initNamecheapAPI first.");
  }

  try {
    // In a real implementation, you would construct the appropriate Namecheap API URL
    // For demo purposes, we'll simulate the API response
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Mock response for demonstration
    const results: DomainCheckResult[] = domains.map((domain) => {
      // Randomly determine if the domain is available (for demo purposes)
      const available = Math.random() > 0.3;
      
      return {
        domain,
        available,
        // Only include price if the domain is available
        ...(available && {
          price: `$${(Math.random() * 15 + 8).toFixed(2)}`, // Random price between $8 and $23
        }),
      };
    });
    
    return results;
  } catch (error) {
    console.error("Error checking domain availability:", error);
    throw error;
  }
}

/**
 * Get purchase URL for a specific domain
 */
export function getDomainPurchaseUrl(domain: string): string {
  // In a real implementation, this might be a custom affiliate link or deep link
  return `https://www.namecheap.com/domains/registration/results/?domain=${domain}`;
} 