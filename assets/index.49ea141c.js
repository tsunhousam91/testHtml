import{o as d,c as _,u as y,R as k,r as l,w as b,a as g,b as h,d as w,t as p,e as i,i as x,f as I,P as C,g as O,h as $,p as L,j as f,v,k as S,l as N,m as A,n as B}from"./vendor.b4e208b4.js";const H=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};H();const D={setup(a){return(o,n)=>(d(),_(y(k)))}},F={props:["value1","gfd"],emits:["hahaOk"],setup(a,{emit:o}){const n=a,r=l(3),e=l(9);x("key");function t(){o("hahaOk",95)}function s(){console.log(ff)}return b(r,async(c,u)=>{e.value+=100+c}),g(()=>{o("hahaOk",3210)}),(c,u)=>(d(),h("div",{style:{"background-color":"red",width:"100px",height:"20px"},onClick:t},[w(p(n.value1)+" "+p(n.gfd)+" ",1),i("input",{type:"file",id:"testFile",onChange:u[0]||(u[0]=Q=>s())},null,32)]))}},M={apiKey:"AIzaSyALeaunF03n_-ZnQ1JILvI44Y5diJaMvMs",authDomain:"petsdiary-244a5.firebaseapp.com",projectId:"petsdiary-244a5",storageBucket:"petsdiary-244a5.appspot.com",messagingSenderId:"657649953416",appId:"1:657649953416:web:31bfe218c2cc3099c9cd3d"},P=I(M),V=C(P);async function j(){const a=O(V,"user");return await $(a)}var R={getUsers:j};var T=(a,o)=>{const n=a.__vccOpts||a;for(const[r,e]of o)n[r]=e;return n};const z={id:"home-root"},E={id:"top-region"},J={id:"content-region"},K={setup(a){const o=l(0),n=l(123);L("key",n);function r(t){n.value+=999,o.value=t}function e(t){console.log(t)}return g(()=>{R.getUsers().then(t=>{console.log(t)})}),(t,s)=>(d(),h("div",z,[i("div",E,[i("div",{class:"tab",onClick:s[0]||(s[0]=c=>r(0))},"\u9996\u9801"),i("div",{class:"tab",onClick:s[1]||(s[1]=c=>r(1))},"\u767B\u5165/\u8A3B\u518A"),i("div",{class:"tab",onClick:s[2]||(s[2]=c=>r(2))},"\u6A19\u7C643"),i("div",{class:"tab",onClick:s[3]||(s[3]=c=>r(3))},"\u6A19\u7C644")]),i("div",J,[f(S(F,{value1:"haha321",gfd:"test",onHahaOk:e},null,512),[[v,o.value==0]]),f(i("div",null," content2 ",512),[[v,o.value==1]])])]))}};var U=T(K,[["__scopeId","data-v-3737f1a4"]]);const q=N({history:A("/"),routes:[{path:"/",component:U}]}),m=B(D);m.use(q);m.mount("#app");
