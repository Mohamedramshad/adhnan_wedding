const cover=document.getElementById('cover');
const music=document.getElementById('music');
const musicButton=document.getElementById('musicButton');
const musicText=document.getElementById('musicText');
let isPlaying=false;
document.getElementById('openButton').addEventListener('click',()=>{
 cover.classList.add('hide');
 music.volume=.35;
 music.play().then(()=>setMusic(true)).catch(()=>{});
});
function setMusic(state){isPlaying=state;musicText.textContent=state?'SOUND ON':'SOUND OFF';musicButton.setAttribute('aria-pressed',String(state));musicButton.setAttribute('aria-label',state?'Pause background music':'Play background music');}
musicButton.addEventListener('click',()=>{
 if(isPlaying){music.pause();setMusic(false);}
 else{music.play().then(()=>setMusic(true)).catch(()=>setMusic(false));}
});
const weddingDate=new Date('2026-12-26T12:00:00+05:30').getTime();
function tick(){
 const remaining=Math.max(0,weddingDate-Date.now());
 const units={days:Math.floor(remaining/86400000),hours:Math.floor(remaining%86400000/3600000),minutes:Math.floor(remaining%3600000/60000),seconds:Math.floor(remaining%60000/1000)};
 Object.entries(units).forEach(([id,value])=>document.getElementById(id).textContent=String(value).padStart(id==='days'?3:2,'0'));
}
tick();setInterval(tick,1000);
document.getElementById('calendarButton').addEventListener('click',()=>{
 const event=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Adhnan and Bismi//Wedding//EN','BEGIN:VEVENT','UID:adnan-bismi-wedding-20261226','DTSTAMP:20261112T000000Z','DTSTART:20261226T063000Z','DTEND:20261226T090000Z','SUMMARY:Wedding of Adhnan and Bismi','LOCATION:Karayil Plaza\, Orumanayur\, Thrissur\, Kerala','DESCRIPTION:Wedding celebration of Adhnan and Bismi.','END:VEVENT','END:VCALENDAR'].join('\\r\\n');
 const blob=new Blob([event],{type:'text/calendar;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='Adhnan-and-Bismi-Wedding.ics';a.click();URL.revokeObjectURL(url);
});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
