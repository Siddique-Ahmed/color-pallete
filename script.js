let container = document.querySelector(".container");
let hexCode = "0123456789ABCDEF";

for (let i = 0; i < 30; i++) {
  let box = document.createElement("div");

  let color = "#";
  for (let k = 0; k < 6; k++) {
    color += hexCode[randomColor()];
  }
  
  box.classList.add("boxes");
  let h1 = document.createElement("h1");
  h1.textContent = color;
  box.appendChild(h1);
  box.style.backgroundColor = color;
  container.appendChild(box);
}

function randomColor() {
  return Math.floor(Math.random() * 16)
}



// ok to masla ye tha ke wo direct usko nahi le raha tha shayad islea mene function banaya pehly wo ik hi value count h0 rahi thi ab 6 tak ho rahi plus hoke  


// phr ik varaible banaengy color naam ka or uski value me set kar dengy # jo ke represent karega ke ye hexcode he kyu ke hexcode me # lagana zaroori hota jiski vajah se pata chalta ke ye hexcode he

// phr jo loop chalaya usko 6 se lessthan isliye kia he ke hexcode ki value 6 tak hoti he or phr color naam ke varaible me humne hexcode ko daal dya or usme random color ko daal diya jo random color ki value aayegi wo jayegi hexcode ke variable me or uski jo length hogi wo is for loop me check hogi agar value 6 tak he to hexcode k value ko color naam ke varaiable me daaal dengy

// box ke text me humne hi likha he  jo apko har box me nazar aaraha he
// phr box ko class di he jo humne css me banai thi
// phr humne usko container ka child banake usme daal diya or container kia he jo humne get kia tha apni html se
// or ye querySelector kia karta he jese hum kis cheez ko id se get karte uske liye get element by id karte agar tag name se get karna ho to usko get element by tag name karte wese hi querySelecor me hume id ya tag name nahi lagana parta bas hume agar id get karni to # lagake karte or agar class get karni hoti to hum . lagake karte jese css me hota he;

// ab hum ik div create kar rahe hain jo ke box naam k variable me jayega

// for loop islea chala rahe ke hamara sara kaam isme hoga or usko 30 se less than isliye kia he hume 30 boxes chahiye jo aagy jake apko pata lagega

// ye hamara hex code he jiski help se hum color ko display karengy box ke background me

// math.floor jo he wo math.random ke number ko int value bana dega example dikhata hu

// math.random hame 0 se leke 1 ke darmiyan number deta he like floating value deta he agar usko multiply 16 karke value nikale to wo hume int value dega math.floor ki help se example

// or hum 16 se islea divide kar rahe hain ke hamari jo hexcode ki value hoti he wo 16 character pe hoti he jese (0123456789ABCDEF) ye character hamare hexcode me hote hain /
