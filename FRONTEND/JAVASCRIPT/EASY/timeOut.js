
// setTimeout
  const timeId = setTimeout(() => {
    clearInterval(timeId)
     console.log("Hello Ji");
    
 }, 2000)

 //clearInterval(timeId)

 const time = setInterval(() => {
    //clearInterval(time) clear intervals works all clear the value
    console.log("Hello after every 2 second");
    
}, 2000);

 