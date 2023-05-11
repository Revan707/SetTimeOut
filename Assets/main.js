const block=document.querySelector(".block")
const block2=document.querySelector(".block2")
const block3=document.querySelector(".block3")

function myFunc(){
    setTimeout(()=>{
        block.style.backgroundColor="red",
        block2.style.backgroundColor="gray",
        block3.style.backgroundColor="gray"
    },0)
    setTimeout(()=>{
        block2.style.backgroundColor="yellow",
        block.style.backgroundColor="gray",
        block3.style.backgroundColor="gray"
    },10000)
    setTimeout(()=>{
        block3.style.backgroundColor="green",
        block.style.backgroundColor="gray",
        block2.style.backgroundColor="gray"
    },12000)
}
myFunc()
setInterval(myFunc,27000)