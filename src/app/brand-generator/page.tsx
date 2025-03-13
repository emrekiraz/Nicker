import { MainLayout } from "@/components/layout/MainLayout";
import BrandGeneratorForm from "@/components/BrandGeneratorForm";

export default function BrandGeneratorPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Brand Name Generator</h1>
          <p className="text-gray-500 mb-8">
            Enter your product idea and keywords to generate brand name suggestions.
          </p>
          
          <BrandGeneratorForm />
        </div>
      </div>
    </MainLayout>
  );
} 