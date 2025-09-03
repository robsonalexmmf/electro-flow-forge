import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoriesGrid from "@/components/CategoriesGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CategoriesGrid />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Index;