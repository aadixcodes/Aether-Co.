export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  sizes: string[];
  inStock: boolean;
  material?: string;
  care?: string;
  fit?: string;
}

export const ShirtData: Product[] = [
 {
  id: 101,
  name: "Oversized Light Blue Plaid Shirt with Bone Print",
  slug: "oversized-light-blue-plaid-bone-shirt",
  price: 149,
  description: "A distinctive oversized shirt featuring a soft light blue and white plaid pattern. The shirt stands out with a unique black bone graphic detail printed on the sleeve, giving it a streetwear edge. It has a classic button-down front, collar, and a single chest pocket. Ideal for a relaxed, trendy, and comfortable look.",
  category: "shirts",
  images: ["/assets/shirts/1.jpg"],
  sizes: ["S", "M", "L", "XL"],
  inStock: true,
  material: "100% Cotton Flannel",
  care: "Machine wash cold inside out, do not bleach. Tumble dry low or hang dry. Iron on low heat (avoid ironing directly on the print).",
  fit: "Oversized/Relaxed Fit",
},
  {
  id: 102,
  name: "Classic Denim Shirt - Multiple Washes",
  slug: "classic-denim-shirt-multi-wash",
  price: 199,
  description: "A wardrobe essential, this full-sleeve denim shirt is offered in three versatile washes: Dark Indigo (deep blue), Light Blue Wash (faded blue), and Washed Charcoal (dark grey/black). Featuring a classic spread collar, a full button placket with white buttons, and a subtle embroidered logo on the chest. The sturdy cotton denim fabric ensures a timeless look and excellent durability for everyday casual wear.",
  category: "shirts",
  images: ["/assets/shirts/2.jpg"],
  sizes: ["S", "M", "L", "XL", "XXL"],
  inStock: true,
  material: "100% Cotton Denim",
  care: "Machine wash cold, inside out, with similar colors. Hang dry or tumble dry low. Iron on a medium setting. Note: Indigo dye may transfer before the first wash.",
  fit: "Modern Regular Fit",
},
{
  id: 103,
  name: "Black and White Textured Plaid Flannel Shirt",
  slug: "black-white-textured-plaid-flannel-shirt",
  price: 189,
  description: "A monochrome long-sleeve shirt featuring a versatile black and white plaid pattern with a slightly textured or 'slub' weave finish. It has a rounded, relaxed collar, a classic button-down front with contrasting white buttons, and a straight hemline. The casual cut makes it perfect for layering or wearing buttoned up for a modern, relaxed style.",
  category: "shirts",
  images: ["/assets/shirts/3.jpg"],
  sizes: ["S", "M", "L", "XL"],
  inStock: true,
  material: "Cotton Blend Flannel",
  care: "Machine wash gentle cycle in cold water. Tumble dry on low heat or lay flat to dry. Iron on medium heat.",
  fit: "Relaxed Fit / Boxy Cut",
},
{
  id: 104,
  name: "Streetwear Flannel with Flame Sleeve Graphics",
  slug: "streetwear-flannel-flame-sleeve",
  price: 199,
  description: "A bold, streetwear-inspired flannel shirt. It features a classic plaid pattern in warm tones of brown, tan, and light blue. The design is elevated by contrasting black sleeve panels adorned with white flame graphics. It includes dual button-closure chest pockets, a button-down front, and ribbed black cuffs for a snug, modern fit. Perfect for a striking, layered casual look.",
  category: "shirts",
  images: ["/assets/shirts/4.jpg"],
  sizes: ["S", "M", "L", "XL"],
  inStock: true,
  material: "100% Cotton Flannel body; Cotton/Spandex blend for sleeve panels and cuffs.",
  care: "Machine wash cold, inside out. Tumble dry on low or hang dry. Iron on low heat, avoiding prints and cuffs.",
  fit: "Regular to Slightly Relaxed Fit",
},{
  id: 105,
  name: "Classic Striped Oxford Button-Down Shirt",
  slug: "classic-striped-oxford-button-down-shirt",
  price: 149,
  description: "A collection of iconic, long-sleeve Oxford shirts featuring a refined striped pattern and the signature embroidered logo on the chest. Crafted from durable Oxford cloth, these shirts offer a crisp yet comfortable feel. Available in a variety of soft, pastel shades. The button-down collar gives it a timeless, preppy look perfect for smart-casual wear.",
  category: "shirts",
  images: ["/assets/shirts/5.jpg"],
  sizes: ["S", "M", "L", "XL", "XXL"],
  inStock: true,
  material: "100% Oxford Cotton",
  care: "Machine wash cold with like colors. Tumble dry low or hang to dry. Iron on medium heat.",
  fit: "Custom Fit / Classic Fit",
},
{
  id: 106,
  name: "Washed Logo Denim Work Shirt / Overshirt",
  slug: "washed-logo-denim-work-shirt",
  price: 199,
  description: "A rugged, long-sleeve shirt crafted from durable denim or twill with a distinctive washed, worn-in finish. It features a classic spread collar, button-down front, and dual chest pockets. The design is defined by bold, repeated 'Diesel' lettering printed directly onto or above the left chest pocket. Available in a strong palette of washes.",
  category: "overshirts",
  images: ["/assets/shirts/6.jpg"],
  sizes: ["S", "M", "L", "XL", "XXL"],
  inStock: true,
  material: "100% Cotton Denim or Heavy Twill",
  care: "Machine wash cold, inside out. Tumble dry low. Avoid ironing on the logo.",
  fit: "Regular to Slightly Relaxed Fit",
},
{
  id: 107,
  name: "Winter Sherpa-Lined Military Bomber Jacket",
  slug: "winter-sherpa-lined-military-bomber-jacket",
  price: 399,
  description: "A rugged and warm jacket built for cold weather. This coat features a durable canvas or cotton blend outer shell and a cozy, full-body sherpa or faux-fur fleece lining for superior insulation. The military-inspired design includes a stand-up collar, full zip and button closure, multiple functional flap and zip pockets on the chest, and shoulder epaulets. The elasticized, ribbed cuffs and hem ensure warmth is locked in. Shown here in Camel/Tan.",
  category: "jackets",
  images: ["/assets/shirts/7.jpg"],
  sizes: ["M", "L", "XL", "XXL", "3XL"],
  inStock: true,
  material: "Cotton/Polyester Outer Shell; 100% Polyester Sherpa Lining",
  care: "Machine wash cold, gentle cycle. Hang dry or tumble dry low.",
  fit: "Regular Fit / Structured Warm-Fit",
},
{
  id: 108,
  name: "Premium Striped Button-Down Oxford Shirt",
  slug: "premium-striped-button-down-oxford-shirt",
  price: 199,
  description: "A collection of essential long-sleeve shirts crafted from high-quality Oxford or shirting fabric, featuring the embroidered pony logo on the chest. These shirts offer a variety of classic and modern striped patterns in multiple colors. They feature a timeless button-down collar and a full button placket, perfect for a polished casual look.",
  category: "shirts",
  images: ["/assets/shirts/8.jpg"],
  sizes: ["S", "M", "L", "XL", "XXL"],
  inStock: true,
  material: "100% Premium Cotton",
  care: "Machine wash cold. Tumble dry low or hang to dry.",
  fit: "Custom Fit / Regular Fit",
},

];

export const BannerImage = ["/assets/promo-shirts.jpg"];
