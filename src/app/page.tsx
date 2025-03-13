import { MainLayout } from "@/components/layout/MainLayout";
import BrandGeneratorForm from "@/components/BrandGeneratorForm";

export default function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-2xl font-bold">
              N
            </div>
            <h1 className="text-3xl font-bold ml-3">Nicker</h1>
          </div>
          <p className="text-gray-500 mb-8 text-center">
            Enter your product idea and keywords to generate brand name suggestions.
          </p>
          
          <BrandGeneratorForm />
        </div>
      </div>
    </MainLayout>
  );
}
