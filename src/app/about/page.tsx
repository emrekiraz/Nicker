import { MainLayout } from "@/components/layout/MainLayout";

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About Nicker</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg mb-6">
              Nicker is a modern web application designed to help entrepreneurs, startups, and businesses find the perfect brand name for their products or services, while simultaneously checking domain availability.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p>
              Our mission is to simplify the brand naming process by leveraging artificial intelligence and providing seamless domain availability checks. We understand that finding the right brand name is crucial for any business, and we aim to make this process as efficient and effective as possible.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How It Works</h2>
            <p>
              Nicker uses Google's Gemini AI to generate creative and relevant brand name suggestions based on your product description and keywords. Once generated, we check domain availability across your selected extensions using Namecheap's API, allowing you to find and secure your ideal domain in one seamless process.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Technology Stack</h2>
            <p>
              Nicker is built with modern technologies to ensure a fast, responsive, and pleasant user experience:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Next.js for the frontend framework</li>
              <li>Tailwind CSS for styling</li>
              <li>shadcn UI for consistent, accessible components</li>
              <li>Google Gemini AI for brand name generation</li>
              <li>Namecheap API for domain availability checks</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Get Started</h2>
            <p>
              Ready to find the perfect brand name for your next big idea? Head to our <a href="/brand-generator" className="text-blue-600 hover:underline">Brand Generator</a> to get started!
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 