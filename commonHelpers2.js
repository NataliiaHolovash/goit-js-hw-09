import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const l="feedback-form-state",e={email:"",message:""},t=document.querySelector("form"),s=t.elements.email,m=t.elements.message;function o(a){e.email=s.value.trim(),e.message=m.value.trim(),localStorage.setItem(l,JSON.stringify(e))}function r(a){if(a.preventDefault(),!s.value||!m.value)return alert("Fill please all fields");console.log(e),localStorage.removeItem(l),e.email="",e.message="",t.reset()}t.addEventListener("input",o);t.addEventListener("submit",r);if(localStorage.getItem(l)!==null){const a=JSON.parse(localStorage.getItem(l));s.value=a.email,m.value=a.message,e.email=a.email,e.message=a.message}console.log(s.value.trim());console.log(m.value.trim());
//# sourceMappingURL=commonHelpers2.js.map
