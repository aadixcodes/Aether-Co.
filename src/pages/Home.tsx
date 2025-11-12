import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import heroBanner from "/assets/hero-banner.jpg";
import { WinterData, BannerImage as WinterBannerImage } from "@/data/WinterData";
import { ShirtData, BannerImage as ShirtBannerImage } from "@/data/ShirtData";
import { TshirtData, BannerImage as TshirtBannerImage } from "@/data/TshirtData";
import { TrouserData, BannerImage as TrouserBannerImage } from "@/data/TrouserData";
import { ShoeData, BannerImage as ShoeBannerImage } from "@/data/ShoeData";
import { JeanData, BannerImage as JeanBannerImage } from "@/data/JeanData";
import { BlazerData, BannerImage as BlazerBannerImage } from "@/data/BlazerData";

const Home = () => {
  const categories = [
    { name: "Shirts", path: "/shirts", count: 4 },
    { name: "T-Shirts", path: "/tshirts", count: 4 },
    { name: "Trousers", path: "/trousers", count: 4 },
    { name: "Shoes", path: "/shoes", count: 4 },
    { name: "Jeans", path: "/jeans", count: 4 },
    { name: "Blazers", path: "/blazers", count: 4 },
    { name: "Winter", path: "/winter", count: 4 },
  ];

  const sections = [
    {
      key: "winter",
      title: "Winter Collection",
      subtitle: "Embrace the Cold in Style",
      path: "/winter",
      banner: WinterBannerImage?.[0] ?? "/assets/promo-winter.jpg",
      products: WinterData,
    },
    {
      key: "shirts",
      title: "Premium Shirts",
      subtitle: "Timeless Elegance",
      path: "/shirts",
      banner: ShirtBannerImage?.[0] ?? "/assets/promo-shirts.jpg",
      products: ShirtData,
    },
    {
      key: "tshirts",
      title: "T-Shirts",
      subtitle: "Comfort for Everyday",
      path: "/tshirts",
      banner: TshirtBannerImage?.[0] ?? "/assets/tshirt-1.jpg",
      products: TshirtData,
    },
    {
      key: "trousers",
      title: "Trousers",
      subtitle: "Tailored and Versatile",
      path: "/trousers",
      banner: TrouserBannerImage?.[0] ?? "/assets/trouser-1.jpg",
      products: TrouserData,
    },
    {
      key: "shoes",
      title: "Shoes",
      subtitle: "Step into Luxury",
      path: "/shoes",
      banner: ShoeBannerImage?.[0] ?? "/assets/shoe-1.jpg",
      products: ShoeData,
    },
    {
      key: "jeans",
      title: "Jeans",
      subtitle: "Denim Classics",
      path: "/jeans",
      banner: JeanBannerImage?.[0] ?? "/assets/jean-1.jpg",
      products: JeanData,
    },
    {
      key: "blazers",
      title: "Blazers",
      subtitle: "Power Dressing",
      path: "/blazers",
      banner: BlazerBannerImage?.[0] ?? "/assets/blazer-1.jpg",
      products: BlazerData,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            AETHER CO
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Elevate Your Style with Premium Essentials
          </p>
          <Link
            to="/shirts"
            className="inline-block bg-white text-black px-8 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="group border border-border p-6 text-center hover:bg-muted transition-colors"
            >
              <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.count} items
              </p>
            </Link>
          ))}
        </div>
      </section>

      {sections.map((section) => (
        <div key={section.key}>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link to={section.path} className="block relative h-64 md:h-96 overflow-hidden group">
              <img
                src={section.banner}
                alt={section.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl md:text-5xl font-bold mb-2">{section.title}</h3>
                  <p className="text-lg md:text-xl mb-4">{section.subtitle}</p>
                  <span className="inline-block bg-white text-black px-6 py-2 text-sm font-medium hover:bg-white/90 transition-colors">
                    Shop {section.title.split(" ")[0]}
                  </span>
                </div>
              </div>
            </Link>
          </section>

          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              {section.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      ))}

      {/* Features Section */}
      <section className="bg-muted py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">On orders above ₹2000</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Easy Returns</h3>
              <p className="text-muted-foreground">30-day return policy</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">Handpicked materials</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
