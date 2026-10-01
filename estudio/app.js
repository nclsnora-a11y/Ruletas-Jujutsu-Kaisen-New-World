(function(){
'use strict';

const PRIVADO_EXAM='2026-11-17';
const PENAL_EXAM='2026-11-25';
const STORE='nico-study-hub-v1';

const privado=[
 {n:1,title:'Estructura de las obligaciones · Nociones básicas',difficulty:'Media',weight:1.75,rank:5},
 {n:2,title:'Estructura de la obligación · Elementos esenciales',difficulty:'Media/Alta',weight:2.25,rank:9},
 {n:3,title:'Efectos de las obligaciones',difficulty:'Media',weight:1.5,rank:4},
 {n:4,title:'Preferencias entre los acreedores',difficulty:'Media',weight:1.5,rank:3},
 {n:5,title:'Clasificación de las obligaciones · Objeto',difficulty:'Muy alta',weight:3.5,rank:13},
 {n:6,title:'Clasificación de las obligaciones · Continuación',difficulty:'Alta',weight:3,rank:12},
 {n:7,title:'Modos de extinción · El pago',difficulty:'Alta',weight:2.5,rank:10},
 {n:8,title:'Extinción de las obligaciones · Continuación',difficulty:'Media/Alta',weight:2,rank:7},
 {n:9,title:'Prescripción liberatoria',difficulty:'Media/Alta',weight:2,rank:8},
 {n:10,title:'Responsabilidad civil',difficulty:'Muy alta',weight:4,rank:14},
 {n:11,title:'Responsabilidad directa e indirecta',difficulty:'Baja',weight:1,rank:1},
 {n:12,title:'Responsabilidad por riesgo, colectiva y anónima',difficulty:'Baja/Media',weight:1.25,rank:2},
 {n:13,title:'Responsabilidades especiales',difficulty:'Alta',weight:2.5,rank:11},
 {n:14,title:'La acción indemnizatoria',difficulty:'Media',weight:1.75,rank:6}
];

const penal=[
 {n:1,title:'Introducción al Derecho Penal',difficulty:'Baja',weight:1.25,rank:3},
 {n:2,title:'Evolución histórica',difficulty:'Media',weight:1.75,rank:7},
 {n:3,title:'Fundamentos político-constitucionales',difficulty:'Baja/Media',weight:1.5,rank:4},
 {n:4,title:'Ley penal e interpretación',difficulty:'Media',weight:1.75,rank:8},
 {n:5,title:'Ley penal en el espacio y extradición',difficulty:'Baja/Media',weight:1.5,rank:5},
 {n:6,title:'Ley penal en el tiempo y respecto de las personas',difficulty:'Media',weight:1.5,rank:6},
 {n:7,title:'Teoría jurídica del delito',difficulty:'Muy alta',weight:2.75,rank:18},
 {n:8,title:'La acción',difficulty:'Alta',weight:2.5,rank:17},
 {n:9,title:'Teoría del tipo',difficulty:'Muy alta',weight:4,rank:22},
 {n:10,title:'Antijuridicidad',difficulty:'Alta',weight:2.5,rank:16},
 {n:11,title:'La justificación',difficulty:'Alta',weight:2.25,rank:14},
 {n:12,title:'Responsabilidad por el hecho y culpabilidad',difficulty:'Muy alta',weight:3.5,rank:21},
 {n:13,title:'Causas que excluyen la culpabilidad',difficulty:'Muy alta',weight:3,rank:20},
 {n:14,title:'Proceso ejecutivo del delito · Tentativa',difficulty:'Media/Alta',weight:2,rank:11},
 {n:15,title:'Autoría y participación',difficulty:'Alta',weight:2.5,rank:15},
 {n:16,title:'Concurso de delitos',difficulty:'Media/Alta',weight:2,rank:10},
 {n:17,title:'Punibilidad y acciones',difficulty:'Media/Alta',weight:2,rank:9},
 {n:18,title:'Teoría y ejecución de la pena',difficulty:'Muy alta',weight:3,rank:19},
 {n:19,title:'Penas, condena condicional y reincidencia',difficulty:'Alta',weight:2.25,rank:13},
 {n:20,title:'Medidas de seguridad y régimen juvenil',difficulty:'Media/Alta',weight:2,rank:12},
 {n:21,title:'Ciencia penitenciaria',difficulty:'Baja',weight:1,rank:1},
 {n:22,title:'Ética profesional',difficulty:'Baja',weight:1,rank:2}
];

const schedule=[
 d('2026-10-01','Inicio del plan',[t('privado','Privado U1','Primera vuelta completa + explicación oral corta'),t('penal','Penal U1','Primera lectura activa y recuperación sin mirar')]),
 d('2026-10-02','Base conceptual',[t('privado','Privado U2 · Parte 1','Sujetos, objeto, vínculo y conceptos esenciales'),t('penal','Penal U2','Evolución histórica; corregir cronología antes de memorizar')]),
 d('2026-10-05','Cerrar U2',[t('privado','Privado U2 · Parte 2','Causa, plazo y reconocimiento + repaso U1'),t('penal','Penal U3','Principios constitucionales')]),
 d('2026-10-06','Tutela del crédito',[t('privado','Privado U3','Efectos, buena fe, acciones protectoras y astreintes'),t('penal','Penal U4','Ley penal, fuentes e interpretación')]),
 d('2026-10-07','Preferencias',[t('privado','Privado U4','Privilegios, retención y primer embargante'),t('penal','Penal U5','Espacio, jurisdicción y extradición')]),
 d('2026-10-08','Unidad pesada',[t('privado','Privado U5 · Parte 1','Dar cosas ciertas, género y concurrencia'),t('penal','Penal U6','Tiempo, ley más benigna y personas')]),
 d('2026-10-09','Unidad pesada',[t('privado','Privado U5 · Parte 2','Dinero, deudas de valor, intereses y anatocismo'),t('repaso','Penal U1–U6','Repaso acumulativo y preguntas cortas')]),
 d('2026-10-12','Cerrar U5',[t('privado','Privado U5 · Parte 3','Hacer/no hacer, alternativas y facultativas'),t('penal','Penal U7 · Parte 1','Evolución dogmática; causalismo y finalismo')]),
 d('2026-10-13','Clasificaciones',[t('privado','Privado U6 · Parte 1','Divisibles, indivisibles y mancomunadas'),t('penal','Penal U7 · Parte 2','Funcionalismo y cuadro comparativo')]),
 d('2026-10-14','Solidaridad',[t('privado','Privado U6 · Parte 2','Solidaridad activa y pasiva'),t('penal','Penal U8','Acción, ausencia de acción y omisión')]),
 d('2026-10-15','Cerrar U6',[t('privado','Privado U6 · Parte 3','Concurrentes, cláusula penal, recíprocas y rendición'),t('penal','Penal U9 · Parte 1','Tipo, tipicidad y clasificaciones')]),
 d('2026-10-16','Pago',[t('privado','Privado U7 · Parte 1','Concepto, sujetos, objeto, identidad e integridad'),t('penal','Penal U9 · Parte 2','Tipo objetivo, causalidad e imputación objetiva')]),
 d('2026-10-19','Pago',[t('privado','Privado U7 · Parte 2','Imputación, consignación y prueba'),t('penal','Penal U9 · Parte 3','Tipo subjetivo, dolo y errores')]),
 d('2026-10-20','Cerrar pago',[t('privado','Privado U7 · Parte 3','Subrogación, mora y casos'),t('penal','Penal U10','Antijuridicidad y estructura del injusto')]),
 d('2026-10-21','Otros modos',[t('privado','Privado U8','Compensación, confusión, novación, dación, renuncia, imposibilidad y transacción'),t('penal','Penal U11','Legítima defensa y otras justificaciones')]),
 d('2026-10-22','Prescripción',[t('privado','Privado U9 · Parte 1','Curso, suspensión, interrupción y dispensa'),t('penal','Penal U12 · Parte 1','Responsabilidad por el hecho y culpabilidad')]),
 d('2026-10-23','Cerrar prescripción',[t('privado','Privado U9 · Parte 2','Aspectos procesales, plazos y caducidad'),t('penal','Penal U12 · Parte 2','Dolo, culpa e imputabilidad según modelos')]),
 d('2026-10-26','Núcleo de daños',[t('privado','Privado U10 · Parte 1','Funciones, unificación y mapa de presupuestos'),t('penal','Penal U12 · Parte 3','Casos + cierre conceptual')]),
 d('2026-10-27','Núcleo de daños',[t('privado','Privado U10 · Parte 2','Daño y antijuridicidad'),t('penal','Penal U13 · Parte 1','Inimputabilidad y teoría del error')]),
 d('2026-10-28','Núcleo de daños',[t('privado','Privado U10 · Parte 3','Causalidad y consecuencias indemnizables'),t('penal','Penal U13 · Parte 2','Error de tipo/prohibición, coacción y preterintención')]),
 d('2026-10-29','Cerrar U10',[t('privado','Privado U10 · Parte 4','Factores, eximentes, atenuación y casos'),t('penal','Penal U14','Iter criminis, tentativa y desistimiento')]),
 d('2026-10-30','Consolidación',[t('repaso','Privado U1–U5','Repaso oral acumulativo; priorizar U5'),t('penal','Penal U15','Autoría, dominio del hecho y participación')]),
 d('2026-11-02','Responsabilidad aplicada',[t('privado','Privado U11','Directa e indirecta; dependientes, progenitores y encargados'),t('penal','Penal U16','Concurso ideal, real, aparente y unificación')]),
 d('2026-11-03','Riesgo',[t('privado','Privado U12','Riesgo/vicio, actividades y responsabilidad colectiva'),t('penal','Penal U17','Acciones, extinción, prescripción, probation e indulto')]),
 d('2026-11-04','Especiales',[t('privado','Privado U13 · Parte 1','Educativos, profesionales, hoteles, personas jurídicas y tránsito'),t('penal','Penal U18 · Parte 1','Teorías de la pena y penas privativas de libertad')]),
 d('2026-11-05','Especiales',[t('privado','Privado U13 · Parte 2','Intimidad, Estado, consumo y ambiente'),t('penal','Penal U18 · Parte 2','Ejecución, libertad condicional y régimen vigente')]),
 d('2026-11-06','Cerrar primera vuelta Privado',[t('privado','Privado U14','Acción indemnizatoria y relación civil-penal'),t('penal','Penal U19','Penas accesorias, condena condicional y reincidencia')]),
 d('2026-11-09','Segunda vuelta Privado',[t('repaso','Privado U1–U3','Recuperación sin mirar + casos breves'),t('penal','Penal U20','Medidas de seguridad y régimen juvenil vigente')]),
 d('2026-11-10','Segunda vuelta Privado',[t('repaso','Privado U4–U6','Especial atención U5/U6; cuadros comparativos'),t('penal','Penal U21','Ciencia penitenciaria')]),
 d('2026-11-11','Segunda vuelta Privado',[t('repaso','Privado U7–U9','Pago, mora, extinción y prescripción'),t('penal','Penal U22','Ética profesional; corregir Couture antes de memorizar')]),
 d('2026-11-12','Día fuerte U10',[t('repaso','Privado U10','Simulación oral completa + caso de responsabilidad'),t('repaso','Penal U1–U6','Primera recuperación acumulativa')]),
 d('2026-11-13','Cerrar segunda vuelta',[t('repaso','Privado U11–U14','Responsabilidades especiales + acción indemnizatoria'),t('repaso','Penal U7–U13','Núcleo teoría del delito')]),
 d('2026-11-16','Pre examen Privado',[t('repaso','Privado · Bolillero completo','Dos bolillas, exposición cronometrada y corrección de rojos'),t('repaso','Privado · Último ajuste','Sólo huecos concretos; nada de contenido nuevo')]),
 d('2026-11-17','EXAMEN PRIVADO II',[t('privado','Final oral de Privado II','Repaso mínimo de disparadores. Después del examen: descanso')]),
 d('2026-11-18','Penal intensivo',[t('repaso','Penal U14–U18','Tentativa, participación, concurso, punibilidad y pena'),t('repaso','Penal · Casos','Resolver al menos 3 casos cortos')]),
 d('2026-11-19','Penal intensivo',[t('repaso','Penal U7–U9','Teoría del delito, acción y tipo en profundidad'),t('repaso','Penal · Oral','Explicar estructura del delito sin mirar')]),
 d('2026-11-20','Penal intensivo',[t('repaso','Penal U10–U13','Antijuridicidad, justificación y culpabilidad'),t('repaso','Penal · Casos','Legítima defensa, error e inimputabilidad')]),
 d('2026-11-23','Cierre de programa',[t('repaso','Penal U14–U22','Segunda vuelta rápida + artículos clave'),t('repaso','Penal · Puntos rojos','Reincidencia, juvenil, ejecución y cualquier hueco')]),
 d('2026-11-24','Pre examen Penal',[t('repaso','Penal · Bolillero completo','Dos bolillas + preguntas abiertas del programa'),t('repaso','Penal · Último ajuste','Sólo recuperación; no incorporar temas nuevos')]),
 d('2026-11-25','EXAMEN PENAL',[t('penal','Final oral de Penal I','Repaso de disparadores y estructura de respuesta')])
];

function t(subject,title,detail){return {subject:subject,title:title,detail:detail};}
function d(date,label,tasks){return {date:date,label:label,tasks:tasks};}

let state=loadState();
let currentSubject='privado';
let currentSort='programa';
let calendarFilter='todos';

function defaultState(){
  return {units:{privado:{},penal:{}},tasks:{},reviews:[]};
}
function loadState(){
  try{
    const raw=localStorage.getItem(STORE);
    return raw?Object.assign(defaultState(),JSON.parse(raw)):defaultState();
  }catch(e){return defaultState();}
}
function save(){localStorage.setItem(STORE,JSON.stringify(state));refreshProgress();}

function localISO(date){
  const y=date.getFullYear();
  const m=String(date.getMonth()+1).padStart(2,'0');
  const d=String(date.getDate()).padStart(2,'0');
  return y+'-'+m+'-'+d;
}
function parseISO(s){const p=s.split('-').map(Number);return new Date(p[0],p[1]-1,p[2]);}
function addDays(s,n){const x=parseISO(s);x.setDate(x.getDate()+n);return localISO(x);}
function daysUntil(s){
  const a=new Date();a.setHours(0,0,0,0);
  const b=parseISO(s);b.setHours(0,0,0,0);
  return Math.max(0,Math.ceil((b-a)/86400000));
}
function prettyDate(s,short){
  const opts=short?{weekday:'short',day:'2-digit',month:'short'}:{weekday:'long',day:'numeric',month:'long'};
  return parseISO(s).toLocaleDateString('es-AR',opts);
}
function capitalize(s){return s.charAt(0).toUpperCase()+s.slice(1);}

function getUnitState(subject,n){
  return (state.units[subject]&&state.units[subject][n])||{status:'sin',lastStudy:null};
}
function setUnitStatus(subject,n,status){
  state.units[subject]=state.units[subject]||{};
  const old=getUnitState(subject,n);
  state.units[subject][n]={status:status,lastStudy:old.lastStudy||null};
  save();renderUnits();renderReviews();
}
function studiedToday(subject,n){
  const today=localISO(new Date());
  state.units[subject]=state.units[subject]||{};
  const old=getUnitState(subject,n);
  state.units[subject][n]={status:old.status==='sin'?'amarillo':old.status,lastStudy:today};
  state.reviews=state.reviews.filter(r=>!(r.subject===subject&&r.unit===n&&!r.done));
  [1,3,7].forEach((offset,idx)=>{
    state.reviews.push({
      id:subject+'-'+n+'-'+today+'-'+offset,
      subject:subject,unit:n,due:addDays(today,offset),
      label:idx===0?'24 h':idx===1?'72 h':'7 días',done:false
    });
  });
  save();renderUnits();renderReviews();renderDueReviews();
}

function setView(name){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===name));
  document.getElementById('view-'+name).classList.add('active');
  const titles={hoy:'Hoy',calendario:'Calendario',unidades:'Unidades',repasos:'Repasos',simulador:'Bolillero'};
  document.getElementById('view-title').textContent=titles[name]||'Estudio';
  if(name==='calendario')renderCalendar();
  if(name==='unidades')renderUnits();
  if(name==='repasos')renderReviews();
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderToday(){
  const today=localISO(new Date());
  document.getElementById('today-chip').textContent=capitalize(new Date().toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'long'}));
  document.getElementById('days-privado').textContent=daysUntil(PRIVADO_EXAM);
  document.getElementById('days-penal').textContent=daysUntil(PENAL_EXAM);
  const box=document.getElementById('today-tasks');
  const day=schedule.find(x=>x.date===today);
  if(!day){
    box.innerHTML='<div class="empty">Hoy no hay bloques programados. Si es fin de semana: descanso. Si querés adelantar, usá “Unidades” o “Bolillero”.</div>';
  }else{
    box.innerHTML=day.tasks.map((task,i)=>taskHTML(day.date,i,task)).join('');
  }
  renderDueReviews();
}

function taskHTML(date,i,task){
  const id=date+'-'+i;
  const done=!!state.tasks[id];
  return '<article class="task '+(done?'done':'')+'">'+
    '<button class="task-check" data-task="'+id+'" aria-label="Marcar tarea">'+(done?'✓':'')+'</button>'+
    '<div><div class="task-title">'+task.title+'</div><div class="task-meta">'+task.detail+'</div></div>'+
    '<span class="subject-pill '+task.subject+'">'+labelSubject(task.subject)+'</span>'+
  '</article>';
}
function labelSubject(s){return s==='privado'?'Privado':s==='penal'?'Penal':'Repaso';}

function renderCalendar(){
  const today=localISO(new Date());
  const list=document.getElementById('calendar-list');
  const filtered=schedule.map(day=>{
    const tasks=day.tasks.filter(task=>{
      if(calendarFilter==='todos')return true;
      if(calendarFilter==='repaso')return task.subject==='repaso';
      return task.subject===calendarFilter;
    });
    return Object.assign({},day,{tasks:tasks});
  }).filter(day=>day.tasks.length);
  list.innerHTML=filtered.map(day=>
    '<article class="day-card '+(day.date===today?'today':'')+'" id="day-'+day.date+'">'+
      '<div class="day-head"><div><strong>'+capitalize(prettyDate(day.date,true))+'</strong><span> · '+day.label+'</span></div><span>'+day.date+'</span></div>'+
      '<div class="day-tasks">'+day.tasks.map(task=>
        '<div class="day-task"><div><p>'+task.title+'</p><small>'+task.detail+'</small></div><span class="subject-pill '+task.subject+'">'+labelSubject(task.subject)+'</span></div>'
      ).join('')+'</div>'+
    '</article>'
  ).join('');
}
function jumpToday(){
  const el=document.getElementById('day-'+localISO(new Date()));
  if(el)el.scrollIntoView({behavior:'smooth',block:'center'});
}

function renderUnits(){
  let data=currentSubject==='privado'?privado.slice():penal.slice();
  if(currentSort==='carga')data.sort((a,b)=>b.weight-a.weight);
  const grid=document.getElementById('unit-grid');
  grid.innerHTML=data.map(u=>{
    const us=getUnitState(currentSubject,u.n);
    return '<article class="unit-card status-'+us.status+'">'+
      '<div class="unit-top"><span class="unit-num">UNIDAD '+u.n+'</span><span class="unit-load">Carga '+u.weight+'×</span></div>'+
      '<h4>'+u.title+'</h4>'+
      '<div class="unit-stats"><span>'+u.difficulty+'</span><span>Orden de carga: '+u.rank+'</span>'+(us.lastStudy?'<span>Último estudio: '+prettyDate(us.lastStudy,true)+'</span>':'')+'</div>'+
      '<div class="unit-actions">'+
        '<select class="status-select" data-subject="'+currentSubject+'" data-unit="'+u.n+'">'+
          option('sin','Sin empezar',us.status)+option('amarillo','En proceso',us.status)+option('verde','Dominada',us.status)+option('rojo','Reforzar',us.status)+
        '</select>'+
        '<button class="study-today" data-study-subject="'+currentSubject+'" data-study-unit="'+u.n+'">Estudié hoy</button>'+
      '</div>'+
    '</article>';
  }).join('');
}
function option(v,label,selected){return '<option value="'+v+'" '+(v===selected?'selected':'')+'>'+label+'</option>';}

function renderDueReviews(){
  const today=localISO(new Date());
  const due=state.reviews.filter(r=>!r.done&&r.due<=today).sort((a,b)=>a.due.localeCompare(b.due));
  const box=document.getElementById('due-reviews');
  if(!due.length){box.innerHTML='<div class="review-chip"><strong>Todo al día</strong><span>No hay repasos vencidos.</span></div>';return;}
  box.innerHTML=due.slice(0,6).map(r=>{
    const unit=(r.subject==='privado'?privado:penal).find(u=>u.n===r.unit);
    return '<div class="review-chip"><strong>'+labelSubject(r.subject)+' U'+r.unit+' · '+r.label+'</strong><span>'+unit.title+'</span></div>';
  }).join('');
}
function renderReviews(){
  const today=localISO(new Date());
  const list=state.reviews.slice().sort((a,b)=>a.due.localeCompare(b.due));
  const box=document.getElementById('review-list');
  if(!list.length){box.innerHTML='<div class="empty">Todavía no hay repasos automáticos. Entrá en “Unidades” y tocá “Estudié hoy”.</div>';return;}
  box.innerHTML=list.map(r=>{
    const unit=(r.subject==='privado'?privado:penal).find(u=>u.n===r.unit);
    const due=!r.done&&r.due<=today;
    return '<article class="review-item '+(due?'due ':'')+(r.done?'done':'')+'">'+
      '<div><p><strong>'+labelSubject(r.subject)+' U'+r.unit+' · '+r.label+'</strong> — '+unit.title+'</p><small>'+capitalize(prettyDate(r.due,true))+(due?' · Vence ahora':'')+'</small></div>'+
      '<div class="review-actions"><button class="ghost-btn" data-review="'+r.id+'">'+(r.done?'Reabrir':'Hecho')+'</button></div>'+
    '</article>';
  }).join('');
}
function toggleReview(id){
  const r=state.reviews.find(x=>x.id===id);
  if(r){r.done=!r.done;save();renderReviews();renderDueReviews();}
}

function refreshProgress(){
  [['privado',privado],['penal',penal]].forEach(pair=>{
    const subject=pair[0],arr=pair[1];
    const green=arr.filter(u=>getUnitState(subject,u.n).status==='verde').length;
    const pct=Math.round(green/arr.length*100);
    document.getElementById('bar-'+subject).style.width=pct+'%';
    document.getElementById('pct-'+subject).textContent=pct+'% de unidades en verde';
  });
}

function spin(subject){
  const arr=subject==='privado'?privado:penal;
  const pool=arr.filter(u=>getUnitState(subject,u.n).status!=='sin');
  const source=pool.length?pool:arr;
  const u=source[Math.floor(Math.random()*source.length)];
  const result=document.getElementById('ball-result');
  result.innerHTML='<span>'+u.n+'</span><p><strong>'+labelSubject(subject)+' · Unidad '+u.n+'</strong><br>'+u.title+'</p>';
}

function exportData(){
  const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);a.download='nico-study-hub-progreso.json';a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
function importData(file){
  const reader=new FileReader();
  reader.onload=function(){
    try{state=Object.assign(defaultState(),JSON.parse(reader.result));save();renderToday();renderCalendar();renderUnits();renderReviews();alert('Progreso importado.');}
    catch(e){alert('No pude leer ese archivo.');}
  };
  reader.readAsText(file);
}

document.addEventListener('click',function(e){
  const nav=e.target.closest('.nav-btn');if(nav){setView(nav.dataset.view);return;}
  const task=e.target.closest('[data-task]');if(task){const id=task.dataset.task;state.tasks[id]=!state.tasks[id];save();renderToday();return;}
  const study=e.target.closest('[data-study-unit]');if(study){studiedToday(study.dataset.studySubject,Number(study.dataset.studyUnit));return;}
  const review=e.target.closest('[data-review]');if(review){toggleReview(review.dataset.review);return;}
  const subject=e.target.closest('[data-subject]');if(subject){currentSubject=subject.dataset.subject;document.querySelectorAll('[data-subject]').forEach(x=>x.classList.toggle('active',x===subject));renderUnits();return;}
  const sort=e.target.closest('[data-sort]');if(sort){currentSort=sort.dataset.sort;document.querySelectorAll('[data-sort]').forEach(x=>x.classList.toggle('active',x===sort));renderUnits();return;}
  const filter=e.target.closest('[data-filter]');if(filter){calendarFilter=filter.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active',x===filter));renderCalendar();return;}
});
document.addEventListener('change',function(e){
  if(e.target.matches('.status-select'))setUnitStatus(e.target.dataset.subject,Number(e.target.dataset.unit),e.target.value);
});
document.getElementById('go-calendar').addEventListener('click',()=>setView('calendario'));
document.getElementById('jump-today').addEventListener('click',jumpToday);
document.getElementById('spin-privado').addEventListener('click',()=>spin('privado'));
document.getElementById('spin-penal').addEventListener('click',()=>spin('penal'));
document.getElementById('export-data').addEventListener('click',exportData);
document.getElementById('import-data').addEventListener('change',e=>{if(e.target.files[0])importData(e.target.files[0]);});
document.getElementById('reset-data').addEventListener('click',()=>{
  if(confirm('¿Seguro que querés borrar todo el progreso guardado en este navegador?')){
    state=defaultState();save();renderToday();renderCalendar();renderUnits();renderReviews();
  }
});

renderToday();renderCalendar();renderUnits();renderReviews();refreshProgress();
})();