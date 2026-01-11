function handleEnter(event){
  if(event.key==="Enter"){
    const containers= document.getElementById("address");
    const button2 = document.getElementById("button2");
    const button1= document.getElementById("button1");
    containers.classList.add("hidden");
   
    button1.classList.add("hidden");

     button2.style.display = "none";
    const address=document.getElementById("address").value;
    console.log(address);
    const adressholder= document.getElementById("address-container");
    const para= document.createElement("p");
     para.classList.add(
      "text-lg",        // text একটু বড়
      "font-semibold",  // bold
      "text-gray-800",
      "mt-2",
      "p-2",
      "border",
      "border-gray-300",
      "rounded",
      "w-[80%]"
    );
    para.innerText=address;
    adressholder.appendChild(para);
  }
}