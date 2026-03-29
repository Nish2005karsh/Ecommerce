const fs = require('fs');

let fileContent = fs.readFileSync('c:\\Flutter project\\anon-ecommerce-website\\assets\\js\\products.js', 'utf8');
let match = fileContent.match(/const products = (\[[\s\S]*\]);/);
if (!match) process.exit(1);

let products = eval(match[1]);

let out = "// ==========================================================================\n";
out += "// EASILY UPDATE YOUR PRODUCTS HERE\n";
out += "// Each line corresponds to one product.\n";
out += "// ==========================================================================\n\n";

out += "const products = [\n";

products.forEach(p => {
  // Compress description to make it short or handle it correctly without line breaks
  let desc = p.description ? p.description.replace(/\n/g, '\\n').replace(/"/g, '\\"') : '';
  out += `  { id: ${p.id}, name: "${p.name}", category: "${p.category}", price: ${p.price}, originalPrice: ${p.originalPrice}, rating: ${p.rating}, image: "${p.image}", description: "${desc}" },\n`;
});

out += "];\n";

// Replace old products array with new formatted tight string
let newContent = fileContent.replace(match[0], out);

fs.writeFileSync('c:\\Flutter project\\anon-ecommerce-website\\assets\\js\\products.js', newContent);
console.log("Reformatted products.js for easy 1-line editing.");
