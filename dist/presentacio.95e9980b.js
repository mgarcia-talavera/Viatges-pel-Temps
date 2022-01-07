!function e(){var t=new Date,n=t.getHours(),o=t.getMinutes(),c=t.getSeconds(),i="AM";0==n&&(n=12),n>12&&(n-=12,i="PM");var l=(n=n<10?"0"+n:n)+":"+(o=o<10?"0"+o:o)+":"+(c=c<10?"0"+c:c)+" "+i;document.getElementById("MyClockDisplay").innerText=l,document.getElementById("MyClockDisplay").textContent=l,setTimeout(e,1e3)}();
//# sourceMappingURL=presentacio.95e9980b.js.map
