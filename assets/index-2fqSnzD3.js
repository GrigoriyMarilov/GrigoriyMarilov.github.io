import{d as $,k as v,l as O,_ as h,r,o as f,c as b,u as F,i as B,a as n,w as p,e as T,t as V,f as R,m as w,b as y,n as N,j as Q,p as K,$ as D,g as S,q as M,E as J,h as U,s as G,v as W,x as L,y as z,F as H,z as X,A as Y,B as Z}from"./index-B0hQSJLk.js";import{f as P}from"./handleError-4JPBGK95.js";import{S as ee}from"./SigninButton-16R6YJwg.js";const te=$({props:{modelValue:{type:String,default:""},context:{type:Object,required:!1}},setup(e,{emit:t}){var i;const u=v((i=e.context)!=null&&i.value?new Date(e.context.value):null),o=a=>{a&&(t("update:modelValue",a.toISOString()),e.context&&e.context.node.input(a.toISOString()))};return O(()=>{var a;return(a=e.context)==null?void 0:a.value},a=>{u.value=a?new Date(a):null}),{localValue:u,handleChange:o}}});function ue(e,t,u,o,i,a){const l=r("el-date-picker");return f(),b(l,{type:"datetime",placeholder:"Select date and time",size:"large",style:{width:"100%"},modelValue:e.localValue,"onUpdate:modelValue":t[0]||(t[0]=s=>e.localValue=s),onChange:e.handleChange,"default-value":e.localValue},null,8,["modelValue","onChange","default-value"])}const j=h(te,[["render",ue]]),ae=$({setup(){return{user:F().user}}}),se={class:"p-1 w-min whitespace-nowrap"};function ne(e,t,u,o,i,a){const l=r("el-text");return f(),B("div",se,[n(l,{type:"success",size:"large",class:"font-bold"},{default:p(()=>{var s;return[T(V((s=e.user)==null?void 0:s.name),1)]}),_:1})])}const oe=h(ae,[["render",ne]]),le=$({setup(){const e=R(),t=F();return{handleClick:()=>{t.deleteUser(),e.push("/signin")}}}});function re(e,t,u,o,i,a){const l=r("el-text"),s=r("el-button");return f(),b(s,{text:"",type:"danger",onClick:e.handleClick},{default:p(()=>[n(l,{type:"danger",class:"font-bold"},{default:p(()=>[T(" Выйти")]),_:1})]),_:1},8,["onClick"])}const ie=h(le,[["render",re]]),ce=$({props:{task:{type:Object,required:!0}},setup({task:e}){const t=w(()=>"/task/"+e.index),u=i=>new Date(i).toLocaleString("ru-RU",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),o=w(()=>e.status?"text-green-500":"text-red-500");return{task:e,formatDate:u,statusClass:o,taskPath:t}}}),de={class:"relative"},pe={class:"flex items-center justify-between mb-4"},me={class:"text-xl font-semibold"},fe={class:"text-gray-500 text-sm"},ke={class:"text-gray-600 mb-4"},_e={class:"text-sm"},ge={class:"absolute bottom-4 right-4"};function $e(e,t,u,o,i,a){const l=r("el-card"),s=r("RouterLink");return f(),B("div",de,[n(s,{to:e.taskPath},{default:p(()=>[n(l,{class:"p-4 shadow-lg rounded-lg cursor-pointer hover:bg-gray-100"},{default:p(()=>[y("div",pe,[y("h3",me,V(e.task.name),1),y("div",fe,[T(" До: "+V(e.formatDate(e.task.deadline))+" ",1),y("span",{class:N(e.statusClass)},V(e.task.status?"Выполнена":"Не выполнена"),3)])]),y("div",ke,[y("p",_e,V(e.task.description),1)])]),_:1})]),_:1},8,["to"]),y("div",ge,[Q(e.$slots,"feature-buttons",{task:e.task})])])}const he=h(ce,[["render",$e]]),E=K("task",()=>{const e=v([]),t=v([]),u=v("nearest"),o=v("");function i(c){t.value=c,e.value=c}function a(c,m){const _=e.value.findIndex(A=>A.index===m);_!==-1&&e.value.splice(_,1,c),d()}function l(c){const m=e.value.findIndex(_=>_.index===c);m!==-1&&e.value.splice(m,1),d()}function s(c){e.value.push(c),d()}function d(){let c=[...e.value];switch(u.value){case"old":c=c.sort((m,_)=>m.createdAt-_.createdAt);break;case"new":c=c.sort((m,_)=>_.createdAt-m.createdAt);break;case"nearest":c=c.sort((m,_)=>new Date(m.deadline).getTime()-new Date(_.deadline).getTime());break;case"completed":c=c.filter(m=>m.status);break}if(o.value){const m=o.value.toLowerCase();c=c.filter(_=>_.name.toLowerCase().includes(m)||_.description.toLowerCase().includes(m))}t.value=c}function g(c){o.value=c,d()}function k(c){u.value=c,d()}return{tasks:t,setTasks:i,updateTask:a,deleteTask:l,addTask:s,initialTasks:e,applyFilters:d,searchQuery:o,filter:u,setSearchQuery:g,setRadioFilter:k}});class x{static async getAllTasks(t){return await D.get("task",{params:t})}static async createTask(t){return await D.post("task",t)}static async deleteTask(t,u){return await D.delete(`user/${u}/task/${t}`)}static async getTask(t){return await D.get(`task/${t}`)}static async editTask(t){const u=t.index;return await D.put(`task/${u}`,t)}}const Ce=$({setup(){const e=E(),t=w({get:()=>e.searchQuery,set:a=>e.setSearchQuery(a)}),u=w({get:()=>e.filter,set:a=>e.setRadioFilter(a)});return{input:t,inputHandler:()=>{e.applyFilters()},filter:u,radioHandler:()=>{e.applyFilters()}}}}),ye={class:"flex flex-col"};function Te(e,t,u,o,i,a){const l=r("el-input"),s=r("el-radio"),d=r("el-radio-group");return f(),B("div",ye,[n(l,{class:"mx-auto",modelValue:e.input,"onUpdate:modelValue":t[0]||(t[0]=g=>e.input=g),style:{width:"240px"},placeholder:"Найти задачу",onInput:e.inputHandler},null,8,["modelValue","onInput"]),n(d,{modelValue:e.filter,"onUpdate:modelValue":t[1]||(t[1]=g=>e.filter=g),onChange:e.radioHandler},{default:p(()=>[n(s,{value:"old"},{default:p(()=>[T("Старые")]),_:1}),n(s,{value:"new"},{default:p(()=>[T("Новые")]),_:1}),n(s,{value:"nearest"},{default:p(()=>[T("Ближайшие")]),_:1}),n(s,{value:"completed"},{default:p(()=>[T("Завершенные")]),_:1})]),_:1},8,["modelValue","onChange"])])}const ve=h(Ce,[["render",Te]]),be=$({components:{FilterTasks:ve,LogoutButton:ie,UserCard:oe},setup(){return{}}}),Be={class:"flex absolute right-4 items-center"};function we(e,t,u,o,i,a){const l=r("FilterTasks"),s=r("UserCard"),d=r("LogoutButton"),g=r("el-header");return f(),b(g,{class:"flex justify-center p-2 relative h-auto"},{default:p(()=>[n(l),y("div",Be,[n(s),n(d)])]),_:1})}const Ee=h(be,[["render",we]]),De=$({props:{id:{type:String,required:!0}},setup({id:e}){const t=S.useToast(),u=F().user,o=E().deleteTask;return{id:e,Delete:M,handleClick:async()=>{J.confirm("Вы хотите удалить задачу?").then(async()=>{try{if(!u)return;await x.deleteTask(e,u==null?void 0:u.id),o(e),t.success("Задача успешно удалена")}catch{t.error("Не удалось удалить задачу")}}).catch(()=>{})}}}});function Ve(e,t,u,o,i,a){const l=r("el-button");return f(),b(l,{type:"danger",icon:e.Delete,circle:"",size:"large",onClick:e.handleClick},null,8,["icon","onClick"])}const q=h(De,[["render",Ve]]),Fe=$({props:{formId:{type:String,required:!0}},emits:["success"],setup({formId:e},{emit:t}){const u=U(e),o=S.useToast(),i=E().updateTask;return{handleCLick:async()=>{var l;try{if(!u)return;if(!((l=u.context)!=null&&l.state.valid)){o.error("Форма содержит ошибки. Пожалуйста, исправьте их перед отправкой.");return}const s=await x.editTask({...u==null?void 0:u.value});i(s.data,s.data.index),o.success("Задача обновлена"),t("success",s.data)}catch(s){P(s,o,u)}}}}});function xe(e,t,u,o,i,a){const l=r("el-button");return f(),b(l,{type:"primary",color:"black",size:"large",onClick:e.handleCLick},{default:p(()=>[T(" Обновить ")]),_:1},8,["onClick"])}const Se=h(Fe,[["render",xe]]),Ae=$({props:{task:{type:Object,required:!0}},setup({task:e}){const t=S.useToast(),u=E().updateTask;return{task:e,Check:G,handleClick:async()=>{try{const i=W(e),a=await x.editTask({...i,status:!i.status});t.success("Задача выполнена"),u(a.data,a.data.index)}catch{}}}}});function Ie(e,t,u,o,i,a){const l=r("el-button");return e.task.status?L("",!0):(f(),b(l,{key:0,type:"primary",icon:e.Check,circle:"",size:"large",onClick:e.handleClick},null,8,["icon","onClick"]))}const Le=h(Ae,[["render",Ie]]),qe=$({props:{formId:{type:String,required:!0}},emits:["success"],setup({formId:e},{emit:t}){const u=U(e),o=F().user,i=E().addTask,a=S.useToast();return{handleClick:async()=>{var s;try{if(!u||!o)return;if(!((s=u.context)!=null&&s.state.valid)){a.error("Форма содержит ошибки. Пожалуйста, исправьте их перед отправкой.");return}const d=await x.createTask({...u.value,userId:o.id,createdAt:new Date().getTime()});a.success("Задача успешно создана"),i(d.data),t("success",d.data)}catch(d){P(d,a,u)}}}}});function Ue(e,t,u,o,i,a){const l=r("el-button");return f(),b(l,{type:"primary",color:"black",onClick:e.handleClick},{default:p(()=>[T(" Создать Задачу ")]),_:1},8,["onClick"])}const ze=h(qe,[["render",Ue]]),He=$({components:{CreateTaskButton:ze,SigninButton:ee},setup(){const e=v(!1),t=z(j);return{dialogVisible:e,datePicker:t}}});function Pe(e,t,u,o,i,a){const l=r("el-button"),s=r("FormKit"),d=r("CreateTaskButton"),g=r("el-dialog");return f(),B(H,null,[n(l,{type:"primary",color:"black",size:"large",onClick:t[0]||(t[0]=k=>e.dialogVisible=!0)},{default:p(()=>[T(" Создать задачу ")]),_:1}),n(g,{modelValue:e.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=k=>e.dialogVisible=k),title:"Создать новую задачу",width:"500"},{default:p(()=>[n(s,{type:"form",id:"createTask","submit-label":"createTask",actions:!1},{default:p(()=>[n(s,{type:"text",name:"name",classes:{wrapper:"max-w-full w-full!"},label:"Название",placeholder:"Помыть посуду",validation:"required","validation-messages":{required:"Обязательно поле"}}),n(s,{type:"textarea",name:"description",classes:{wrapper:"max-w-full w-full!",input:"resize-none"},label:"Описание",placeholder:"Помыть посуду: 2 кружки, тарелку, ложку"}),n(s,{type:"checkbox",classes:{wrapper:"position-relative"},label:"Задача уже выполнена",name:"status",value:!1}),n(s,{classes:{wrapper:"max-w-full w-full"},type:e.datePicker,name:"deadline",label:"Дедлайн",help:"Когда задача должна быть выполнена?",validation:"required","validation-messages":{required:"Обязательно поле"}},null,8,["type"]),n(d,{"form-id":"createTask",onSuccess:t[1]||(t[1]=k=>e.dialogVisible=!1)})]),_:1})]),_:1},8,["modelValue"])],64)}const je=h(He,[["render",Pe]]),Oe=$({computed:{Edit(){return X},DeleteTaskButton(){return q}},components:{CreateTask:je,DeleteTaskButton:q,TaskCard:he,EditTaskButton:Se,ChangeStatusIcon:Le},setup(){const e=z(j,{props:["modelValue"]}),t=E(),u=v(null),o=F().user,i=v(!1),a=v(1),l=w(()=>t.tasks.length),s=w(()=>t.tasks.slice(a.value*8-8,a.value*8)),d=k=>{u.value={...k},i.value=!0},g=k=>{a.value=k};return Y(async()=>{if(o)try{const k=await x.getAllTasks({userId:o.id});if(!k.data)return;t.setTasks(k.data)}catch{t.setTasks([])}}),{tasks:s,dialogButtonClick:d,dialogVisible:i,selectedTask:u,datePicker:e,page:a,totalPages:l,paginationChange:g}}}),Re={class:"w-full h-full"},Ne={class:"mx-auto max-w-2xl w-full overflow-y-auto flex flex-col gap-5 pb-10"},Qe={key:1,class:"text-center"},Ke={class:"fixed bottom-10 right-10"};function Me(e,t,u,o,i,a){const l=r("el-pagination"),s=r("DeleteTaskButton"),d=r("el-button"),g=r("ChangeStatusIcon"),k=r("TaskCard"),c=r("FormKit"),m=r("EditTaskButton"),_=r("el-dialog"),A=r("CreateTask");return f(),B("div",Re,[y("div",Ne,[n(l,{onCurrentChange:e.paginationChange,class:"mx-auto pagination",layout:"prev, pager, next",total:e.totalPages,modelValue:e.page,"onUpdate:modelValue":t[0]||(t[0]=C=>e.page=C),"page-size":8,background:""},null,8,["onCurrentChange","total","modelValue"]),(f(!0),B(H,null,Z(e.tasks,C=>(f(),b(k,{key:JSON.stringify(C),task:C},{"feature-buttons":p(({task:I})=>[n(s,{id:I.index},null,8,["id"]),n(d,{onClick:Ye=>e.dialogButtonClick(I),icon:e.Edit,circle:"",type:"warning",size:"large"},null,8,["onClick","icon"]),n(g,{task:I},null,8,["task"])]),_:2},1032,["task"]))),128)),e.selectedTask?(f(),b(_,{modelValue:e.dialogVisible,"onUpdate:modelValue":t[4]||(t[4]=C=>e.dialogVisible=C),key:e.selectedTask.index},{default:p(()=>[n(c,{type:"form",id:"editTask","submit-label":"createTask",actions:!1},{default:p(()=>[n(c,{type:"hidden",name:"index",value:e.selectedTask.index},null,8,["value"]),n(c,{type:"text",name:"name",classes:{wrapper:"max-w-full w-full!"},modelValue:e.selectedTask.name,"onUpdate:modelValue":t[1]||(t[1]=C=>e.selectedTask.name=C),label:"Название",placeholder:"Помыть посуду",validation:"required","validation-messages":{required:"Обязательно поле"}},null,8,["modelValue"]),n(c,{type:"textarea",name:"description",modelValue:e.selectedTask.description,"onUpdate:modelValue":t[2]||(t[2]=C=>e.selectedTask.description=C),classes:{wrapper:"max-w-full w-full!",input:"resize-none"},label:"Описание",placeholder:"Помыть посуду: 2 кружки, тарелку, ложку"},null,8,["modelValue"]),n(c,{type:"checkbox",classes:{wrapper:"position-relative"},label:"Задача уже выполнена",name:"status",value:e.selectedTask.status},null,8,["value"]),n(c,{classes:{wrapper:"max-w-full w-full"},modelValue:e.selectedTask.deadline,type:e.datePicker,name:"deadline",label:"Дедлайн",help:"Когда задача должна быть выполнена?",validation:"required","validation-messages":{required:"Обязательно поле"}},null,8,["modelValue","type"]),n(m,{"form-id":"editTask",onSuccess:t[3]||(t[3]=C=>e.dialogVisible=!1)})]),_:1})]),_:1},8,["modelValue"])):L("",!0),e.tasks.length<1?(f(),B("div",Qe," У вас пока нет задач ")):L("",!0)]),y("div",Ke,[n(A)])])}const Je=h(Oe,[["render",Me]]),Ge=$({components:{TaskList:Je,Header:Ee},setup(){return{}}}),We={class:"h-full flex flex-col"};function Xe(e,t,u,o,i,a){const l=r("Header"),s=r("TaskList"),d=r("el-main");return f(),B("div",We,[n(l),n(d,null,{default:p(()=>[n(s)]),_:1})])}const ut=h(Ge,[["render",Xe]]);export{ut as default};
