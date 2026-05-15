btn=document.querySelector(".btn")
h1=document.querySelector("h1")
box1=document.querySelector("#id1")
box2=document.querySelector("#id2")
box3=document.querySelector("#id3")
box4=document.querySelector("#id4")
reset=document.querySelector(".reset")
box=document.querySelectorAll(".box")
btn.addEventListener("click",()=>{
    q=document.querySelector("input").value;
    if (q==""){
        h1.innerText=`Hello`
    }else{
        h1.innerText=`Hello, ${q}`
    }
})
box1.addEventListener("click",()=>{
    box1.style.backgroundColor=box1.innerText
})
box2.addEventListener("click",()=>{
    box2.style.backgroundColor=box2.innerText
})
box3.addEventListener("click",()=>{
    box3.style.backgroundColor=box3.innerText
})
box4.addEventListener("click",()=>{
    box4.style.backgroundColor=box4.innerText
})
reset.addEventListener("click",()=>{
    box.forEach(element => {
        element.style.backgroundColor="white"
    });
    document.querySelector("input").value=""
    h1.innerText=`Hello`

})