fetch(" https://icanhazdadjoke.com/slack")
  .then(res=>res.json()).then(data=>{
    let p=document.getElementById("joke");
    let x=data.attachments[0].text;
    p.innerText=x;
  })