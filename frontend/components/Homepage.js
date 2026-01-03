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
    `
}