(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{128:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i);!function(){var t={height:500,width:420,scrollbars:0,toolbar:0,location:0,status:"no",menubar:0,resizable:0,dependent:0},e=a()("body#bigscreen"),n=e.find("#chat-panel"),i=e.find("#bigscreen-layout"),o=e.find("#chat-panel-resize-bar"),c=e.find("#chat-panel-tools"),r=e.find("#chat-wrap iframe"),s=a()('<div class="overlay"></div>'),l={getOrientation:function(){return localStorage.getItem("bigscreen.chat.orientation")||"0"},setOrientation:function(t){localStorage.setItem("bigscreen.chat.orientation",t)},getSize:function(){return parseFloat(localStorage.getItem("bigscreen.chat.size")||20)},setSize:function(t){var e="0"===this.getOrientation()?100-t:t;localStorage.setItem("bigscreen.chat.size",Math.min(76.6666,Math.max(0,e)).toFixed(4))},applyOrientation:function(){var t=l.getOrientation();switch(i.attr("data-orientation",t),parseInt(t)){case 0:i.removeClass("chat-left").addClass("chat-right");break;case 1:i.removeClass("chat-right").addClass("chat-left")}},applySize:function(){var t=l.getSize(),e=300/i.outerWidth()*100;t>e?n.css("width",Math.max(e,t)+"%"):n.css("width","inherit")}};r.on("load",function(){var i=this.contentWindow;i&&c.on("click touch","#popout",function(){var i;return window.open("/embed/chat","_blank",(i=i?Object.assign({},t,i):t,Object.keys(i).map(function(t){return"".concat(t,"=").concat(i[t])}).join(","))),e.addClass("nochat"),n.remove(),!1}).on("click touch","#refresh",function(){return i.location.reload(),!1}).on("click touch","#close",function(){return e.addClass("nochat"),n.remove(),!1}).on("click touch","#swap",function(){return l.setOrientation("1"===l.getOrientation()?"0":"1"),l.applyOrientation(),!1})}),o.on("mousedown.chat touchstart.chat",function(t){var n=t.clientX||t.originalEvent.touches[0].clientX||0,a=o.position().left,c=i.outerWidth();o.addClass("active");var r=-1;return e.on("mouseup.chat touchend.chat",function(){return-1!==r&&(e.unbind("mousemove.chat mouseup.chat touchend.chat touchmove.chat"),l.setSize(r/c*100),o.removeClass("active").removeAttr("style"),s.remove(),l.applySize(),!1)}).on("mousemove.chat touchmove.chat",function(t){r=t.clientX||t.originalEvent.touches[0].clientX||0,o.css("left",a+(r-n))}).append(s),!1}),l.applyOrientation(),l.applySize();var h=document.location.href,d=e.find("#stream-panel iframe"),u=/^#(twitch)\/([A-z0-9_]{3,24})$/,f={live:!1,host:null,preview:null},m={embed:!1,title:"Bigscreen",name:"destiny",id:null,url:"/bigscreen"},p=Object.assign({},m),v=["embedded","hidden","hosting","online","offline"],g={container:e.find("#nav-host-pill")},w='<i class="fab fa-fw fa-twitch"></i>';g.left=g.container.find("#nav-host-pill-type"),g.right=g.container.find("#nav-host-pill-name"),g.icon=g.container.find("#nav-host-pill-icon");var b=function(){var t="https://player.twitch.tv/?channel="+encodeURIComponent(m.name);if(d.attr("src")!==t){document.title=m.title+" - Destiny.gg";var e=d.clone();e.attr("src",t),d.replaceWith(e),d=e}},y=function(){g.container.removeClass(v.join(" ")),m.embed?(g.container.addClass("embedded"),g.left.text("EMBED"),g.right.text(m.title),g.icon.html('<i class="fas fa-fw fa-times-circle"></i>')):f.host&&!f.live?(g.container.addClass("hosting"),g.left.text("HOSTING"),g.right.text(f.host.name),g.icon.html(w)):(g.left.text(f.live?"LIVE":"OFFLINE"),g.right.text("Destiny"),g.icon.html(w)),g.container.toggleClass("online",f.live).toggleClass("offline",!!f.live)},O=function(){return a.a.ajax({url:"/api/info/stream"}).then(function(t){var e=t.live,n=t.host,i=t.preview;return Object.assign(f,{live:e,host:n,preview:i})}).then(y)},S=function(){var t=function(t){var e=t||window.location.hash||"";if(e.length>0&&u.test(e)){var n=e.match(u);return{platform:n[1],name:n[2],id:null}}return null}(window.location.hash);t&&(m.embed=!0,m.title=t.name,m.name=t.name,m.id=t.id)};S(),b(),window.history.replaceState(m,null,h),g.container.on("click touch",function(){return!m.embed&&f.host?(m.embed=!0,m.title=f.host.display_name,m.name=f.host.name,m.id=f.host.id,window.history.pushState(m,null,"#twitch/".concat(m.name))):m.embed&&(m.embed=!1,m.title=p.title,m.name=p.name,m.id=p.id,Object.assign(m,p),window.history.pushState(m,null,"/bigscreen")),y(),b(),!1}),window.addEventListener("popstate",function(){var t=window.history.state;null==t?S():Object.assign(m,t),y(),b()}),O().always(function(){return window.setInterval(O,15e3)})}()}},[[128,1,0]]]);