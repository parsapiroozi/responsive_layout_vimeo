(this.webpackJsonpresponsive_layout_vimeo=this.webpackJsonpresponsive_layout_vimeo||[]).push([[0],{42:function(e,t,a){e.exports=a(95)},47:function(e,t,a){},55:function(e,t,a){},67:function(e,t){},69:function(e,t){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(39),c=a.n(r),o=(a(47),a(8)),s=a(9),d=a(11),u=a(10),m=a(12),l=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderContentCard",value:function(){return parseInt(this.props.id)%2===0?i.a.createElement("div",{className:"content-card-container",id:"content-card"+this.props.id},i.a.createElement("div",{className:"content-card-media-container",id:"content-card-media"+this.props.id},i.a.createElement("img",{className:"content-card-media-picture",id:"content-card-picture"+this.props.id,src:this.props.mediaSource,alt:"media not found"})),i.a.createElement("div",{className:"content-card-text-container",id:"content-card-text"+this.props.id},i.a.createElement("span",{className:"content-card-text-header",id:"content-card-text-header"+this.props.id},this.props.cardHeader),i.a.createElement("br",null),i.a.createElement("p",{className:"content-card-text-text"},this.props.cardText))):i.a.createElement("div",{className:"content-card-container",id:"content-card"+this.props.id},i.a.createElement("div",{className:"content-card-text-container",id:"content-card-text"+this.props.id},i.a.createElement("span",{className:"content-card-text-header",id:"content-card-text-header"+this.props.id},this.props.cardHeader),i.a.createElement("br",null),i.a.createElement("p",{className:"content-card-text-text"},this.props.cardText)),i.a.createElement("div",{className:"content-card-media-container",id:"content-card-media"+this.props.id},i.a.createElement("img",{className:"content-card-media-picture",id:"content-card-picture"+this.props.id,src:this.props.mediaSource,alt:"media not found"})))}},{key:"render",value:function(){return this.renderContentCard()}}]),t}(n.Component),p=a(15),h=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,null,this.props.carouselContent.map((function(e){return i.a.createElement(p.a.Item,{key:e.id,id:e.id},i.a.createElement("img",{className:"d-block w-100",id:"caros-picture",src:e.mediaPictureSource,alt:"Third slide"}),i.a.createElement(p.a.Caption,null,i.a.createElement("div",{className:"caros-caption-picture-container"},i.a.createElement("img",{id:"caros-caption-picture",src:e.mediaPictureSource,alt:"carousel content caption not found"})),i.a.createElement("button",{className:"btn btn-dark",style:{marginRight:"1vw"}},"Buy Now"),i.a.createElement("button",{className:"btn btn-primary"},"Watch Trailer"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h3",null,e.captionTitle),i.a.createElement("p",null,e.captionText)))})))}}]),t}(n.Component),v=(a(55),a(56),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={content:[{id:0,mediaSource:"https://i.vimeocdn.com/video/595198868_505x160.jpg",header:"MONSOON III",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt impsum augue. In faucibus vehicular magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus."},{id:1,mediaSource:"https://i.vimeocdn.com/video/589972810_530x315.jpg",header:"BEAMS",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt impsum augue. In faucibus vehicular magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus."},{id:2,mediaSource:"https://i.vimeocdn.com/video/590587169_530x315.jpg",header:"Move 2",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt impsum augue. In faucibus vehicular magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus."}],carouselContent:[{id:0,mediaPictureSource:"https://i.vimeocdn.com/video/751531321_640x360.jpg?r=pad",captionTitle:"Roamers",captionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{id:1,mediaPictureSource:"https://i.vimeocdn.com/video/745160367_640x360.jpg?r=pad",captionTitle:"Push forward.",captionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{id:2,mediaPictureSource:"https://i.vimeocdn.com/video/820713918_640x360.jpg?r=pad",captionTitle:"make time.",captionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"makeVimeoAPICall",value:function(){new(0,a(57).Vimeo)("ea3f3e1afb470f36e200db02c87238db8d057d6c","ervORJHg+i+DspfPd79lBZvhJPONofInFpJCQX8SXkfLOFd/buPLyyrkL52uRfdhn7mRlfBEVRNEl54nlY7gJUCWxKr/o9nSSAVP/EYWcGc3UfKTG156JLHUkup3wPqX","e731625001a6d79f0a4b599cafef49d1").request({method:"GET",path:"/videos/366940631/pictures"},(function(e,t,a,n){e&&console.log(e),console.log(t)}))}},{key:"renderContentCard",value:function(){return this.state.content.map((function(e){return i.a.createElement(l,{key:e.id,id:e.id,cardHeader:e.header,cardText:e.text,mediaSource:e.mediaSource})}))}},{key:"render",value:function(){return this.makeVimeoAPICall(),i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"layout-container"},this.renderContentCard(),i.a.createElement(h,{carouselContent:this.state.carouselContent})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.f1dc708d.chunk.js.map