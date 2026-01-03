export function Homepage(){
    return `
       <div class="flex ">
            <div>
                <img 
                  src="jira2.jpg"
                  alt="Avatar"
                  class="w-[1100px] h-[790px] object-cover mt-[30px]"
                   />
            </div>

            <div class=" flex-1 flex flex-col justify-center items-center ">
            <img 
                  src="jira5.jpg"
                  alt="crown"
                  class="w-[630px] h-[764px] object-cover mt-[30px]  relative"
                   />
            <h1 class="uppercase absolute top-[230px] font-bold text-[40px]">new season</h1>
                  

            <h1 class=" font-bold text-[40px] uppercase absolute top-[870px]">new styles</h1>
            </div>

          
       </div>

       <div>
         <img 
                  src="hd.jpg"
                  alt="crown"
                  class="w-full object-cover mt-[200px]  relative"
                   />
       </div>

       <div >
           <img 
                  src="model.jpg"
                  alt="crown"
                  class="w-[600px] h-[600px] mx-auto  relative object-cover object-top mt-[80px] mb-[80px]"
                   />

              <img 
                  src="jone.jpg"
                  alt="crown"
                  class="w-full h-full object-contain object-center"
                   />
       </div>

       <marquee behavior="scroll" direction="left" scrollamount="6" class="my-10 text-[20px] font-bold">
                <span class="mx-6">Nike</span>
                <span class="mx-6">Adidas</span>
                 <span class="mx-6">Puma</span>
                 <span class="mx-6">Reebok</span>
                 <span class="mx-6">Levi’s</span>
                  <span class="mx-6">Zara</span>
                    <span class="mx-6">H&M</span>
                   <span class="mx-6">Uniqlo</span>
                   <span class="mx-6">Gucci</span>
               <span class="mx-6">Louis Vuitton</span>
               <span class="mx-6">Converse</span>
                <span class="mx-6">Vans</span>
</marquee>
<div class="py-[36px] bg-[#f7f7f5]">
      <div class="flex justify-between max-w-11/12 mx-auto items-center mb-[10px] ">

  <h1 class="text-[20px] uppercase">the latest trends.</h1>
  <h1 class="text-[60px] font-bold">STYLED.</h1>

</div>

       <div class="flex gap-4 max-w-11/12 mx-auto uppercase font-semibold pb-[20px]">
           <div class="flex flex-col w-1/6">
                 <img src="row1.jpg" class=" h-[280px]  object-cover" />
                 <h1 class="pt-[10px]">Cold weather ready</h1>
           </div>

            <div class="flex flex-col w-1/6">
                 <img src="row2.jpg" class=" h-[280px]  object-cover" />
                 <h1 class="pt-[10px]">Back to school</h1>
           </div>

            <div class="flex flex-col w-1/6">
                 <img src="row3.jpg" class=" h-[280px]  object-cover" />
                 <h1 class="pt-[10px]">new season skincare</h1>
           </div>

            <div class="flex flex-col w-3/6">
                 <img src="row4.jpg" class=" h-[280px]  object-cover" />
                 <h1 class="pt-[10px]">the ultimate skincare routine</h1>
           </div>
           
             
</div>

<div class="pt-[80px] bg-white ">

</div>

</div>

    `
}