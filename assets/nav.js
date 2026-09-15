/* BF案 · 共享导航栏注入
   每个页面底部引入：<script src="assets/nav.js"></script>（根页）或 <script src="../assets/nav.js"></script>（子页）
   自动在 #site-header 渲染常驻顶部导航，并按当前页高亮；链接路径自适应根目录 / pages/ 两种位置。 */
(function(){
  var pages = [
    { file: 'parties.html',    label: '当事人图谱' },
    { file: 'timeline.html',   label: '时间线' },
    { file: 'winrate.html',    label: '路径与胜率' },
    { file: 'legal.html',      label: '法律依据' },
    { file: 'precedents.html', label: '关键判例' },
    { file: 'statecomp.html',  label: '国家赔偿' },
    { file: 'roadmap.html',    label: '行动路线' }
  ];
  var host = document.getElementById('site-header');
  if(!host) return;

  var path = location.pathname.replace(/\/+$/, '');
  var inPages = path.indexOf('/pages/') > -1;
  var cur = path.split('/').pop() || 'index.html';

  var idxHref  = inPages ? '../index.html' : 'index.html';
  var pageBase = inPages ? '' : 'pages/';

  var links = '';
  links += '<a href="' + idxHref + '"' + (cur === 'index.html' ? ' class="active"' : '') + '>总览</a>';
  pages.forEach(function(p){
    var active = (p.file === cur) ? ' class="active"' : '';
    links += '<a href="' + pageBase + p.file + '"' + active + '>' + p.label + '</a>';
  });

  host.innerHTML =
    '<div class="nav-inner">' +
      '<div class="nav-brand">BF工业 · ZT系逃废债追责' +
        '<small>执行 + 破产 + 国家赔偿 · 三域复合案（已脱敏）</small></div>' +
      '<nav class="nav-links">' + links + '</nav>' +
      '<button class="theme-btn" type="button">🌙 深色</button>' +
    '</div>';
})();
