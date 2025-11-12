import { useParams } from "react-router-dom";
import { ShirtData, BannerImage as ShirtBannerImage } from "@/data/ShirtData";
import { TshirtData, BannerImage as TshirtBannerImage } from "@/data/TshirtData";
import { TrouserData, BannerImage as TrouserBannerImage } from "@/data/TrouserData";
import { ShoeData, BannerImage as ShoeBannerImage } from "@/data/ShoeData";
import { JeanData, BannerImage as JeanBannerImage } from "@/data/JeanData";
import { BlazerData, BannerImage as BlazerBannerImage } from "@/data/BlazerData";
import { WinterData, BannerImage as WinterBannerImage } from "@/data/WinterData";
import ProductCard from "@/components/ProductCard";

const CategoryPage = () => {
  const { category } = useParams();

  const getProducts = () => {
    switch (category) {
      case "shirts":
        return ShirtData;
      case "tshirts":
        return TshirtData;
      case "trousers":
        return TrouserData;
      case "shoes":
        return ShoeData;
      case "jeans":
        return JeanData;
      case "blazers":
        return BlazerData;
      case "winter":
        return WinterData;
      default:
        return [];
    }
  };

  const products = getProducts();
  const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1);

  const getBannerImage = () => {
    switch (category) {
      case "shirts":
        return ShirtBannerImage?.[0] ?? "/assets/hero-banner.jpg";
      case "tshirts":
        return TshirtBannerImage?.[0] ?? "/assets/hero-banner.jpg";
      case "trousers":
        return TrouserBannerImage?.[0] ?? "/assets/hero-banner.jpg";
      case "shoes":
        return ShoeBannerImage?.[0] ?? "/assets/hero-banner.jpg";
      case "jeans":
        return JeanBannerImage?.[0] ?? "/assets/hero-banner.jpg";
      case "blazers":
        return BlazerBannerImage?.[0] ?? "/assets/hero-banner.jpg";
      case "winter":
        return WinterBannerImage?.[0] ?? "/assets/hero-banner.jpg";
      default:
        return "/assets/hero-banner.jpg";
    }
  };

  const getCategoryDescription = () => {
    switch (category) {
      case "shirts":
        return "Timeless sophistication meets modern elegance";
      case "tshirts":
        return "Comfort redefined for the contemporary gentleman";
      case "trousers":
        return "Precision tailored for the perfect fit";
      case "shoes":
        return "Step into luxury with every stride";
      case "jeans":
        return "Classic denim crafted for the modern man";
      case "blazers":
        return "Power dressing at its finest";
      case "winter":
        return "Embrace the cold with premium winter essentials";
      default:
        return "Elevate your style";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Category Banner */}
      <section
        className="relative h-[40vh] flex items-center justify-center bg-muted bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${getBannerImage()})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {categoryName}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            {getCategoryDescription()}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
