export function Footer() {
  return `
  <footer class="bg-black text-white text-sm mt-[100px]">

    <!-- Social -->
    <div class="border-b border-gray-800 py-6 text-center">
      <h2 class="mb-4 font-semibold">Our Social Networks</h2>
      <div class="flex justify-center gap-6 text-lg">
        <span class="hover:text-gray-400 cursor-pointer">Facebook</span>
        <span class="hover:text-gray-400 cursor-pointer">X</span>
        <span class="hover:text-gray-400 cursor-pointer">TikTok</span>
        <span class="hover:text-gray-400 cursor-pointer">Instagram</span>
        <span class="hover:text-gray-400 cursor-pointer">Pinterest</span>
        <span class="hover:text-gray-400 cursor-pointer">YouTube</span>
      </div>
    </div>

    <!-- Links -->
    <div class="max-w-11/12 mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

      <!-- Help -->
      <div>
        <h3 class="font-semibold mb-4">Help</h3>
        <ul class="space-y-2 text-gray-300">
          <li>Frequently Asked Questions</li>
          <li>Delivery Information</li>
          <li>Arrange a Return</li>
          <li>Product Recall</li>
          <li>Contact Us</li>
          <li>Site Map</li>
        </ul>
      </div>

      <!-- Shopping -->
      <div>
        <h3 class="font-semibold mb-4">Shopping With Us</h3>
        <ul class="space-y-2 text-gray-300">
          <li>Next Unlimited</li>
          <li>Credit Options</li>
          <li>Gift Cards</li>
          <li>Gift Experiences</li>
          <li>Privacy & Cookie Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>

      <!-- Departments -->
      <div>
        <h3 class="font-semibold mb-4">Departments</h3>
        <ul class="space-y-2 text-gray-300">
          <li>Women</li>
          <li>Men</li>
          <li>Boys</li>
          <li>Girls</li>
          <li>Home</li>
          <li>Beauty</li>
        </ul>
      </div>

      <!-- More -->
      <div>
        <h3 class="font-semibold mb-4">More From Next</h3>
        <ul class="space-y-2 text-gray-300">
          <li>Next App</li>
          <li>The Company</li>
          <li>Careers</li>
          <li>Media & Press</li>
          <li>Corporate Responsibility</li>
        </ul>
      </div>

    </div>

    <!-- Bottom -->
    <div class="border-t border-gray-800 py-4 text-center text-gray-400 text-xs">
      © 2026 Next Retail Ltd. All rights reserved.
    </div>

  </footer>
  `;
}
