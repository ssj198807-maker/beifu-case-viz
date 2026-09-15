// 明暗主题切换（共享）
(function(){
  function apply(t){
    document.documentElement.setAttribute('data-theme', t);
    var btns = document.querySelectorAll('.theme-btn');
    btns.forEach(function(b){ b.textContent = (t==='dark'?'☀ 浅色':'🌙 深色'); });
    try{ localStorage.setItem('beifu-theme', t); }catch(e){}
  }
  var saved = 'light';
  try{ saved = localStorage.getItem('beifu-theme') || 'light'; }catch(e){}
  apply(saved);
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.theme-btn').forEach(function(b){
      b.addEventListener('click', function(){
        var cur = document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
        apply(cur);
      });
    });
  });
})();
