(()=>{const e=document.querySelector("#form"),t=document.querySelector("input"),s=document.querySelector("button");let n;e.addEventListener("submit",(e=>e.preventDefault())),s.addEventListener("click",(()=>{n=t.value,e.style.display="none"}));const a=document.querySelector(".section"),r=document.querySelector(".player-lives");let c=10;r.textContent=c;const o=()=>{const e=[{src:"./images/choc.jpeg",name:"choc"},{src:"./images/roza.jpeg",name:"roza"},{src:"./images/deer.jpeg",name:"deer"},{src:"./images/swan.jpeg",name:"swan"},{src:"./images/golf.jpeg",name:"golf"},{src:"./images/squid.jpeg",name:"squid"},{src:"./images/star.jpeg",name:"star"},{src:"./images/town.jpeg",name:"town"},{src:"./images/choc.jpeg",name:"choc"},{src:"./images/roza.jpeg",name:"roza"},{src:"./images/deer.jpeg",name:"deer"},{src:"./images/swan.jpeg",name:"swan"},{src:"./images/golf.jpeg",name:"golf"},{src:"./images/squid.jpeg",name:"squid"},{src:"./images/star.jpeg",name:"star"},{src:"./images/town.jpeg",name:"town"}];return e.sort((()=>Math.random()-.5)),e},l=e=>{let t=o(),s=document.querySelectorAll(".face"),n=document.querySelectorAll(".card");a.style.pointerEvents="none",t.forEach(((e,t)=>{setTimeout((()=>{n[t].classList.remove("toggle"),setTimeout((()=>{n[t].style.pointerEvents="all",s[t].src=e.src,n[t].setAttribute("name",e.name),a.style.pointerEvents="all"}),1e3)}),1e3)})),c=10,r.textContent=c,setTimeout((()=>window.alert(e)),1e3)};o().forEach((e=>{const t=document.createElement("div"),s=document.createElement("img"),o=document.createElement("div");t.classList="card",s.classList="face",o.classList="back",s.src=e.src,t.setAttribute("name",e.name),a.appendChild(t),t.appendChild(s),t.appendChild(o),t.addEventListener("click",(e=>{t.classList.toggle("toggle"),(e=>{e.target.classList.add("flipped");const t=document.querySelectorAll(".flipped"),s=document.querySelectorAll(".toggle");2===t.length&&(t[0].getAttribute("name")===t[1].getAttribute("name")?(console.log("correct"),t.forEach((e=>{e.classList.remove("flipped"),e.style.pointerEvents="none"}))):(console.log("wrong"),t.forEach((e=>{e.classList.remove("flipped"),setTimeout((()=>{e.classList.remove("toggle")}),1e3)})),c--,r.textContent=c,0===c&&l(`${n} je gej`))),16===s.length&&l(`${n} je gej`)})(e)}))}))})();