(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[0],{12:function(e,t,o){},13:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(6),c=o.n(a),i=(o(12),o(1)),p=o(2),l=o(4),s=o(3),u=function(e){Object(l.a)(o,e);var t=Object(s.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(p.a)(o,[{key:"getStyle",value:function(){return{backgroundColor:"purple",textDecoration:this.props.todoProp.completed?"line-through":"none"}}},{key:"render",value:function(){return r.a.createElement("div",{style:this.getStyle()},r.a.createElement("p",null,r.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,this.props.todoProp.id)})," ","",this.props.todoProp.title,r.a.createElement("button",{style:d},"x")))}}]),o}(n.Component),d={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},m=u,h=function(e){Object(l.a)(o,e);var t=Object(s.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(p.a)(o,[{key:"render",value:function(){var e=this;console.log(this.props.Todos);var t=this.props.Todos;return r.a.createElement("div",null,t.map((function(t){return r.a.createElement(m,{key:t.id,todoProp:t,markComplete:e.props.markComplete})})))}}]),o}(n.Component),f=(o(13),function(e){Object(l.a)(o,e);var t=Object(s.a)(o);function o(){var e;Object(i.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).markComplete=function(t){e.setState({Todos:e.state.Todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.state={Todos:[{id:1,title:"Take trash",completed:!1},{id:2,title:"Take food",completed:!1},{id:3,title:"Take dog",completed:!1}]},e}return Object(p.a)(o,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{Todos:this.state.Todos,markComplete:this.markComplete}))}}]),o}(n.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},7:function(e,t,o){e.exports=o(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.db3e1cdd.chunk.js.map