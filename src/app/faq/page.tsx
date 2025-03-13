import { MainLayout } from "@/components/layout/MainLayout";

export default function FAQPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">How does Nicker generate brand names?</h3>
              <p className="text-gray-600">
                Nicker uses Google's Gemini AI to analyze your product description and keywords, generating creative and relevant brand name suggestions. The AI is trained on a vast dataset of brand names and language patterns to create names that are unique, memorable, and aligned with your product concept.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">How accurate is the domain availability check?</h3>
              <p className="text-gray-600">
                Our domain availability check is integrated with Namecheap's API to provide real-time availability information. While we strive for accuracy, domain availability can change quickly. We recommend proceeding to purchase as soon as you find a domain you like.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Are there any fees for using Nicker?</h3>
              <p className="text-gray-600">
                Nicker is currently free to use. We generate revenue through affiliate commissions when users purchase domains through our Namecheap links. This helps us maintain and improve the service without charging our users.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">How many domain extensions can I check at once?</h3>
              <p className="text-gray-600">
                You can select up to 3 domain extensions to check availability for each generated brand name. This limit helps us maintain performance and ensures quick results.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I save or export my brand name suggestions?</h3>
              <p className="text-gray-600">
                Currently, you can copy individual brand names, but we don't offer a built-in export function. We're considering adding this feature in future updates.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">What happens when I click "Buy" on a domain?</h3>
              <p className="text-gray-600">
                When you click "Buy," you'll be redirected to Namecheap's website with the selected domain pre-filled in their search. From there, you can complete the purchase directly through Namecheap's secure checkout process.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I request specific types of brand names?</h3>
              <p className="text-gray-600">
                Yes! The more detailed your product description and keywords, the better the AI can tailor suggestions to your needs. Including specific preferences in your description can help guide the generation process.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Is my data secure?</h3>
              <p className="text-gray-600">
                We take data privacy seriously. Your product ideas and keywords are only used to generate brand name suggestions and are not stored long-term or shared with third parties beyond what's necessary to provide our service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 