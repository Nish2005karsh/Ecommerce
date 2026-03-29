const products = [
  {
    id: 1,
    name: "Classic Leather Belt",
    category: "Accessories",
    price: 499,
    originalPrice: 799,
    image: "./assets/images/products/belt.jpg",
    rating: 4,
    description: "Premium genuine leather belt with a polished stainless steel buckle. Crafted for durability and everyday elegance, this belt fits perfectly with both formal and casual outfits. Available in adjustable sizes to comfortably fit any waist. A timeless accessory for every wardrobe."
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    category: "Mens",
    price: 399,
    originalPrice: 599,
    image: "./assets/images/products/clothes-1.jpg",
    rating: 5,
    description: "Made from 100% breathable cotton fabric with a comfortable crew-neck design and ribbed finish. This casual t-shirt is perfect for everyday wear — whether at home, the gym, or outdoors. Machine washable and available in multiple colours and sizes for the perfect fit."
  },
  {
    id: 3,
    name: "Winter Jacket",
    category: "Mens",
    price: 1999,
    originalPrice: 2999,
    image: "./assets/images/products/jacket-1.jpg",
    rating: 4,
    description: "Stay warm and stylish this winter with our premium insulated jacket. Features a quilted inner lining, adjustable drawstring hood, deep pockets, and a full-length zip. Windproof outer shell with a water-resistant coating. Ideal for cold weather, treks, and daily commutes."
  },
  {
    id: 4,
    name: "Rose Gold Earrings",
    category: "Jewellery",
    price: 1499,
    originalPrice: 2499,
    image: "./assets/images/products/jewellery-1.jpg",
    rating: 5,
    description: "Elegant rose gold plated drop earrings with an anti-tarnish coating for long-lasting shine. Lightweight and hypoallergenic — safe for sensitive ears. The delicate floral design adds a touch of sophistication to any outfit. Makes a perfect gift for birthdays, anniversaries, or festive occasions."
  },
  {
    id: 5,
    name: "Party Wear Dress",
    category: "Womens",
    price: 1299,
    originalPrice: 1999,
    image: "./assets/images/products/party-wear-1.jpg",
    rating: 4,
    description: "Turn heads at your next event with this stunning party wear dress. Crafted from a flowing georgette fabric with a flattering A-line silhouette. Features subtle embroidery detailing, a concealed back zip, and a knee-length hem. Available in multiple sizes. Dry clean recommended."
  },
  {
    id: 6,
    name: "Luxury Perfume",
    category: "Perfume",
    price: 899,
    originalPrice: 1299,
    image: "./assets/images/products/perfume.jpg",
    rating: 5,
    description: "A captivating blend of fresh floral top notes, warm sandalwood heart notes, and a rich musky base. Long-lasting fragrance that stays with you for up to 8 hours. Housed in a premium glass bottle with an elegant gold-accent cap. Perfect for everyday wear and special occasions alike."
  },
  {
    id: 7,
    name: "Formal Shirt",
    category: "Mens",
    price: 799,
    originalPrice: 1199,
    image: "./assets/images/products/shirt-1.jpg",
    rating: 4,
    description: "A crisp and clean 100% cotton formal shirt with a slim-fit silhouette and a classic spread collar. Wrinkle-resistant fabric keeps you looking sharp throughout the day. Perfect for office meetings, business events, or formal occasions. Available in white and light blue. Machine washable."
  },
  {
    id: 8,
    name: "Running Shoes",
    category: "Sports",
    price: 2499,
    originalPrice: 3499,
    image: "./assets/images/products/shoe-1.jpg",
    rating: 5,
    description: "High-performance running shoes engineered for speed and comfort. Features a breathable mesh upper, responsive foam midsole, and a durable rubber outsole with all-terrain grip. Lightweight design reduces fatigue on long runs. Ideal for road running, gym workouts, and outdoor training."
  },
  {
    id: 9,
    name: "Denim Shorts",
    category: "Womens",
    price: 699,
    originalPrice: 999,
    image: "./assets/images/products/shorts-1.jpg",
    rating: 3,
    description: "Classic 5-pocket mid-rise denim shorts made from premium stretch denim for all-day comfort. Features a button fly, belt loops, and a flattering cut that works with any top. Lightly distressed for a relaxed, modern look. Machine washable. Perfect for summer outings, brunches, and casual days."
  },
  {
    id: 10,
    name: "Cricket Bat",
    category: "Sports",
    price: 1599,
    originalPrice: 2099,
    image: "./assets/images/products/sports-1.jpg",
    rating: 4,
    description: "Professional grade English willow cricket bat with a full-grain blade profile and a comfortable cane handle. Medium weight (1100–1200g) for balanced power and control. Includes a toe guard and pre-knocked finish. Suitable for all playing surfaces — leather, tennis, and rubber ball."
  },
  {
    id: 11,
    name: "Smart Watch",
    category: "Accessories",
    price: 3499,
    originalPrice: 4999,
    image: "./assets/images/products/watch-1.jpg",
    rating: 5,
    description: "A feature-packed smartwatch designed for modern living. Tracks heart rate, SpO2, steps, calories, and sleep quality. Receive call and app notifications directly on your wrist. Built-in GPS, 5ATM water resistance, and a stunning AMOLED display. Up to 7-day battery life on a single charge."
  },
  {
    id: 12,
    name: "Silver Necklace Set",
    category: "Jewellery",
    price: 1899,
    originalPrice: 2999,
    image: "./assets/images/products/jewellery-2.jpg",
    rating: 4,
    description: "A beautifully crafted 925 sterling silver necklace set with a matching pendant. The intricate design features a pavé-set cubic zirconia stone that catches light from every angle. Comes in a premium gift box. Anti-tarnish coating ensures long-lasting brilliance. Perfect for weddings and festive occasions."
  },
  {
    id: 13,
    name: "Gold Bangle Set",
    category: "Jewellery",
    price: 2499,
    originalPrice: 3999,
    image: "./assets/images/products/jewellery-3.jpg",
    rating: 5,
    description: "A set of 4 gold-plated bangles with a micro-engraved traditional pattern. Made from high-quality brass with a thick gold plating for lasting wear. Lightweight yet sturdy, these bangles are comfortable for all-day wear. Ideal as a traditional gift or for festival celebrations."
  },
  {
    id: 14,
    name: "Evening Gown",
    category: "Womens",
    price: 2199,
    originalPrice: 3499,
    image: "./assets/images/products/party-wear-2.jpg",
    rating: 5,
    description: "A breathtaking full-length evening gown designed for those who love to make an entrance. Features a fitted bodice with a flared skirt, delicate lace overlay, and an open back with satin ribbon tie. Available in midnight blue, wine red, and emerald green. Dry clean only."
  },
  {
    id: 15,
    name: "Women's Casual Top",
    category: "Womens",
    price: 549,
    originalPrice: 899,
    image: "./assets/images/products/clothes-3.jpg",
    rating: 4,
    description: "A versatile everyday casual top made from soft, breathable cotton-linen blend. The relaxed fit with a round neckline and short sleeves makes it perfect for warm weather. Available in multiple solid colours and prints. Pair with jeans, shorts, or skirts for a stylish effortless look."
  },
  {
    id: 16,
    name: "Denim Jacket",
    category: "Mens",
    price: 1499,
    originalPrice: 2199,
    image: "./assets/images/products/jacket-2.jpg",
    rating: 4,
    description: "A classic slim-fit denim jacket with a button-front closure, chest flap pockets, and adjustable side tabs for a tailored look. Made from heavyweight 100% cotton denim with a slightly distressed finish for a stylish casual look. Pairs great with chinos, jeans, or joggers."
  },
  {
    id: 17,
    name: "Linen Casual Shirt",
    category: "Mens",
    price: 699,
    originalPrice: 1099,
    image: "./assets/images/products/shirt-2.jpg",
    rating: 4,
    description: "Stay cool and comfortable in this premium linen casual shirt. Features a relaxed fit, a classic collar, and a full button placket. The breathable linen fabric is ideal for hot weather. Available in earthy tones — beige, white, and sky blue. Perfect for weekend outings, holidays, and casual Fridays."
  },
  {
    id: 18,
    name: "Oud Woody Cologne",
    category: "Perfume",
    price: 1199,
    originalPrice: 1799,
    image: "./assets/images/products/shampoo.jpg",
    rating: 4,
    description: "A bold and masculine fragrance built around a rich oud heart, wrapped in smoky cedarwood and warm amber base notes. This long-lasting eau de parfum delivers a commanding presence that lasts 10+ hours on skin. Ideal for evening wear and special occasions. 100ml premium glass bottle."
  },
  {
    id: 19,
    name: "Floral Blouse",
    category: "Womens",
    price: 449,
    originalPrice: 799,
    image: "./assets/images/products/clothes-4.jpg",
    rating: 4,
    description: "A charming floral-print blouse with a relaxed fit and short puff sleeves. Made from lightweight rayon fabric that drapes beautifully. The vibrant floral pattern adds a fresh, feminine touch to any outfit. Works perfectly with high-waisted jeans, palazzos, or formal trousers."
  },
  {
    id: 20,
    name: "Sports Shorts",
    category: "Sports",
    price: 399,
    originalPrice: 699,
    image: "./assets/images/products/shorts-2.jpg",
    rating: 4,
    description: "High-performance sports shorts designed for athletes. Made from quick-dry polyester blend with moisture-wicking technology to keep you cool and comfortable. Elastic waistband with drawstring for a secure fit. Features two side pockets. Ideal for gym workouts, running, and outdoor sports."
  }
];
