import { Layout } from "@/components/Layout";
import { AboutSection } from "@/pages/AboutSection";
import { DocumentarySection } from "@/pages/DocumentarySection";
import { FactsSection } from "@/pages/FactsSection";
import { HeroSection } from "@/pages/HeroSection";
import { TimelineSection } from "@/pages/TimelineSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <HeroSection />
        <DocumentarySection />
        <FactsSection />
        <TimelineSection />
        <AboutSection />
      </Layout>
    </QueryClientProvider>
  );
}
