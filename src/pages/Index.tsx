// src/pages/Index.jsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ApplicationForm from "@/components/home/ApplicationForm";
import PartnersSection from "@/components/home/PartnersSection";
import ContactSection from "@/components/home/ContactSection"; // Убедитесь, что этот компонент существует

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* 
        На главной странице Index.jsx мы передаем `shouldAppearOnScroll={true}`.
        Это указывает Header'у, что он должен появляться только после скролла.
      */}
      <Header shouldAppearOnScroll={true} /> 
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <ApplicationForm />
        <PartnersSection />
        <ContactSection /> {/* Добавил ContactSection */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;