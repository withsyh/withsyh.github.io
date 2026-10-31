const NAV=[["index.html#about","About","about.html"],["research.html","Research","research.html"],["publications.html","Publications","publications.html"],["cv.html","CV","cv.html"],["index.html#contact","Contact",""]];
const here=location.pathname.split("/").pop()||"index.html";
function header(sub){
  const h=document.createElement("header");if(sub)h.className="sub";
  h.innerHTML=`<div class="dim">SEJONG RESEARCH INSTITUTE<i></i>2026</div>
  <a class="title" href="index.html">SONG, YANGHO</a>
  ${sub?"":`<p>송양호 · 세종연구원 책임연구위원 · 수자원공학 박사</p>`}
  <nav class="nav">${NAV.map(([u,n,p])=>`<a href="${u}"${p&&p===here?' class="on"':""}>${n}</a>`).join("")}</nav>`;
  document.querySelector(".w").prepend(h);
  const f=document.createElement("footer");f.textContent="© 2026 SONG, YANGHO";document.querySelector(".w").append(f);
}
const TYPE={journal:"Journal Papers",report:"Reports",conference:"Conference"};
function rrHTML(r){
  const im=r.img?`<a class="im" href="${r.url}" target="_blank" rel="noopener"><img src="${r.img}" alt="${r.title}" loading="lazy"></a>`:`<div class="noimg">NO IMAGE</div>`;
  return `<div class="rr">${im}<div><small>${r.year} · ${r.tag}</small><b>${r.url?`<a href="${r.url}" target="_blank" rel="noopener">${r.title}</a>`:r.title}</b><p>${r.desc}</p></div></div>`;
}
function pubHTML(p){
  return `<li><span class="y">${p.year}</span><div><span class="t">${p.title}.</span> <span class="s">${p.src}</span>${p.url?`<a class="lk" href="${p.url}" target="_blank" rel="noopener">LINK</a>`:""}</div></li>`;
}
function pubGroups(list){
  return ["journal","report","conference"].map(t=>{
    const xs=list.filter(p=>p.type===t).sort((a,b)=>b.year-a.year);
    if(!xs.length&&t==="conference")return "";
    return `<h4>${TYPE[t]}</h4>`+(xs.length?`<ol class="pb">${xs.map(pubHTML).join("")}</ol>`:`<p class="empty">목록 정리 중</p><div style="height:18px"></div>`);
  }).join("");
}
function cvHTML(short){
  return Object.entries(CV).map(([k,rows])=>(short?"":`<h3>${k}</h3>`)+`<ul class="cv">${rows.map(([a,b,c])=>`<li><span>${a}</span><div>${b}${!short&&c?`<small>${c}</small>`:""}</div></li>`).join("")}</ul>`).join(short?"":"");
}
