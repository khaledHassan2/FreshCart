import{c as u}from"./chunk-OPIBKOQE.js";import{t as l,y as a}from"./chunk-ORPLGSWX.js";import{Y as p,ca as c}from"./chunk-7LPCS22P.js";var s=class extends Error{};s.prototype.name="InvalidTokenError";function f(r){return decodeURIComponent(atob(r).replace(/(.)/g,(t,o)=>{let e=o.charCodeAt(0).toString(16).toUpperCase();return e.length<2&&(e="0"+e),"%"+e}))}function h(r){let t=r.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return f(t)}catch{return atob(t)}}function d(r,t){if(typeof r!="string")throw new s("Invalid token specified: must be a string");t||(t={});let o=t.header===!0?0:1,e=r.split(".")[o];if(typeof e!="string")throw new s(`Invalid token specified: missing part #${o+1}`);let i;try{i=h(e)}catch(n){throw new s(`Invalid token specified: invalid base64 for part #${o+1} (${n.message})`)}try{return JSON.parse(i)}catch(n){throw new s(`Invalid token specified: invalid json for part #${o+1} (${n.message})`)}}var U=(()=>{let t=class t{constructor(){this._Http=c(l),this._Router=c(u)}setRegisterForm(e){return this._Http.post(`${a.baseUrl}/api/v1/auth/signup`,e)}setLoginForm(e){return this._Http.post(`${a.baseUrl}/api/v1/auth/signin`,e)}saveUserData(){localStorage.getItem("userToken")!=null&&(this.userData=d(localStorage.getItem("userToken")))}logOut(){localStorage.removeItem("userToken"),this._Router.navigate(["/login"]),this.userData=null}setVerifyEamil(e){return this._Http.post(`${a.baseUrl}/api/v1/auth/forgotPasswords`,e)}setVerifyCode(e){return this._Http.post(`${a.baseUrl}/api/v1/auth/verifyResetCode`,e)}setVerifyPassword(e){return this._Http.put(`${a.baseUrl}/api/v1/auth/resetPassword`,e)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{U as a};
