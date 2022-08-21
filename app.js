let time = document.getElementById("current-time");

setInterval(()=>{
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString(); //tolocate is used because it returns string representation of time 
},1000);