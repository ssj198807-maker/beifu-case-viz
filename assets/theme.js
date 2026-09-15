/* 倍富案 · 多页主题切换（明暗双主题，跨页持久化）
   每个页面头部建议放置无闪烁初始化：
   <script>document.documentElement.dataset.theme=localStorage.getItem('beifu-theme')||'light';</script>
   本脚本负责按钮交互与状态同步（须在 nav.js 之后引入）。 */
(function(){
  var KEY = 'beifu-theme';
  function apply(t){
    document.documentElement.setAttribute('data-theme', t);
    var btn = document.querySelector('.theme-btn');
    if(btn) btn.textContent = (t === 'dark') ? '☀ 浅色' : '🌙 深色';
  }
  var saved = localStorage.getItem(KEY) || document.documentElement.getAttribute('data-theme') || 'light';
  apply(saved);

  // 事件委托：nav.js 注入的按钮在 DOM 中，监听 document 即可
  document.addEventListener('click', function(e){
    var btn = e.target.closest && e.target.closest('.theme-btn');
    if(!btn) return;
    e.preventDefault();
    var now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem(KEY, now);
    apply(now);
  });
})();
