const fs = require('fs');

let fileContent = fs.readFileSync('c:\\Flutter project\\anon-ecommerce-website\\assets\\js\\products.js', 'utf8');
let match = fileContent.match(/const products = (\[[\s\S]*\]);/);
if (!match) {
  console.log("Could not find array");
  process.exit(1);
}

let products = eval(match[1]);
let counter = 1;

products.forEach(p => {
  if (p.category === 'Mens' || p.category === 'Womens') {
    p.image = `https://loremflickr.com/400/500/fashion,clothing?random=${counter++}`;
  }
});

let newContent = fileContent.replace(match[1], JSON.stringify(products, null, 2));
// To make keys unquoted for cleaner JS style
newContent = newContent.replace(/"([^"]+)":/g, '$1:');

fs.writeFileSync('c:\\Flutter project\\anon-ecommerce-website\\assets\\js\\products.js', newContent);
console.log('Images updated to loremflickr distinct URLs.');
