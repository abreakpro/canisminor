webpackJsonp([13],{DH13:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("pQaW"),o=t.n(i),a=t("dJDI"),l=t.n(a),r=t("953G"),c=t.n(r),m=t("GUYF"),d=t.n(m),s=t("O1Ds"),h=t.n(s),p=t("JAYT"),u=t.n(p),f=t("GiK3"),y=t.n(f),v=t("bGai"),g=t("w2vo"),b=u()(["\n  width: 100%;\n  height: 100vh;\n  min-height: 100vh;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ",";\n  z-index: -1;\n  > video {\n    height: 100%;\n  }\n  @media "," {\n    height: ","px;\n  }\n"]),E=u()(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  font-family: ",";\n  font-style: italic;\n  ",";\n"]),w=u()(["\n  width: 1px;\n  height: 5rem;\n  background: #666;\n  margin-top: 1rem;\n  @media "," {\n    height: 3rem;\n  }\n"]),x=u()(["\n  min-height: 100vh;\n"]),k={hola:"/hola",resume:"/resume",blog:"/blog",projects:"/projects",contact:"/contact"},j=Object(g.default)(v.n)(b,v.r.color.bg,v.r.media("M"),document.body.clientHeight),q=g.default.div(E,v.r.fontFamily.times,v.r.fontSize(-2)),P=g.default.div(w,v.r.media("M")),G=g.default.div(x),O=function(e){function n(){var e,t,i;o()(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return d()(i,(t=i=d()(this,(e=h()(n)).call.apply(e,[this].concat(l))),i.footer=[{type:"social-wechat",href:"/contact/qrcode"},{type:"social-linkedin",href:"https://www.linkedin.com/in/canisminor/"},{type:"social-github",href:"https://github.com/canisminor1990"},{type:"social-rss",href:"https://canisminor.cc/rss.xml"},{type:"social-mail",href:"mailto:i@canisminor.cc"}],i.Video=function(){return location.pathname===k.hola?y.a.createElement(v.q,{maxOffset:1e3},y.a.createElement(j,{mode:"one",type:"alpha",duration:1e3},y.a.createElement("video",{id:"video",muted:!0,loop:!0,playsInline:!0,autoPlay:!0,poster:"http://qn-video.canisminor.cc/home.png",onCanPlay:i.Play},y.a.createElement("source",{src:"http://qn-video.canisminor.cc/home.mp4",type:"video/mp4"})),y.a.createElement(q,{key:"explorer"},y.a.createElement("div",null,"Scroll to Explorer"),y.a.createElement(P,null)))):null},i.Play=function(){document.getElementById("video").play()},t))}return c()(n,[{key:"render",value:function(){return"/"===location.pathname?this.props.children:y.a.createElement("div",null,y.a.createElement(v.e,{tabs:k}),y.a.createElement(this.Video,null),y.a.createElement("audio",{id:"music",src:"http://qn-video.canisminor.cc/music.mp3",loop:!0}),y.a.createElement("section",null,y.a.createElement(G,null,this.props.children),y.a.createElement(v.d,{key:"footer",data:this.footer})))}}]),l()(n,e),n}(f.Component);n.default=O}});