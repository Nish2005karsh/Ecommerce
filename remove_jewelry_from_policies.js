const fs = require('fs');
const files = [
  'privacy-policy.html',
  'terms-conditions.html',
  'shipping-policy.html',
  'refund-returns.html',
  'cancellation-policy.html'
];
files.forEach(file => {
  const path = 'c:\\Flutter project\\anon-ecommerce-website\\' + file;
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/.*<li class="menu-category"><a href="category\.html\?cat=Jewellery" class="menu-title">Jewelry<\/a><\/li>.*/g, '');
  fs.writeFileSync(path, content);
  console.log(`Replaced in ${file}`);
});
