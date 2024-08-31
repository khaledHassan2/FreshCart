import{a as M}from"./chunk-QAR4RVT7.js";import{a as q,b as c,c as L,d as N,e as y,f as g,h as G,i as A,j as D,m as I}from"./chunk-XHZB7IPA.js";import{c as T}from"./chunk-OPIBKOQE.js";import"./chunk-JICLCJKO.js";import{h as R}from"./chunk-ORPLGSWX.js";import{Cb as x,Db as p,Lb as a,Mb as v,Sb as V,Ta as s,Vb as h,ca as E,db as b,fa as P,jb as m,lb as u,pa as C,pb as d,qa as f,tb as n,ub as r,vb as _,yb as w}from"./chunk-7LPCS22P.js";var F=(i,l)=>({"is-valid":i,"is-invalid":l});function k(i,l){i&1&&(n(0,"p",10),a(1,"email is required"),r())}function z(i,l){i&1&&(n(0,"p",10),a(1,"enter valid email"),r())}function $(i,l){if(i&1&&(n(0,"div",6),m(1,k,2,0,"p",10)(2,z,2,0,"p",10),r()),i&2){let t,o,e=p(2);s(),d(1,(t=e.forgetPassword.get("email"))!=null&&t.getError("required")?1:-1),s(),d(2,(o=e.forgetPassword.get("email"))!=null&&o.getError("email")?2:-1)}}function j(i,l){i&1&&_(0,"span",8)}function O(i,l){if(i&1&&(n(0,"p",9),a(1),r()),i&2){let t=p(2);s(),v(" ",t.msgErrorForgot," ")}}function U(i,l){if(i&1){let t=w();n(0,"form",2),x("ngSubmit",function(){C(t);let e=p();return f(e.setVerifyEamil())}),n(1,"div",3),_(2,"input",4),n(3,"label",5),a(4,"email"),r(),m(5,$,3,2,"div",6),r(),n(6,"button",7),a(7,"Verify Email "),m(8,j,1,0,"span",8),r(),m(9,O,2,1,"p",9),r()}if(i&2){let t,o,e=p();u("formGroup",e.forgetPassword),s(2),u("ngClass",h(6,F,!((t=e.forgetPassword.get("email"))!=null&&t.errors)&&(((t=e.forgetPassword.get("email"))==null?null:t.touched)||((t=e.forgetPassword.get("email"))==null?null:t.dirty)),((t=e.forgetPassword.get("email"))==null?null:t.errors)&&(((t=e.forgetPassword.get("email"))==null?null:t.touched)||((t=e.forgetPassword.get("email"))==null?null:t.dirty)))),s(3),d(5,(o=e.forgetPassword.get("email"))!=null&&o.errors&&((o=e.forgetPassword.get("email"))!=null&&o.touched||(o=e.forgetPassword.get("email"))!=null&&o.dirty)?5:-1),s(),u("disabled",!e.forgetPassword.valid),s(2),d(8,e.isLoding()?8:-1),s(),d(9,e.msgErrorForgot?9:-1)}}function B(i,l){i&1&&(n(0,"p",10),a(1,"resetCode is required"),r())}function H(i,l){i&1&&(n(0,"p",10),a(1,"enter valid resetCode is 6 numbers"),r())}function J(i,l){if(i&1&&(n(0,"div",6),m(1,B,2,0,"p",10)(2,H,2,0,"p",10),r()),i&2){let t,o,e=p(2);s(),d(1,(t=e.verifyResetCode.get("resetCode"))!=null&&t.getError("required")?1:-1),s(),d(2,(o=e.verifyResetCode.get("resetCode"))!=null&&o.getError("pattern")?2:-1)}}function K(i,l){i&1&&_(0,"span",8)}function Q(i,l){if(i&1&&(n(0,"p",9),a(1),r()),i&2){let t=p(2);s(),v(" ",t.msgErrorCode," ")}}function W(i,l){if(i&1){let t=w();n(0,"form",2),x("ngSubmit",function(){C(t);let e=p();return f(e.setVerifyCode())}),n(1,"div",3),_(2,"input",11),n(3,"label",12),a(4,"resetCode"),r(),m(5,J,3,2,"div",6),r(),n(6,"button",7),a(7,"Verify Code "),m(8,K,1,0,"span",8),r(),m(9,Q,2,1,"p",9),r()}if(i&2){let t,o,e=p();u("formGroup",e.verifyResetCode),s(2),u("ngClass",h(6,F,!((t=e.verifyResetCode.get("resetCode"))!=null&&t.errors)&&(((t=e.verifyResetCode.get("resetCode"))==null?null:t.touched)||((t=e.verifyResetCode.get("resetCode"))==null?null:t.dirty)),((t=e.verifyResetCode.get("resetCode"))==null?null:t.errors)&&(((t=e.verifyResetCode.get("resetCode"))==null?null:t.touched)||((t=e.verifyResetCode.get("resetCode"))==null?null:t.dirty)))),s(3),d(5,(o=e.verifyResetCode.get("resetCode"))!=null&&o.errors&&((o=e.verifyResetCode.get("resetCode"))!=null&&o.touched||(o=e.verifyResetCode.get("resetCode"))!=null&&o.dirty)?5:-1),s(),u("disabled",!e.verifyResetCode.valid),s(2),d(8,e.isLoding()?8:-1),s(),d(9,e.msgErrorCode?9:-1)}}function X(i,l){i&1&&(n(0,"p",10),a(1,"password is required"),r())}function Y(i,l){i&1&&(n(0,"p",10),a(1,"enter valid password"),r())}function Z(i,l){if(i&1&&(n(0,"div",6),m(1,X,2,0,"p",10)(2,Y,2,0,"p",10),r()),i&2){let t,o,e=p(2);s(),d(1,(t=e.reset.get("newPassword"))!=null&&t.getError("required")?1:-1),s(),d(2,(o=e.reset.get("newPassword"))!=null&&o.getError("pattern")?2:-1)}}function ee(i,l){i&1&&_(0,"span",8)}function te(i,l){if(i&1&&(n(0,"p",9),a(1),r()),i&2){let t=p(2);s(),v(" ",t.msgErrorReset," ")}}function ie(i,l){if(i&1){let t=w();n(0,"form",2),x("ngSubmit",function(){C(t);let e=p();return f(e.setVerifyPassword())}),n(1,"div",3),_(2,"input",13),n(3,"label",5),a(4,"email"),r()(),n(5,"div",3),_(6,"input",14),n(7,"label",15),a(8,"password"),r(),m(9,Z,3,2,"div",6),r(),n(10,"button",7),a(11,"Verify password "),m(12,ee,1,0,"span",8),r(),m(13,te,2,1,"p",9),r()}if(i&2){let t,o,e=p();u("formGroup",e.reset),s(6),u("ngClass",h(6,F,!((t=e.reset.get("newPassword"))!=null&&t.errors)&&(((t=e.reset.get("newPassword"))==null?null:t.touched)||((t=e.reset.get("password"))==null?null:t.dirty)),((t=e.reset.get("newPassword"))==null?null:t.errors)&&(((t=e.reset.get("newPassword"))==null?null:t.touched)||((t=e.reset.get("password"))==null?null:t.dirty)))),s(3),d(9,(o=e.reset.get("newPassword"))!=null&&o.errors&&((o=e.reset.get("newPassword"))!=null&&o.touched||(o=e.reset.get("password"))!=null&&o.dirty)?9:-1),s(),u("disabled",!e.reset.valid),s(2),d(12,e.isLoding()?12:-1),s(),d(13,e.msgErrorReset?13:-1)}}var pe=(()=>{let l=class l{constructor(){this.step=b(1),this.isLoding=b(!1),this.forgetPassword=new y({email:new g(null,[c.required,c.email])}),this.msgErrorForgot="",this.verifyResetCode=new y({resetCode:new g(null,[c.required,c.pattern(/^\w{6}$/)])}),this.msgErrorCode="",this.reset=new y({email:new g(null,[c.required,c.email]),newPassword:new g(null,[c.required,c.pattern(/^\w{6,150}$/)])}),this.msgErrorReset="",this._AuthService=E(M),this._Router=E(T)}setVerifyEamil(){let o=this.forgetPassword.get("email")?.value;this.reset.get("email")?.patchValue(o),this.msgErrorForgot="",this.isLoding.set(!0),this._eamilSub=this._AuthService.setVerifyEamil(this.forgetPassword.value).subscribe({next:e=>{e.statusMsg=="success"&&(this.isLoding.set(!1),this.step.set(2))}})}setVerifyCode(){this.isLoding.set(!0),this.msgErrorCode="",this._codeSub=this._AuthService.setVerifyCode(this.verifyResetCode.value).subscribe({next:o=>{o.status=="Success"&&(this.isLoding.set(!1),this.step.set(3))}})}setVerifyPassword(){this.msgErrorReset="",this.isLoding.set(!0),this._resetSub=this._AuthService.setVerifyPassword(this.reset.value).subscribe({next:o=>{this.isLoding.set(!1),localStorage.setItem("userToken",o.token),this._AuthService.saveUserData(),this._Router.navigate(["/home"])}})}ngOnDestroy(){this._eamilSub.unsubscribe(),this._codeSub.unsubscribe(),this._resetSub.unsubscribe()}};l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=P({type:l,selectors:[["app-forgotpassword"]],standalone:!0,features:[V],decls:6,vars:1,consts:[[1,"text-main"],[1,"text-capitalize","bg-main-light","shadow","p-2","my-5","rounded-4","w-50","mx-auto",3,"formGroup"],[1,"text-capitalize","bg-main-light","shadow","p-2","my-5","rounded-4","w-50","mx-auto",3,"ngSubmit","formGroup"],[1,"form-floating","mb-3"],["formControlName","email","type","email","id","email","placeholder","name@example.com",1,"form-control","shadow-none","border-0",3,"ngClass"],["for","email"],[1,"text-danger","mt-1","w-50","p-0"],[1,"btn-main","ms-auto","d-block",3,"disabled"],[1,"fas","fa-spin","fa-spinner"],[1,"text-danger","p-1","m-0"],[1,"m-0"],["formControlName","resetCode","type","text","id","resetCode","placeholder","name@example.com",1,"form-control","shadow-none","border-0",3,"ngClass"],["for","resetCode"],["readonly","","formControlName","email","type","email","id","email","placeholder","name@example.com",1,"form-control","shadow-none","border-0"],["formControlName","newPassword","type","password","id","newPassword","placeholder","name@example.com",1,"form-control","shadow-none","border-0",3,"ngClass"],["for","newPassword"]],template:function(e,S){e&1&&(n(0,"section")(1,"h1",0),a(2,"Forgot Passowrd"),r(),m(3,U,10,9,"form",1)(4,W,10,9)(5,ie,14,9),r()),e&2&&(s(3),d(3,S.step()==1?3:S.step()==2?4:S.step()==3?5:-1))},dependencies:[R,I,G,q,L,N,A,D]});let i=l;return i})();export{pe as ForgotpasswordComponent};
