import os

footer_html = """  <!-- FOOTER -->
  <footer style="background:#fff; border-top:1px solid #e8e8e8; font-family:'Poppins',sans-serif;">
    <div style="max-width:1200px; margin:0 auto; padding:52px 24px 36px; display:grid; grid-template-columns:1fr 1.2fr 1fr 1fr; gap:48px;">
      <div>
        <a href="index.html" style="display:inline-block; margin-bottom:14px;"><img src="./assets/images/logo/logo.svg" alt="Crawlcore Solutions" style="height:48px; width:auto;"></a>
        <p style="font-size:13px; font-weight:700; color:#222; line-height:1.55; margin:0; text-transform:uppercase; letter-spacing:0.3px;">Crawlcore Solutions<br>Private Limited</p>
      </div>
      <div>
        <h3 style="font-size:15px; font-weight:700; color:#111; margin:0 0 20px; letter-spacing:0.2px;">Company</h3>
        <div style="display:flex; gap:10px; margin-bottom:16px; align-items:flex-start;">
          <span style="margin-top:2px; flex-shrink:0; color:#555;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
          <p style="font-size:13px; color:#555; line-height:1.7; margin:0;">UG 27, Shakuntala Complex,<br>Aurangabad, Mathura,<br>Uttar Pradesh – 281006</p>
        </div>
        <div style="display:flex; gap:10px; margin-bottom:14px; align-items:center;">
          <span style="color:#555; flex-shrink:0;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.1 11.6a19.53 19.53 0 0 1-3.07-8.67A2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/></svg></span>
          <a href="tel:+919983685627" style="font-size:13px; color:#555; text-decoration:none;">+91 9983685627</a>
        </div>
        <div style="display:flex; gap:10px; align-items:center;">
          <span style="color:#555; flex-shrink:0;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
          <a href="mailto:support@crawlcoresolutions.com" style="font-size:13px; color:#555; text-decoration:none;">support@crawlcoresolutions.com</a>
        </div>
      </div>
      <div>
        <h3 style="font-size:15px; font-weight:700; color:#111; margin:0 0 20px; letter-spacing:0.2px;">Information</h3>
        <ul style="list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:12px;">
          <li><a href="index.html" style="font-size:13px; color:#555; text-decoration:none; transition:color 0.2s;">Home</a></li>
          <li><a href="category.html" style="font-size:13px; color:#555; text-decoration:none; transition:color 0.2s;">Shop</a></li>
          <li><a href="#" style="font-size:13px; color:#555; text-decoration:none; transition:color 0.2s;">About</a></li>
          <li><a href="#" style="font-size:13px; color:#555; text-decoration:none; transition:color 0.2s;">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 style="font-size:15px; font-weight:700; color:#111; margin:0 0 20px; letter-spacing:0.2px;">Contact</h3>
        <ul style="list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:12px;">
          <li><a href="terms-conditions.html" style="font-size:13px; color:#555; text-decoration:none; transition:color 0.2s;">Terms &amp; Conditions</a></li>
          <li><a href="privacy-policy.html" style="font-size:13px; color:#555; text-decoration:none; transition:color 0.2s;">Privacy Policy</a></li>
          <li><a href="refund-returns.html" style="font-size:13px; color:#555; text-decoration:none; transition:color 0.2s; line-height:1.5;">Refund &amp; Returns</a></li>
          <li><a href="cancellation-policy.html" style="font-size:13px; color:#555; text-decoration:none; transition:color 0.2s;">Cancellation Policy</a></li>
          <li><a href="shipping-policy.html" style="font-size:13px; color:#555; text-decoration:none; transition:color 0.2s;">Shipping Policy</a></li>
        </ul>
      </div>
    </div>
    <div style="border-top:1px solid #e8e8e8; padding:16px 24px; text-align:left; max-width:1200px; margin:0 auto;">
      <p style="font-size:13px; color:#888; margin:0;">&copy; Crawlcore Solutions 2026</p>
    </div>
  </footer>"""

def replace_footer(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the footer tag
    import re
    new_content = re.sub(r'<footer>.*?</footer>', footer_html, content, flags=re.DOTALL)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

html_files = [f for f in os.listdir('.') if f.endswith('.html') and f != 'checkout.html']
for h in html_files:
    replace_footer(h)
    print(f"Updated footer in {h}")

# Now policy pages
policy_contents = {
    'terms-conditions.html': """
  <main>
    <div class="policy-hero">
      <div class="container">
        <h1>Terms &amp; Conditions</h1>
      </div>
    </div>
    <div class="policy-body">
      <div class="container policy-wrap" style="max-width:900px;margin:40px auto;padding:30px;background:#fff;border-radius:12px;box-shadow:0 5px 20px rgba(0,0,0,0.05);font-family:'Poppins',sans-serif;">
        <h2 style="font-size:22px;margin-bottom:15px;color:#111;">General Information</h2>
        <p style="color:#555;font-size:14px;line-height:1.8;margin-bottom:15px;">Welcome to Crawlcore Solutions Private Limited! By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. 1.1 Crawlcore Solutions Private Limited is an online Women's and Men's dress store. 1.2 These terms govern your use of the website and product purchase.</p>
        <h2 style="font-size:22px;margin-bottom:15px;color:#111;margin-top:30px;">Account and Registration</h2>
        <p style="color:#555;font-size:14px;line-height:1.8;margin-bottom:15px;">2.1 To access certain services, you may be required to create an account. 2.2 You are responsible for maintaining the confidentiality of your account details.</p>
        <h2 style="font-size:22px;margin-bottom:15px;color:#111;margin-top:30px;">Company Details</h2>
        <p style="color:#555;font-size:14px;line-height:1.8;margin-bottom:15px;"><strong>Crawlcore Solutions Private Limited</strong><br>
        UG 27, Shakuntala Complex, Aurangabad, Mathura, UP – 281006<br>
        Email: support@crawlcoresolutions.com<br>
        Phone: +91 9983685627</p>
      </div>
    </div>
  </main>
""",
    'privacy-policy.html': """
  <main>
    <div class="policy-hero">
      <div class="container"><h1>Privacy Policy</h1></div>
    </div>
    <div class="policy-body">
      <div class="container policy-wrap" style="max-width:900px;margin:40px auto;padding:30px;background:#fff;border-radius:12px;box-shadow:0 5px 20px rgba(0,0,0,0.05);font-family:'Poppins',sans-serif;">
        <h2 style="font-size:22px;margin-bottom:15px;color:#111;">Information We Collect</h2>
        <p style="color:#555;font-size:14px;line-height:1.8;margin-bottom:15px;">At Crawlcore Solutions Private Limited, we collect personal information such as name, email, shipping address, and phone number (+91 9983685627) when you register or place an order.</p>
        <h2 style="font-size:22px;margin-bottom:15px;color:#111;margin-top:30px;">How We Use It</h2>
        <p style="color:#555;font-size:14px;line-height:1.8;margin-bottom:15px;">We use your data to fulfill orders, process payments, and provide customer support via support@crawlcoresolutions.com. We do not sell your personal data to third parties.</p>
      </div>
    </div>
  </main>
""",
    'refund-returns.html': """
  <main>
    <div class="policy-hero">
      <div class="container"><h1>Refund &amp; Returns Policy</h1></div>
    </div>
    <div class="policy-body">
      <div class="container policy-wrap" style="max-width:900px;margin:40px auto;padding:30px;background:#fff;border-radius:12px;box-shadow:0 5px 20px rgba(0,0,0,0.05);font-family:'Poppins',sans-serif;">
        <h2 style="font-size:22px;margin-bottom:15px;color:#111;">Returns Eligibility</h2>
        <p style="color:#555;font-size:14px;line-height:1.8;margin-bottom:15px;">Crawlcore Solutions Private Limited offers a 7-day return policy. Items must be unused, unwashed, and in original packaging.</p>
        <h2 style="font-size:22px;margin-bottom:15px;color:#111;margin-top:30px;">Refund Process</h2>
        <p style="color:#555;font-size:14px;line-height:1.8;margin-bottom:15px;">Once we receive and inspect your return, refunds are processed within 5-10 business days. For Cash on Delivery orders, we will request bank details for a transfer.</p>
        <p style="color:#555;font-size:14px;line-height:1.8;margin-bottom:15px;">Contact us at support@crawlcoresolutions.com or +91 9983685627 to initiate a return.</p>
      </div>
    </div>
  </main>
""",
    'cancellation-policy.html': """
  <main>
    <div class="policy-hero">
      <div class="container"><h1>Cancellation Policy</h1></div>
    </div>
    <div class="policy-body">
      <div class="container policy-wrap" style="max-width:900px;margin:40px auto;padding:30px;background:#fff;border-radius:12px;box-shadow:0 5px 20px rgba(0,0,0,0.05);font-family:'Poppins',sans-serif;">
        <h2 style="font-size:22px;margin-bottom:15px;color:#111;">Order Cancellation</h2>
        <p style="color:#555;font-size:14px;line-height:1.8;margin-bottom:15px;">At Crawlcore Solutions Private Limited, you may cancel your order within 12 hours of placement. If the order has already been dispatched, it cannot be cancelled, but you may refuse delivery or request a return.</p>
        <h2 style="font-size:22px;margin-bottom:15px;color:#111;margin-top:30px;">How to Cancel</h2>
        <p style="color:#555;font-size:14px;line-height:1.8;margin-bottom:15px;">Contact support immediately at support@crawlcoresolutions.com or +91 9983685627 with your Order ID.</p>
      </div>
    </div>
  </main>
""",
    'shipping-policy.html': """
  <main>
    <div class="policy-hero">
      <div class="container"><h1>Shipping Policy</h1></div>
    </div>
    <div class="policy-body">
      <div class="container policy-wrap" style="max-width:900px;margin:40px auto;padding:30px;background:#fff;border-radius:12px;box-shadow:0 5px 20px rgba(0,0,0,0.05);font-family:'Poppins',sans-serif;">
        <h2 style="font-size:22px;margin-bottom:15px;color:#111;">Shipping Locations & Times</h2>
        <p style="color:#555;font-size:14px;line-height:1.8;margin-bottom:15px;">Crawlcore Solutions Private Limited ships across India. Orders are typically processed within 1-2 business days. Delivery within metro cities takes 2-4 days, and 5-7 days for other regions.</p>
        <h2 style="font-size:22px;margin-bottom:15px;color:#111;margin-top:30px;">Shipping Charges</h2>
        <p style="color:#555;font-size:14px;line-height:1.8;margin-bottom:15px;">We offer Free Shipping on all orders. Contact support@crawlcoresolutions.com or +91 9983685627 for any delivery concerns.</p>
      </div>
    </div>
  </main>
"""
}

for filename, new_main in policy_contents.items():
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        new_content = re.sub(r'<main>.*?</main>', new_main, content, flags=re.DOTALL)
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated main content in {filename}")
