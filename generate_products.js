const fs = require('fs');

let fileContent = fs.readFileSync('c:\\Flutter project\\anon-ecommerce-website\\assets\\js\\products.js', 'utf8');
let match = fileContent.match(/const products = (\[[\s\S]*\]);/);
if (!match) {
  console.log("Could not find products array");
  process.exit(1);
}

// Evaluate products
let products = eval(match[1]);

// Filter out Jewellery
products = products.filter(p => p.category !== 'Jewellery');

// Get highest ID
let maxId = products.reduce((max, p) => p.id > max ? p.id : max, 0);

const images = [
  "./assets/images/products/clothes-1.jpg",
  "./assets/images/products/clothes-2.jpg",
  "./assets/images/products/clothes-3.jpg",
  "./assets/images/products/clothes-4.jpg",
  "./assets/images/products/jacket-1.jpg",
  "./assets/images/products/jacket-2.jpg",
  "./assets/images/products/jacket-3.jpg",
  "./assets/images/products/jacket-4.jpg",
  "./assets/images/products/jacket-5.jpg",
  "./assets/images/products/jacket-6.jpg",
  "./assets/images/products/party-wear-1.jpg",
  "./assets/images/products/party-wear-2.jpg",
  "./assets/images/products/shirt-1.jpg",
  "./assets/images/products/shirt-2.jpg",
  "./assets/images/products/shorts-1.jpg",
  "./assets/images/products/shorts-2.jpg",
  "./assets/images/products/1.jpg",
  "./assets/images/products/2.jpg",
  "./assets/images/products/3.jpg",
  "./assets/images/products/4.jpg"
];

const menItems = ["Cotton T-Shirt", "Denim Jacket", "Formal Oxford Shirt", "Cargo Shorts", "Casual Chinos", "Graphic Tee", "Winter Hoodie", "Polo Shirt", "Track Pants", "V-Neck Sweater"];
const womenItems = ["Summer Floral Dress", "High-Waist Jeans", "Chiffon Blouse", "Maxi Skirt", "Cashmere Cardigan", "Crop Top", "Evening Maxi Dress", "Linen Trousers", "Activewear Leggings", "Silk Camisole"];

for (let i = 0; i < 25; i++) {
  let isMens = true;
  products.push({
    id: ++maxId,
    name: menItems[i % menItems.length] + " " + (i + 1),
    category: "Mens",
    price: Math.floor(Math.random() * 2000) + 499,
    originalPrice: Math.floor(Math.random() * 3000) + 2599,
    image: images[Math.floor(Math.random() * images.length)],
    rating: Math.floor(Math.random() * 2) + 4,
    description: "Experience premium comfort and style with this meticulously crafted garment. Made with high-quality breathable fabrics that ensure durability and a perfect fit. Ideal for both casual outings and daily wear, adding a versatile touch to your wardrobe."
  });
}

for (let i = 0; i < 25; i++) {
  products.push({
    id: ++maxId,
    name: womenItems[i % womenItems.length] + " " + (i + 1),
    category: "Womens",
    price: Math.floor(Math.random() * 2000) + 499,
    originalPrice: Math.floor(Math.random() * 3000) + 2599,
    image: images[Math.floor(Math.random() * images.length)],
    rating: Math.floor(Math.random() * 2) + 4,
    description: "Elevate your fashion game with this chic and elegant piece. Crafted with attention to detail to provide a flattering silhouette and all-day comfort. Perfect for standing out at social events, casual meetups, or as a vibrant addition to your daily closet."
  });
}

// Convert back to JS string
let newFileContent = fileContent.replace(match[1], JSON.stringify(products, null, 2));

// To make keys unquoted for cleaner JS style
newFileContent = newFileContent.replace(/"([^"]+)":/g, '$1:');

fs.writeFileSync('c:\\Flutter project\\anon-ecommerce-website\\assets\\js\\products.js', newFileContent);
console.log("Successfully generated 50 new clothes items and removed Jewellery.");
