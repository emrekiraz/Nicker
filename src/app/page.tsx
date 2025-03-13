import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero section */}
      <section className="bg-black text-white py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Find the Perfect Brand Name for Your Next Big Idea
            </h1>
            <p className="max-w-[700px] text-gray-400 md:text-xl">
              Generate brand name ideas with AI and check domain availability instantly.
            </p>
            <div className="space-x-4">
              <Button asChild className="bg-white text-black hover:bg-gray-200">
                <Link href="/brand-generator">Get Started</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              How It Works
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Get brand name suggestions and check domain availability in three simple steps.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>1. Enter your product idea</CardTitle>
                <CardDescription>
                  Describe your product or service with keywords.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Our AI will analyze your idea and generate relevant brand name options.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. Get brand name suggestions</CardTitle>
                <CardDescription>
                  Review AI-generated brand name ideas tailored to your product.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Each suggestion is carefully crafted to match your product's essence.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Check domain availability</CardTitle>
                <CardDescription>
                  Find available domains for your favorite brand names.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Select domain extensions and get pricing information from Namecheap.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Why Choose Nicker
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              The smartest way to find and secure your perfect brand name.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Leverage Google's Gemini AI to generate creative and relevant brand names.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Instant Domain Check</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Check domain availability across multiple extensions in real-time.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Seamless Purchase</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Buy your preferred domain directly through Namecheap with just a few clicks.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customizable Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Fine-tune your domain search with up to 3 custom filters.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Modern Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Enjoy a clean, Vercel-inspired interface that makes branding a pleasure.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Time-Saving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Complete the entire process from idea to domain purchase in minutes, not days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to Find Your Perfect Brand Name?
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Get started in seconds and discover brand names that resonate with your vision.
            </p>
            <Button asChild className="bg-black text-white hover:bg-gray-800">
              <Link href="/brand-generator">Generate Brand Names</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
