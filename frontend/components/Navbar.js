export function Navbar() {
  return `
  <div >
    <nav class="p-[8px] bg-black text-white">
      <h2 class="text-[12px] text-white font-bold text-center">Split the cost with pay in 3.  Find out more</h2>
    </nav>
  <div>
            
    
    
 
  <div class="flex justify-between max-w-11/12 mx-auto my-[16px]">

      <div>
     <input
  type="text"
  id="fname"
  name="fname"
  placeholder="Search for anything here"
  class="
    bg-[#eeeeee]
    w-[370px]
    h-[42px]
    rounded-sm
    px-3
    border
    border-transparent
    focus:outline-none
    focus:ring-0
    focus:border-transparent
  "
/>

    </div>

    <div>
        <h2 class="text-[28px] font-semibold">NEXT</h2>
    </div>

    <div class="text-[24px] space-x-10 flex justify-center items-center">
      <i class="fa-regular fa-heart"></i>
      <i class="fa-solid fa-person"></i>
      <a href="shoppingbag.html"><i class="fa-solid fa-cart-shopping"></i></a>
      
      <button class="bg-black text-white text-[18px] font-semibold px-10 py-2 rounded-sm">CHECKOUT</button>
    </div>

  
  
  
  
  
  </div>

  <div class="mt-[30px]">
  <ul class="flex justify-center items-center gap-12 font-semibold text-[18px] uppercase">
    
    <!-- Women -->
    <li class="relative group cursor-pointer">
      <a href="women.html">Women</a>

     
    </li>

    <!-- Men -->
    <li class="relative group cursor-pointer">
      <a href="men.html">Men</a>

     
    </li>

  </ul>
</div>


 

    
    </div>
  `;
}