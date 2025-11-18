import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Calculator from "./pages/Calculator";
import Careers from "./pages/Careers";
import Leasing from "./pages/knowledge/Leasing";
import Dictionary from "./pages/knowledge/Dictionary";
import Media from "./pages/knowledge/Media";
import Presentations from "./pages/knowledge/Presentations";
import Trainings from "./pages/knowledge/Trainings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          {/* Каждую страницу оборачиваем в*/}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services /> }/>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/knowledge/leasing" element={<Leasing />} />
          <Route path="/knowledge/dictionary" element={<Dictionary />} />
          <Route path="/knowledge/media" element={<Media />} />
          <Route path="/knowledge/presentations" element={<Presentations />} />
          <Route path="/knowledge/trainings" element={<Trainings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} /> {/* И для 404 страницы тоже */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;