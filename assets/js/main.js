// current-page marker + masks (CPF, phone, CEP)
(function(){const path = location.pathname.split('/').pop() || 'index.html'; document.querySelectorAll('nav a').forEach(a=>{ if(a.getAttribute('href')===path) a.setAttribute('aria-current','page'); });})();
function onlyDigits(v){ return v.replace(/\D/g,''); }
function maskCPF(v){ v=onlyDigits(v).slice(0,11); let o=''; if(v.length>0) o=v.slice(0,3); if(v.length>3) o+='.'+v.slice(3,6); if(v.length>6) o+='.'+v.slice(6,9); if(v.length>9) o+='-'+v.slice(9,11); return o; }
function maskPhone(v){ v=onlyDigits(v).slice(0,11); if(v.length<=10){ return v.replace(/(\d{2})(\d{4})(\d{0,4})/,(_,a,b,c)=> '('+a+') '+b+(c?'-'+c:'')); } else { return v.replace(/(\d{2})(\d{1})(\d{4})(\d{0,4})/,(_,a,b,c,d)=> '('+a+') '+b+''+c+(d?'-'+d:'')); } }
function maskCEP(v){ v=onlyDigits(v).slice(0,8); return v.replace(/(\d{5})(\d{0,3})/,(_,a,b)=> a+(b?'-'+b:'')); }
document.addEventListener('input', e=>{ const t=e.target; if(t.matches('[data-mask="cpf"]')) t.value=maskCPF(t.value); if(t.matches('[data-mask="phone"]')) t.value=maskPhone(t.value); if(t.matches('[data-mask="cep"]')) t.value=maskCEP(t.value); });
document.addEventListener('submit', e=>{ const f=e.target.closest('form.needs-validate'); if(!f) return; if(!f.checkValidity()){ e.preventDefault(); alert('Por favor, corrija os campos destacados antes de enviar.'); }}, true);
