const e=document.getElementById("header"),t=new Map;let o=!1;document.querySelectorAll(".nav-bar ul li").forEach(l=>{let s=l.querySelector("a")?.getAttribute("href")?.substring(1);if(!s)return;let a=document.getElementById(s);a&&(t.set(a,l),l.addEventListener("click",t=>{t.preventDefault(),i(l),o=!0,window.scrollTo({top:a.offsetTop-e.offsetHeight,behavior:"smooth"}),setTimeout(()=>{o=!1},800)}))}),lastActiveNavItem=void 0;const i=e=>{e!=lastActiveNavItem&&(lastActiveNavItem?.classList.remove("active"),e?.classList.add("active"),lastActiveNavItem=e)},l=l=>{let s;let a=window.scrollY,r=Math.max(0,Math.min(1,(a-10)/(e.offsetHeight-10)));if(e.style.backgroundColor=`rgba(0, 0, 0, ${r})`,l&&(o=!1),o)return;let n=!0,c=a+window.innerHeight;for(let[o,i]of t.entries()){let t=o.offsetTop-e.offsetHeight,l=t+o.offsetHeight;if(n&&a<=t-50||a<=l+2&&c>=t-2&&(s=i,c>=l-2))break;n&&(n=!1)}i(s)};window.addEventListener("scroll",()=>{l()}),l();