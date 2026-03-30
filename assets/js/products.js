// ==========================================================================
// PRODUCTS - 50+ Men's & Women's Clothing (No Jewellery / Electronics)
// API: fakestoreapi.com (clothing only) + curated Unsplash clothing images
// ==========================================================================

const USD_TO_INR = 83;

// --------------------------------------------------------------------------
// CURATED CLOTHING PRODUCTS (Men's + Women's)  — 50 hand-picked items
// All images are specific, relevant clothing photos from Unsplash
// --------------------------------------------------------------------------
const curatedClothes = [

  // ── MEN'S CLOTHING (25 items) ──────────────────────────────────────────
  {
    id: 201, name: "Classic White Polo Shirt", category: "Mens",
    price: 699, originalPrice: 1099, rating: 4,
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=500&fit=crop",
    description: "Premium cotton polo shirt with ribbed collar and cuffs. Comfortable and versatile for casual and semi-formal occasions. Machine washable."
  },
  {
    id: 202, name: "Blue Slim Denim Jacket", category: "Mens",
    price: 1499, originalPrice: 2299, rating: 4,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
    description: "Classic slim-fit denim jacket with button-front closure and chest pockets. Made from heavyweight 100% cotton denim. Perfect with jeans or chinos."
  },
  {
    id: 203, name: "Slim Fit Chino Pants", category: "Mens",
    price: 1199, originalPrice: 1799, rating: 4,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop",
    description: "Tailored slim-fit chinos in a stretch cotton-blend fabric. Easy-care, wrinkle-resistant. Great for the office and casual outings."
  },
  {
    id: 204, name: "Graphic Print T-Shirt", category: "Mens",
    price: 499, originalPrice: 799, rating: 4,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop",
    description: "Urban graphic tee made from 100% soft cotton. Round neck, short sleeves, relaxed fit. Ideal for casual everyday wear."
  },
  {
    id: 205, name: "Winter Fleece Hoodie", category: "Mens",
    price: 1299, originalPrice: 1999, rating: 5,
    image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400&h=500&fit=crop",
    description: "Cosy fleece-lined hoodie with kangaroo pockets and adjustable drawstring. Soft brushed interior for extra warmth."
  },
  {
    id: 206, name: "Formal White Oxford Shirt", category: "Mens",
    price: 899, originalPrice: 1399, rating: 4,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
    description: "Crisp 100% cotton Oxford shirt with spread collar and button-down placket. Wrinkle-resistant. Perfect for office and formal events."
  },
  {
    id: 207, name: "Black Track Pants", category: "Mens",
    price: 799, originalPrice: 1299, rating: 4,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=500&fit=crop",
    description: "Lightweight polyester track pants with moisture-wicking fabric and elastic waistband. Ideal for gym, running, and casual wear."
  },
  {
    id: 208, name: "V-Neck Wool Sweater", category: "Mens",
    price: 1699, originalPrice: 2499, rating: 4,
    image: "https://images.unsplash.com/photo-1614975141055-35b4063e9421?w=400&h=500&fit=crop",
    description: "Warm knitted V-neck sweater made from soft wool-blend yarn. Slim fit, ribbed cuffs and hem. Great layered over a shirt."
  },
  {
    id: 209, name: "Multi-Pocket Cargo Shorts", category: "Mens",
    price: 949, originalPrice: 1499, rating: 4,
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=400&h=500&fit=crop",
    description: "Durable cotton cargo shorts with multiple zip pockets. Adjustable waistband for a perfect fit. Great for outdoor and casual use."
  },
  {
    id: 210, name: "Linen Summer Shirt", category: "Mens",
    price: 799, originalPrice: 1199, rating: 4,
    image: "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?w=400&h=500&fit=crop",
    description: "Breathy 100% linen shirt perfect for hot weather. Relaxed fit, classic collar, full button placket. Available in beige, white, sky blue."
  },
  {
    id: 211, name: "Insulated Bomber Jacket", category: "Mens",
    price: 2299, originalPrice: 3499, rating: 5,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=400&h=500&fit=crop",
    description: "Water-resistant bomber jacket with ribbed collar, cuffs, and hem. Lightweight insulation keeps you warm without the bulk."
  },
  {
    id: 212, name: "Striped Casual T-Shirt", category: "Mens",
    price: 449, originalPrice: 699, rating: 4,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    description: "Soft cotton striped crew-neck tee. Relaxed unisex fit. Machine washable. A must-have wardrobe essential."
  },
  {
    id: 213, name: "Long Sleeve Henley Top", category: "Mens",
    price: 599, originalPrice: 899, rating: 4,
    image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=400&h=500&fit=crop",
    description: "Classic long-sleeve henley shirt with 3-button placket. Made from soft Jersey fabric. Great for layering or wearing solo."
  },
  {
    id: 214, name: "Sports Dry-Fit Jersey", category: "Mens",
    price: 699, originalPrice: 1099, rating: 4,
    image: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?w=400&h=500&fit=crop",
    description: "Lightweight dry-fit sports jersey with moisture-wicking technology. Breathable mesh panels for ventilation. Ideal for all sports."
  },
  {
    id: 215, name: "Slim Fit Dark Jeans", category: "Mens",
    price: 1499, originalPrice: 2199, rating: 5,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop",
    description: "Premium dark wash slim-fit jeans with stretch denim for comfort. Five-pocket styling. Versatile for office or casual outings."
  },
  {
    id: 216, name: "Cotton Casual Kurta", category: "Mens",
    price: 899, originalPrice: 1399, rating: 4,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=500&fit=crop",
    description: "Traditional Indian-style cotton kurta with mandarin collar and side slits. Comfortable for daily wear and festive occasions."
  },
  {
    id: 217, name: "Zip-Up Fleece Sweatshirt", category: "Mens",
    price: 1099, originalPrice: 1799, rating: 4,
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&h=500&fit=crop",
    description: "Full zip-up sweatshirt with soft fleece lining and two side pockets. Easy to layer over tees or under jackets."
  },
  {
    id: 218, name: "Round Neck Printed Tee", category: "Mens",
    price: 399, originalPrice: 599, rating: 3,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop",
    description: "Fun printed round-neck tee for everyday casual wear. Soft breathable cotton. Available in multiple designs and colors."
  },
  {
    id: 219, name: "Smart Formal Blazer", category: "Mens",
    price: 3499, originalPrice: 4999, rating: 5,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop",
    description: "Tailored slim-fit single-breasted blazer. Notch lapel with two-button closure. Perfect for business meetings and formal events."
  },
  {
    id: 220, name: "Cotton Athletic Shorts", category: "Mens",
    price: 499, originalPrice: 799, rating: 4,
    image: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=400&h=500&fit=crop",
    description: "Breathable cotton-blend athletic shorts with elastic waistband and drawstring. Ideal for gym, yoga, and casual use."
  },
  {
    id: 221, name: "Washed Denim Jeans", category: "Mens",
    price: 1299, originalPrice: 1999, rating: 4,
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&h=500&fit=crop",
    description: "Classic five-pocket washed denim jeans. Regular fit with button fly and belt loops. A wardrobe staple for all seasons."
  },
  {
    id: 222, name: "Check Flannel Shirt", category: "Mens",
    price: 899, originalPrice: 1299, rating: 4,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=400&h=500&fit=crop",
    description: "Cozy check flannel shirt in a brushed cotton fabric. Button front with chest pockets. Great for layering in cooler weather."
  },
  {
    id: 223, name: "Puffer Winter Jacket", category: "Mens",
    price: 2999, originalPrice: 4499, rating: 5,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=500&fit=crop",
    description: "Insulated puffer jacket with water-resistant shell and baffle stitching. Packable design with stuff sack included."
  },
  {
    id: 224, name: "Printed Ethnic Kurta Set", category: "Mens",
    price: 1499, originalPrice: 2299, rating: 4,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=500&fit=crop",
    description: "Block-print cotton kurta paired with matching churidar pants. Comfortable fit with side slits. Perfect for festivals and celebrations."
  },
  {
    id: 225, name: "Beige Casual Chinos", category: "Mens",
    price: 999, originalPrice: 1599, rating: 4,
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&h=500&fit=crop",
    description: "Relaxed-fit beige chinos in a lightweight cotton-linen blend. Versatile enough for the office or a weekend outing."
  },

  // ── WOMEN'S CLOTHING (25 items) ────────────────────────────────────────
  {
    id: 301, name: "Summer Floral Dress", category: "Womens",
    price: 1199, originalPrice: 1799, rating: 4,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
    description: "Light and flowy summer dress with a delicate floral print. V-neckline, short sleeves, and a tiered skirt for effortless style."
  },
  {
    id: 302, name: "High-Waist Skinny Jeans", category: "Womens",
    price: 1499, originalPrice: 2199, rating: 5,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop",
    description: "Flattering high-waist skinny jeans in a stretch denim fabric. Five-pocket styling with button-fly closure. Perfect for any occasion."
  },
  {
    id: 303, name: "Chiffon Ruffle Blouse", category: "Womens",
    price: 699, originalPrice: 1099, rating: 4,
    image: "https://images.unsplash.com/photo-1604575026879-f62b3b3d5e57?w=400&h=500&fit=crop",
    description: "Elegant chiffon blouse with delicate ruffle detailing along the neckline. Flowy and lightweight, perfect for work or evening outings."
  },
  {
    id: 304, name: "Boho Maxi Skirt", category: "Womens",
    price: 999, originalPrice: 1499, rating: 4,
    image: "https://images.unsplash.com/photo-1583496661160-fb5218afa8fc?w=400&h=500&fit=crop",
    description: "Floor-length bohemian maxi skirt in lightweight woven fabric. Elasticated waistband and side slits for ease of movement."
  },
  {
    id: 305, name: "Cashmere Wrap Cardigan", category: "Womens",
    price: 2199, originalPrice: 3299, rating: 5,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop",
    description: "Soft cashmere-blend wrap cardigan in a relaxed fit. Tie belt at waist for a flattering silhouette. Luxuriously warm and comfortable."
  },
  {
    id: 306, name: "Crop Top - Solid Colours", category: "Womens",
    price: 449, originalPrice: 699, rating: 4,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
    description: "Trendy ribbed crop top with a square neckline and short sleeves. Made from a soft cotton-spandex blend for a comfortable fit."
  },
  {
    id: 307, name: "Evening Maxi Gown", category: "Womens",
    price: 2499, originalPrice: 3799, rating: 5,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop",
    description: "Stunning floor-length evening gown with a fitted bodice and flared skirt. Concealed back zip. Available in navy, wine, and emerald."
  },
  {
    id: 308, name: "Wide-Leg Linen Trousers", category: "Womens",
    price: 1099, originalPrice: 1699, rating: 4,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=500&fit=crop",
    description: "Relaxed wide-leg trousers in breathable linen. Elasticated waistband with tie detail. Cool and stylish for summer days."
  },
  {
    id: 309, name: "High-Waist Yoga Leggings", category: "Womens",
    price: 899, originalPrice: 1399, rating: 5,
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=500&fit=crop",
    description: "4-way stretch high-waist yoga leggings. Moisture-wicking, squat-proof fabric. Deep waistband for tummy control and comfort."
  },
  {
    id: 310, name: "Satin Slip Camisole", category: "Womens",
    price: 799, originalPrice: 1199, rating: 4,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=500&fit=crop",
    description: "Silky satin camisole with adjustable spaghetti straps and lace trim. Can be worn as a top or layered under a blazer."
  },
  {
    id: 311, name: "Women's Denim Jacket", category: "Womens",
    price: 1599, originalPrice: 2399, rating: 4,
    image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400&h=500&fit=crop",
    description: "Classic cropped denim jacket with button front and chest flap pockets. A forever-staple that pairs with everything."
  },
  {
    id: 312, name: "Party Wear Mini Dress", category: "Womens",
    price: 1799, originalPrice: 2699, rating: 5,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    description: "Glamorous mini dress perfect for parties. Flattering A-line silhouette with embroidery detailing. Concealed back zip closure."
  },
  {
    id: 313, name: "Off-Shoulder Ruffle Top", category: "Womens",
    price: 649, originalPrice: 999, rating: 4,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop",
    description: "Trendy off-shoulder top with ruffle neckline detail. Made from lightweight fabric. Perfect for beach trips and vacations."
  },
  {
    id: 314, name: "Printed Anarkali Kurti", category: "Womens",
    price: 1199, originalPrice: 1799, rating: 5,
    image: "https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=400&h=500&fit=crop",
    description: "Beautiful block-printed anarkali kurti in pure cotton. Three-quarter sleeves with round neckline. Ideal for festive and casual occasions."
  },
  {
    id: 315, name: "Palazzo Pants - Ethnic Print", category: "Womens",
    price: 799, originalPrice: 1299, rating: 4,
    image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=400&h=500&fit=crop",
    description: "Flowy printed palazzo pants with an elasticated waistband. Comfortable fit, versatile styling with kurtas or tops."
  },
  {
    id: 316, name: "Floral Puff-Sleeve Blouse", category: "Womens",
    price: 749, originalPrice: 1199, rating: 4,
    image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=400&h=500&fit=crop",
    description: "Charming floral-print blouse with statement puff sleeves. Lightweight rayon fabric that drapes beautifully."
  },
  {
    id: 317, name: "Straight-Leg Trousers", category: "Womens",
    price: 1299, originalPrice: 1999, rating: 4,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop",
    description: "Tailored straight-leg trousers in a wrinkle-resistant fabric. High waist with concealed zip. Elegant and office-appropriate."
  },
  {
    id: 318, name: "A-Line Midi Skirt", category: "Womens",
    price: 899, originalPrice: 1399, rating: 4,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    description: "Classic A-line midi skirt hitting below the knee. Elasticated waist and a full fit. Pairs perfectly with blouses and crop tops."
  },
  {
    id: 319, name: "Casual Cotton Sundress", category: "Womens",
    price: 999, originalPrice: 1499, rating: 4,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop",
    description: "Breezy cotton sundress with a floral print and spaghetti straps. Adjustable back tie for a customizable fit. Summer essential."
  },
  {
    id: 320, name: "Ribbed Turtleneck Top", category: "Womens",
    price: 699, originalPrice: 1099, rating: 4,
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400&h=500&fit=crop",
    description: "Cosy ribbed turtleneck top in a fitted silhouette. Soft cotton-spandex blend with stretch. Perfect layering piece for winter."
  },
  {
    id: 321, name: "Sheer Wrap Maxi Dress", category: "Womens",
    price: 1899, originalPrice: 2899, rating: 5,
    image: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=400&h=500&fit=crop",
    description: "Elegant wrap-style maxi dress in sheer chiffon over a lining. Adjustable wrap tie. Perfect for weddings and special occasions."
  },
  {
    id: 322, name: "Active Workout Tank Top", category: "Womens",
    price: 549, originalPrice: 849, rating: 4,
    image: "https://images.unsplash.com/photo-1485462537746-965f33f579be?w=400&h=500&fit=crop",
    description: "Racerback workout tank top with moisture-wicking fabric. Built-in shelf bra for light support. Ideal for the gym and yoga."
  },
  {
    id: 323, name: "Knit Long Cardigan", category: "Womens",
    price: 1499, originalPrice: 2199, rating: 4,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=500&fit=crop",
    description: "Cosy long open-front knit cardigan with pockets. Relaxed fit, perfect for layering over any outfit in cooler months."
  },
  {
    id: 324, name: "Tropical Print Co-ord Set", category: "Womens",
    price: 1799, originalPrice: 2699, rating: 5,
    image: "https://images.unsplash.com/photo-1613512216745-4fe050ee5fc6?w=400&h=500&fit=crop",
    description: "Matching co-ordinate set featuring a crop top and wide-leg trousers in a bold tropical print. Holiday-ready style."
  },
  {
    id: 325, name: "Embroidered Cotton Kurti", category: "Womens",
    price: 1099, originalPrice: 1699, rating: 5,
    image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=400&h=500&fit=crop",
    description: "Beautifully embroidered cotton kurti with a straight cut and side slits. Vibrant colors for festivals and family gatherings."
  },
];

// --------------------------------------------------------------------------
// Convert FakeStore API product to our format
// --------------------------------------------------------------------------
function convertApiProduct(p) {
  const priceINR = Math.round(p.price * USD_TO_INR);
  const discountPct = Math.floor(Math.random() * 26) + 10; // 10–35%
  const originalINR = Math.round(priceINR * (1 + discountPct / 100));
  return {
    id: p.id,
    name: p.title.length > 48 ? p.title.substring(0, 48).trim() + "…" : p.title,
    category: p.category === "men's clothing" ? "Mens" : "Womens",
    price: priceINR,
    originalPrice: originalINR,
    rating: Math.round(p.rating.rate),
    image: p.image,
    description: p.description
  };
}

// --------------------------------------------------------------------------
// Render product cards into #product-container
// --------------------------------------------------------------------------
function renderProducts(productList) {
  const container = document.getElementById("product-container");
  if (!container) return;
  container.innerHTML = "";

  productList.forEach(product => {
    const stars = Array.from({ length: 5 }, (_, i) =>
      `<ion-icon name="${i < product.rating ? "star" : "star-outline"}"></ion-icon>`
    ).join("");

    const discount = product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

    const card = document.createElement("div");
    card.className = "product-card";
    card.style.cssText = [
      "background:#fff", "border-radius:12px", "overflow:hidden",
      "box-shadow:0 2px 12px rgba(0,0,0,0.08)", "transition:transform 0.22s,box-shadow 0.22s",
      "cursor:pointer", "display:flex", "flex-direction:column"
    ].join(";");

    card.innerHTML = `
      <div style="position:relative;overflow:hidden;height:260px;background:#f8f8f8;display:flex;align-items:center;justify-content:center;">
        ${discount > 0 ? `<span style="position:absolute;top:10px;left:10px;background:#e74c3c;color:#fff;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;z-index:2;">${discount}% Off</span>` : ""}
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          style="max-height:240px;max-width:100%;object-fit:contain;padding:12px;transition:transform 0.3s;"
          onerror="this.src='./assets/images/products/clothes-1.jpg'"
        >
        <div class="card-overlay" style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0);display:flex;align-items:center;justify-content:center;gap:8px;padding:10px;opacity:0;transition:all 0.28s;">
          <button onclick="addToCart(${product.id})" style="background:#e74c3c;color:#fff;border:none;padding:8px 16px;border-radius:6px;font-size:12px;cursor:pointer;font-weight:700;letter-spacing:0.3px;">🛒 Add to Cart</button>
          <button onclick="addToWishlist(${product.id})" style="background:#fff;color:#e74c3c;border:2px solid #e74c3c;padding:6px 14px;border-radius:6px;font-size:12px;cursor:pointer;font-weight:700;">♡ Wish</button>
        </div>
      </div>
      <div style="padding:14px;flex:1;display:flex;flex-direction:column;justify-content:space-between;">
        <div>
          <p style="font-size:10px;color:#e74c3c;font-weight:800;text-transform:uppercase;letter-spacing:1px;margin:0 0 5px;">${product.category}</p>
          <h3 style="font-size:13px;font-weight:600;color:#222;margin:0 0 8px;line-height:1.45;min-height:38px;">${product.name}</h3>
          <div style="display:flex;gap:2px;color:#f39c12;font-size:12px;margin-bottom:10px;">${stars}</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:16px;font-weight:800;color:#e74c3c;">₹${product.price.toLocaleString("en-IN")}</span>
          ${product.originalPrice > product.price ? `<del style="font-size:12px;color:#bbb;">₹${product.originalPrice.toLocaleString("en-IN")}</del>` : ""}
        </div>
      </div>
    `;

    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.boxShadow = "0 10px 28px rgba(0,0,0,0.14)";
      const ov = card.querySelector(".card-overlay");
      if (ov) { ov.style.opacity = "1"; ov.style.background = "rgba(0,0,0,0.05)"; }
      const img = card.querySelector("img");
      if (img) img.style.transform = "scale(1.06)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
      const ov = card.querySelector(".card-overlay");
      if (ov) { ov.style.opacity = "0"; ov.style.background = "rgba(0,0,0,0)"; }
      const img = card.querySelector("img");
      if (img) img.style.transform = "";
    });

    container.appendChild(card);
  });
}

// --------------------------------------------------------------------------
// Load products: API clothing items + curated list (no jewellery/electronics)
// --------------------------------------------------------------------------
async function loadProducts() {
  const container = document.getElementById("product-container");
  if (!container) return;

  // Loading spinner
  if (!document.getElementById("_spin_css")) {
    const s = document.createElement("style");
    s.id = "_spin_css";
    s.textContent = `@keyframes _spin{to{transform:rotate(360deg)}}`;
    document.head.appendChild(s);
  }
  container.innerHTML = `
    <div style="grid-column:1/-1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 0;gap:18px;">
      <div style="width:46px;height:46px;border:4px solid #f0f0f0;border-top-color:#e74c3c;border-radius:50%;animation:_spin 0.8s linear infinite;"></div>
      <p style="color:#aaa;font-size:14px;font-weight:500;">Loading products…</p>
    </div>`;

  let apiClothes = [];
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (res.ok) {
      const all = await res.json();
      // Keep ONLY men's and women's clothing — no jewellery, no electronics
      apiClothes = all
        .filter(p => p.category === "men's clothing" || p.category === "women's clothing")
        .map(convertApiProduct);
    }
  } catch (e) {
    console.warn("FakeStore API unavailable, showing curated list only.");
  }

  // Merge API items first, then curated (deduplicate by id — shouldn't overlap)
  const allProducts = [...apiClothes, ...curatedClothes];
  window.allProducts = allProducts;

  renderProducts(allProducts);
}

document.addEventListener("DOMContentLoaded", loadProducts);
