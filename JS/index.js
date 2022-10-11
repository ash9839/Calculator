yo=document.getElementById('realans');
console.log(yo);
one.addEventListener("click",()=>{
    console.log("maa ka ")
    yo.innerHTML=yo.innerHTML+"1";
})
two.addEventListener("click",()=>{
    yo.innerHTML=yo.innerHTML+"2";
})
three.addEventListener("click",()=>{
    yo.innerHTML=yo.innerHTML+"3";
})
four.addEventListener("click",()=>{
    yo.innerHTML=yo.innerHTML+"4";
})
five.addEventListener("click",()=>{
    yo.innerHTML=yo.innerHTML+"5";
})
six.addEventListener("click",()=>{
    yo.innerHTML=yo.innerHTML+"6";
})
seven.addEventListener("click",()=>{
    yo.innerHTML=yo.innerHTML+"7";
})
eight.addEventListener("click",()=>{
    yo.innerHTML=yo.innerHTML+"8";
})
nine.addEventListener("click",()=>{
    yo.innerHTML=yo.innerHTML+"9";
})
add.addEventListener("click",()=>{
    yo.innerHTML=yo.innerHTML+"+";
})
minus.addEventListener("click",()=>{
    yo.innerHTML=yo.innerHTML+"-";
})
mul.addEventListener("click",()=>{
    yo.innerHTML=yo.innerHTML+"*";
})
div.addEventListener("click",()=>{
    yo.innerHTML=yo.innerHTML+"/";
})
power.addEventListener("click",()=>{
    yo.innerHTML="";
})
let exp;
let ans;
eq.addEventListener("click",()=>{
    exp=yo.innerHTML;
    console.log(exp);
    try{
        ans=eval(exp);
    }
    catch(err){
        yo.innerHTML="ERROR";
    }
    console.log(ans);
    yo.innerHTML=ans;
    // ans=undefined;
})



