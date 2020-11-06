(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a(18),o=a.n(c),s=a(9),i=a(4),l=a(5),u=a(7),h=a(6),m=function(e){var t=e.closeModal,a=e.src,r=e.tags;return Object(n.jsx)("div",{className:"Overlay",onClick:t,children:Object(n.jsx)("div",{className:"Modal",children:Object(n.jsx)("img",{src:a,alt:r})})})},d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isModalOpen:!1},e.openModal=function(){e.setState({isModalOpen:!0}),window.addEventListener("keydown",e.closeModal)},e.closeModal=function(t){"IMG"===t.target.nodeName&&"Escape"!==t.key||(e.setState({isModalOpen:!1}),window.removeEventListener("keydown",e.closeModal))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.isModalOpen,t=this.props,a=t.alt,r=t.src,c=t.largeImageURL;return Object(n.jsxs)("li",{className:"ImageGalleryItem",onClick:this.openModal,children:[Object(n.jsx)("img",{src:r,alt:a,className:"ImageGalleryItem-image"}),e?Object(n.jsx)(m,{closeModal:this.closeModal,src:c,alt:a}):""]})}}]),a}(r.Component),g=function(e){var t=e.images;return Object(n.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(n.jsx)(d,{src:e.webformatURL,alt:e.tags,largeImageURL:e.largeImageURL},e.id)}))})},p=function(e){var t=e.loadMore;return Object(n.jsx)("button",{className:"Button",onClick:t,children:"Load more..."})},j=a(19),b=a.n(j),f=(a(47),function(){return Object(n.jsx)("div",{children:Object(n.jsx)(b.a,{type:"Puff",color:"#00BFFF",height:100,width:100})})}),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(l.a)(a,[{key:"render",value:function(){this.state.inputValue;return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{onChange:this.handleChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),v=a(20),y=a.n(v),S=function(e,t){return y.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("18194330-67860245f678ffa703ae3a938","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},x=(a(65),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1,error:null,searchQuery:"",page:1,largeImageUrl:null,isModalOpen:!1},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({loading:!0}),S(a,n).then((function(t){return e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handleSearchFormSubmit=function(t){e.setState({searchQuery:t,page:1,images:[]})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.searchQuery,n=this.state.searchQuery,r=this.state,c=(r.searchQuery,r.page);t.page!==c&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),a!==n&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{onSubmit:this.handleSearchFormSubmit}),t.length>0&&Object(n.jsx)(g,{images:t}),a&&Object(n.jsx)(f,{}),t.length>0&&Object(n.jsx)(p,{loadMore:this.fetchImages})]})}}]),a}(r.Component));o.a.render(Object(n.jsx)(x,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.835b4317.chunk.js.map