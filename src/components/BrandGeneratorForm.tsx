"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { getDomainPurchaseUrl } from "@/services/namecheap";

// Form validation schema
const formSchema = z.object({
  productIdea: z.string().min(3, {
    message: "Product idea must be at least 3 characters.",
  }),
  keywords: z.string().min(2, {
    message: "Please enter at least one keyword.",
  }),
  domainExtensions: z.array(z.string()).min(1, {
    message: "Please select at least one domain extension.",
  }),
});

// Domain extension options
const domainExtensionOptions = [
  { id: "com", label: ".com" },
  { id: "io", label: ".io" },
  { id: "co", label: ".co" },
  { id: "app", label: ".app" },
  { id: "net", label: ".net" },
  { id: "org", label: ".org" },
];

type BrandSuggestion = {
  name: string;
  domains: Array<{
    extension: string;
    available: boolean;
    price?: string;
  }>;
};

export default function BrandGeneratorForm() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [brandSuggestions, setBrandSuggestions] = useState<BrandSuggestion[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productIdea: "",
      keywords: "",
      domainExtensions: ["com"],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsGenerating(true);
    setError(null);
    
    try {
      const response = await fetch("/api/generate-brands", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate brand names");
      }

      const data = await response.json();
      setBrandSuggestions(data.brands);
    } catch (err) {
      console.error("Error generating brand names:", err);
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsGenerating(false);
    }
  }

  // Handle buying a domain
  const handleBuyDomain = (domain: string) => {
    const purchaseUrl = getDomainPurchaseUrl(domain);
    window.open(purchaseUrl, "_blank");
  };

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="productIdea"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Idea</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., A mobile app that helps people track their fitness goals"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Describe your product or service in detail.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="keywords"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Keywords (comma separated)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., fitness, health, tracking, goals"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Add keywords that describe your product or service.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="domainExtensions"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>Domain Extensions</FormLabel>
                  <FormDescription>
                    Select up to 3 domain extensions to check availability.
                  </FormDescription>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {domainExtensionOptions.map((option) => (
                    <FormField
                      key={option.id}
                      control={form.control}
                      name="domainExtensions"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={option.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(option.id)}
                                onCheckedChange={(checked) => {
                                  const currentValue = field.value || [];
                                  if (checked) {
                                    if (currentValue.length < 3) {
                                      field.onChange([...currentValue, option.id]);
                                    }
                                  } else {
                                    field.onChange(
                                      currentValue.filter((value) => value !== option.id)
                                    );
                                  }
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {option.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">
              {error}
            </div>
          )}
          
          <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800" disabled={isGenerating}>
            {isGenerating ? "Generating..." : "Generate Brand Names"}
          </Button>
        </form>
      </Form>

      {/* Results section */}
      {brandSuggestions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Brand Name Suggestions</h2>
          <div className="grid gap-4">
            {brandSuggestions.map((suggestion, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs font-bold mr-3">
                        N
                      </div>
                      <h3 className="text-xl font-bold">{suggestion.name}</h3>
                    </div>
                    <Button variant="outline" size="sm">
                      Select
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {suggestion.domains.map((domain, domainIndex) => {
                      const domainName = `${suggestion.name.toLowerCase()}.${domain.extension}`;
                      return (
                        <div 
                          key={domainIndex} 
                          className={`p-3 rounded-md border ${domain.available ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">
                              {domainName}
                            </span>
                            {domain.available ? (
                              <span className="text-green-600 text-sm">Available</span>
                            ) : (
                              <span className="text-red-600 text-sm">Taken</span>
                            )}
                          </div>
                          {domain.available && domain.price && (
                            <div className="mt-2 flex items-center justify-between">
                              <span className="text-sm text-gray-500">{domain.price}</span>
                              <Button 
                                size="sm" 
                                variant="link" 
                                className="p-0 h-auto"
                                onClick={() => handleBuyDomain(domainName)}
                              >
                                Buy
                              </Button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 