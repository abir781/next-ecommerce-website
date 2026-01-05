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
      <i class="fa-solid fa-cart-shopping"></i>
      <button class="bg-black text-white text-[18px] font-semibold px-10 py-2 rounded-sm">CHECKOUT</button>
    </div>

  
  
  
  
  
  </div>

  <div class="mt-[30px]">
  <ul class="flex justify-center items-center gap-12 font-semibold text-[18px] uppercase">
   <li class="relative group cursor-pointer">
   <a href="women.html"> Women</a>
 

  <!-- DROPDOWN -->
<div
  class="absolute top-full left-[500px]
         w-[60%] min-w-[100vw] h-[50vh] bg-white
         opacity-0 invisible
         group-hover:opacity-100 group-hover:visible
         z-50
         transform -translate-x-1/2 left-1/2"
>
    <!-- INNER WRAPPER -->
    <div class="grid grid-cols-4">

          <div class="max-w-full  h-full grid grid-cols-4 gap-5 p-10 col-span-3">

      <!-- Category 1 -->
      <div>
        <h4 class="font-semibold mb-3">Clothing</h4>
        <ul class="space-y-2 text-sm text-gray-600">
          <li class="hover:text-black">Tops</li>
          <li class="hover:text-black">Dresses</li>
        </ul>
      </div>

      <!-- Category 2 -->
      <div>
        <h4 class="font-semibold mb-3">Shoes</h4>
        <ul class="space-y-2 text-sm text-gray-600">
          <li>Heels</li>
          <li>Sneakers</li>
        </ul>
      </div>

      <!-- Category 3 -->
      <div>
        <h4 class="font-semibold mb-3">Accessories</h4>
        <ul class="space-y-2 text-sm text-gray-600">
          <li>Bags</li>
          <li>Belts</li>
        </ul>
      </div>

      <!-- Category 4 -->
      <div>
        <h4 class="font-semibold mb-3">Jewelry</h4>
        <ul class="space-y-2 text-sm text-gray-600">
          <li>Necklace</li>
          <li>Rings</li>
        </ul>
      </div>

      <!-- Category 5 -->
      



      <div>
        <h4 class="font-semibold mb-3">Beauty</h4>
        <ul class="space-y-2 text-sm text-gray-600">
          <li>Makeup</li>
          <li>Skincare</li>
        </ul>
      </div>

      <!-- Category 6 -->
      <div>
        <h4 class="font-semibold mb-3">Winter Wear</h4>
        <ul class="space-y-2 text-sm text-gray-600">
          <li>Jackets</li>
          <li>Sweaters</li>
        </ul>
      </div>

      <!-- Category 7 -->
      <div>
        <h4 class="font-semibold mb-3">Sports</h4>
        <ul class="space-y-2 text-sm text-gray-600">
          <li>Activewear</li>
          <li>Shoes</li>
        </ul>
      </div>

      <!-- Category 8 -->
      <div>
        <h4 class="font-semibold mb-3">Sleepwear</h4>
        <ul class="space-y-2 text-sm text-gray-600">
          <li>Pajamas</li>
          <li>Robes</li>
        </ul>
      </div>

    

     

    </div>
           <div class="grid grid-cols-2 gap-2 p-8 col-span-1 ">

  <div class="overflow-hidden rounded-lg">
    <img src="jn1.jpg"
         alt="Category 1"
         class="w-[100px] h-[100px] object-cover hover:scale-105 transition duration-300">
  </div>

  <div class="overflow-hidden rounded-lg">
    <img src="jn2.jpg"
         alt="Category 2"
         class="w-[100px] h-[100px] object-cover hover:scale-105 transition duration-300">
  </div>

  <div class="overflow-hidden rounded-lg">
    <img src="jn3.jpg"
         alt="Category 3"
         class="w-[100px] h-[100px] object-cover hover:scale-105 transition duration-300">
  </div>

  <div class="overflow-hidden rounded-lg">
    <img src="jn4.jpg"
         alt="Category 4"
         class="w-[100px] h-[100px] object-cover hover:scale-105 transition duration-300">
  </div>

  <div class="overflow-hidden rounded-lg">
    <img src="jn5.jpg"
         alt="Category 5"
         class="w-[100px] h-[100px] object-cover hover:scale-105 transition duration-300">
  </div>

  <div class="overflow-hidden rounded-lg">
    <img src="jn6.jpg"
         alt="Category 6"
         class="w-[100px] h-[100px] object-cover hover:scale-105 transition duration-300">
  </div>

</div>
    </div>
    

   
  </div>
</li>


    <li class="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
      Men
    </li>

    <li class="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
      Boys
    </li>

    <li class="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
      Girls
    </li>

    <li class="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
      Home
    </li>

    <li class="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
      Baby
    </li>

    <li class="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
      Beauty
    </li>

    <li class="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
      Furniture
    </li>
  </ul>
</div>

 

    
    </div>
  `;
}