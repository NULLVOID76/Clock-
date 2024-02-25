
setInterval(()=>{
    let time= new Date().toLocaleTimeString();
    document.querySelector(".box").innerHTML=`<span> ${time}</span>`
    console.log(time);
},0)
