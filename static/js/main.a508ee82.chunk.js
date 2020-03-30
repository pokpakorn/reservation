(this["webpackJsonprestaurant-reservations"]=this["webpackJsonprestaurant-reservations"]||[]).push([[0],{140:function(e,a,t){e.exports=t(217)},148:function(e,a,t){},149:function(e,a,t){},212:function(e,a,t){},216:function(e,a,t){},217:function(e,a,t){"use strict";t.r(a);t(141),t(142);var n,r=t(0),l=t.n(r),i=t(9),o=t.n(i),c=t(83),s=(t(147),t(225)),u=t(224),m=t(24),v=(t(148),t(21)),d=t(22),h=t(59),f=t(61),p=t(220),E=t(91),b=(t(149),t(136)),g=t(6),T=t.n(g);!function(e){e.Reservations="reservations"}(n||(n={}));var y={setReservationList:function(e){return localStorage.setItem(n.Reservations,e)},getReservationList:function(){return localStorage.getItem(n.Reservations)||""},clearReservationList:function(){return localStorage.removeItem(n.Reservations)}},N="YYYY-MM-DD",C="h:mm A",w=function(){function e(){Object(v.a)(this,e)}return Object(d.a)(e,null,[{key:"validateForm",value:function(e){return this.validateText(e.firstName)&&this.validateText(e.lastName)&&this.validateDate(T()(e.arrivalDate))&&this.validateDateFormat(e.arrivalDate)&&this.validateArrivalTime(T()(e.arrivalDate),T()(e.arrivalTime,C))&&this.validateDepartureTime(T()(e.arrivalTime,C),T()(e.departureTime,C))&&this.validatePhone(e.phone)&&this.validateNumber(e.total)}},{key:"validateText",value:function(e){return e.length>0}},{key:"validateNumber",value:function(e){return e>0}},{key:"validateDate",value:function(e){return T()().isSameOrBefore(e,"day")}},{key:"validateDateFormat",value:function(e){return T()(e,N,!0).isValid()}},{key:"validateArrivalTime",value:function(e,a){var t=T()("".concat(e.format(N)," ").concat(a.format(C))),n=T()().set({second:0,millisecond:0});return t.isSameOrAfter(n)}},{key:"validateDepartureTime",value:function(e,a){return e.set({second:0,millisecond:0}),a.set({second:0,millisecond:0}),e.isBefore(a)}},{key:"validatePhone",value:function(e){return/^[0][1-9]\d{7}$|^[0][1-9]\d{8}$/.test(e)}},{key:"calculateTables",value:function(e,a){if(e.sort((function(e,a){return T()(e.arrivalTime).diff(T()(a.arrivalTime))})),e.length>0){if(e.length>1){for(var t=[],n=Math.ceil(e[0].total/a),r=(T()(e[0].arrivalTime).valueOf(),T()(e[0].departureTime).valueOf()),l=-1,i=1;i<e.length;i++){var o=T()(e[i].arrivalTime).valueOf(),c=T()(e[i].departureTime).valueOf();c<=r?n+=Math.ceil(e[i].total/a):c>r&&o<r?(n+=Math.ceil(e[i].total/a),l=-1===l?i:l):o>=r&&(t.push(n),-1!==l&&(i=l),l=-1,n=Math.ceil(e[i].total/a),T()(e[i].arrivalTime).valueOf(),r=T()(e[i].departureTime).valueOf()),i===e.length-1&&t.push(n)}return Math.max.apply(Math,t)}return Math.ceil(e[0].total/a)}return 0}}]),e}(),O=function(){function e(){Object(v.a)(this,e)}return Object(d.a)(e,null,[{key:"saveReservations",value:function(e){return new Promise((function(a,t){if(e&&w.validateForm(e)){var n=JSON.parse(y.getReservationList()||"[]");n.push(e);var r=JSON.stringify(n);y.setReservationList(r),a(!0)}else t(new Error("Data could not be saved, please try again."))}))}},{key:"getReservationsByDate",value:function(e){return new Promise((function(a,t){if(e&&w.validateDateFormat(e)){var n=JSON.parse(y.getReservationList()||"[]");n=n.filter((function(a){return a.arrivalDate===e}));var r=w.calculateTables(n.map((function(e){return e.arrivalTime=T()("".concat(T()().format(N)," ").concat(e.arrivalTime)).toISOString(),e.departureTime=T()("".concat(T()().format(N)," ").concat(e.departureTime)).toISOString(),e})),4),l={allTable:0,reservationList:[]};if(Array.isArray(n)&&n.length>0){for(var i=n.reduce((function(e,a){var t="".concat(a.firstName.toUpperCase()," ").concat(a.lastName.toUpperCase());return e[t]=e[t]||[],e[t].push(a),e}),Object.create(null)),o=0,c=Object.entries(i);o<c.length;o++){var s=Object(b.a)(c[o],2),u=s[0],m=s[1],v={name:"",total:0,table:0,reservationListDetails:[]},d=m.reduce((function(e,a){return e+Number(a.total)}),0),h=Math.ceil(d/4);v.name=u,v.reservationListDetails=m,v.total=d,v.table=h,l.reservationList.push(v)}l.allTable=r}a(l)}else t(new Error("Unable to complete your request."))}))}}]),e}(),D=O,k=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(v.a)(this,t),(n=a.call(this,e)).state={reservationList:[],selectedDate:T()(),summary:0},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getReservationList(this.state.selectedDate)}},{key:"getReservationList",value:function(e){var a=this;O.getReservationsByDate(e.format(N)).then((function(e){a.setState({reservationList:e.reservationList,summary:e.allTable})})).catch((function(e){return console.log(e)}))}},{key:"renderTable",value:function(){var e=this.state,a=e.reservationList,t=e.summary,n=0;return l.a.createElement("div",{className:"table-style"},l.a.createElement(p.a,{responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"No."),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Arrival Time"),l.a.createElement("th",null,"Departure Time"),l.a.createElement("th",null,"Tel"),l.a.createElement("th",null,"Total/Reservation"),l.a.createElement("th",null,"Total"))),l.a.createElement("tbody",null,a.map((function(e,a){var t=e.reservationListDetails.length;return l.a.createElement(l.a.Fragment,null,e.reservationListDetails.map((function(r,i){var o="".concat(a).concat(i,"-").concat(e.name,"-").concat(r.arrivalTime,"-").concat(r.departureTime,"--").concat(r.phone,"-").concat(r.total),c=0===i;return n+=1,l.a.createElement("tr",{key:o},l.a.createElement("td",null,n),c&&l.a.createElement("td",{rowSpan:t},e.name),l.a.createElement("td",null,T()(r.arrivalTime).format(C)),l.a.createElement("td",null,T()(r.departureTime).format(C)),l.a.createElement("td",null,r.phone),l.a.createElement("td",null,r.total),c&&l.a.createElement("td",{rowSpan:t},e.total))})))})))),l.a.createElement("div",{className:"summary-style"},"Summary: ".concat(t," Table(s)")))}},{key:"handleOnChangeArrivalDate",value:function(e){e&&(this.setState({selectedDate:e,reservationList:[]}),this.getReservationList(e))}},{key:"render",value:function(){var e=this,a=this.state,t=a.reservationList,n=a.selectedDate;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(E.a,{defaultValue:n,onChange:function(a){return e.handleOnChangeArrivalDate(a)},allowClear:!1})),l.a.createElement("div",{className:"body-container"},n?t.length>0?this.renderTable():l.a.createElement("h5",null,"No reservations"):l.a.createElement("h5",null,"Select Date")))}}]),t}(l.a.Component),S=t(52),L=t(221),R=t(223),A=t(128),I=t(222),F=(t(212),t(27)),P=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(e){var n;Object(v.a)(this,t),n=a.call(this,e);var r=T()();return n.state={firstName:"",lastName:"",phone:"",arrivalDate:r,arrivalTime:r,departureTime:r,total:0,validated:!1},n._onSubmit=n._onSubmit.bind(Object(S.a)(n)),n}return Object(d.a)(t,[{key:"handleOnChangeArrivalDate",value:function(e){e&&this.setState({arrivalDate:e})}},{key:"_onSubmit",value:function(){var e=this;this.setState({validated:!0});var a=this.getFormBody();w.validateForm(a)?D.saveReservations(a).then((function(){F.b.success("Your reservations is successful.",{position:F.b.POSITION.TOP_CENTER,autoClose:3e3}),e.clearData()})).catch((function(e){F.b.error(e.message,{position:F.b.POSITION.TOP_CENTER,autoClose:3e3})})):F.b.warn("Please correct your information!",{position:F.b.POSITION.TOP_CENTER,autoClose:2e3})}},{key:"handleOnChangeTotal",value:function(e){var a=e.target.value;Number(a)<0||this.setState({total:a})}},{key:"handleOnChangePhoneNumber",value:function(e){var a=e.target.value;Number(a)<0||this.setState({phone:a})}},{key:"getFormBody",value:function(){var e=this.state,a=e.firstName,t=e.lastName,n=e.phone,r=e.arrivalDate,l=e.arrivalTime,i=e.departureTime,o=e.total;return{firstName:a,lastName:t,phone:n,arrivalDate:r.format(N),arrivalTime:l.format(C),departureTime:i.format(C),total:o}}},{key:"clearData",value:function(){var e=T()();this.setState({firstName:"",lastName:"",phone:"",arrivalDate:e,arrivalTime:e,departureTime:e,total:0,validated:!1})}},{key:"render",value:function(){var e=this,a=this.state,t=a.firstName,n=a.lastName,r=a.phone,i=a.arrivalDate,o=a.arrivalTime,c=a.departureTime,s=a.total,u=a.validated;return l.a.createElement(l.a.Fragment,null,l.a.createElement(R.a,{validated:w.validateForm(this.getFormBody())},l.a.createElement("div",{className:"header-boundary"},l.a.createElement("h3",null,"Reservation Form"),l.a.createElement("h5",null,"Please fill the form below accurately to enable us serve you better!.. welcome!")),l.a.createElement("div",{className:"forms-body"},l.a.createElement(R.a.Row,null,l.a.createElement(R.a.Group,{as:A.a,controlId:"validationCustom01"},l.a.createElement(R.a.Label,null,"First name"),l.a.createElement(R.a.Control,{required:!0,type:"text",placeholder:"First name",value:t,onChange:function(a){e.setState({firstName:a.target.value})},isInvalid:!w.validateText(t)&&u}),l.a.createElement(R.a.Control.Feedback,{type:"invalid"},"First name is required")),l.a.createElement(R.a.Group,{as:A.a,controlId:"validationCustom02"},l.a.createElement(R.a.Label,null,"Last name"),l.a.createElement(R.a.Control,{required:!0,type:"text",placeholder:"Last name",value:n,onChange:function(a){e.setState({lastName:a.target.value})},isInvalid:!w.validateText(n)&&u}),l.a.createElement(R.a.Control.Feedback,{type:"invalid"},"Last name is required"))),l.a.createElement(R.a.Row,null,l.a.createElement(R.a.Group,{as:A.a,controlId:"validationCustom03"},l.a.createElement(R.a.Label,null,"Phone number"),l.a.createElement(R.a.Control,{required:!0,type:"number",placeholder:"Phone number",value:r,onChange:function(a){return e.handleOnChangePhoneNumber(a)},isInvalid:!w.validatePhone(r)&&u}),l.a.createElement(R.a.Control.Feedback,{type:"invalid"},"Phone number is not correct (0XXXXXXX) or (0XXXXXXX-X)"))),l.a.createElement(R.a.Row,{className:"body-group"},l.a.createElement(R.a.Group,{as:A.a,md:"3",controlId:"validationCustom04"},l.a.createElement(R.a.Label,null,"Arrival Date"),l.a.createElement("div",{className:!w.validateDate(i)&&u?"time-input-warning":void 0},l.a.createElement(E.a,{defaultValue:i,onChange:function(a){return e.handleOnChangeArrivalDate(a)},allowClear:!1})),!w.validateDate(i)&&u&&l.a.createElement("div",{className:"custom-warning"},l.a.createElement(R.a.Text,null,"Cannot select in past dates"))),l.a.createElement(R.a.Group,{as:A.a,md:"3",controlId:"validationCustom04"},l.a.createElement(R.a.Label,null,"Arrival Time"),l.a.createElement("div",{className:!w.validateArrivalTime(i,o)&&u?"time-input-warning":""},l.a.createElement(L.a,{defaultValue:o,format:C,onChange:function(a){return a?e.setState({arrivalTime:a}):a},allowClear:!1})),!w.validateArrivalTime(i,o)&&u&&l.a.createElement("div",{className:"custom-warning"},l.a.createElement(R.a.Text,null,"Arrival Time cannot be less than Now"))),l.a.createElement(R.a.Group,{as:A.a,md:"3",controlId:"validationCustom06"},l.a.createElement(R.a.Label,null,"Departure Time"),l.a.createElement("div",{className:!w.validateDepartureTime(o,c)&&u?"time-input-warning":""},l.a.createElement(L.a,{defaultValue:c,format:C,onChange:function(a){return a?e.setState({departureTime:a}):a},allowClear:!1})),!w.validateDepartureTime(o,c)&&u&&l.a.createElement("div",{className:"custom-warning"},l.a.createElement(R.a.Text,null,"Departure Time must be more than Arrival Time")))),l.a.createElement(R.a.Row,null,l.a.createElement(R.a.Group,{as:A.a,controlId:"validationCustom02"},l.a.createElement(R.a.Label,null,"Total"),l.a.createElement(R.a.Control,{required:!0,type:"number",placeholder:"Total",value:s,onChange:function(a){e.handleOnChangeTotal(a)},isInvalid:(String(s).length<=0||0===s)&&u}),l.a.createElement(R.a.Control.Feedback,{type:"invalid"},"Total is required"))),l.a.createElement("div",{className:"submit-button-container"},l.a.createElement(I.a,{type:"button",onClick:this._onSubmit},"Submit")))),l.a.createElement(F.a,null))}}]),t}(l.a.Component);var j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{bg:"dark",variant:"dark"},l.a.createElement(s.a.Brand,null,"Restaurant"),l.a.createElement(u.a,{className:"mr-auto"},l.a.createElement(u.a.Link,{href:"/form"},"Reservations"),l.a.createElement(u.a.Link,{href:"/report"},"Report"))),l.a.createElement("div",{className:"App"},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/form",component:P}),l.a.createElement(m.a,{exact:!0,path:"/report",component:k}),l.a.createElement(m.a,{render:function(){return l.a.createElement("p",null,"Not found")}}))))},x=(t(216),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function X(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var M=function(){return l.a.createElement(c.a,{basename:"/reservation"},l.a.createElement(j,null))};o.a.render(l.a.createElement(M,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reservation",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/reservation","/service-worker.js");x?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):X(a,e)}))}}()}},[[140,1,2]]]);
//# sourceMappingURL=main.a508ee82.chunk.js.map