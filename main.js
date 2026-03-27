// 初始化全屏滑动（博学谷同款专业配置）
new fullpage('#fullpage', {
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['首页', '核心服务', '急救知识', '成果展示', '立即报名', '联系我们'],
  scrollingSpeed: 800,
  easing: 'easeInOutCubic',
  fitToSection: true,
  autoScrolling: true,
  loopBottom: false,

  // 滚动到对应屏 → 触发动画
  afterLoad: function(origin, destination){
    let currentSection = destination.item;
    let animateEl = currentSection.querySelector('[data-animate]');
    let animateName = animateEl.getAttribute('data-animate');
    animateEl.classList.add('animate__animated', `animate__${animateName}`);
  },

  // 离开屏 → 移除动画
  onLeave: function(origin, destination){
    let animateEl = origin.item.querySelector('[data-animate]');
    let animateName = animateEl.getAttribute('data-animate');
    animateEl.classList.remove('animate__animated', `animate__${animateName}`);
  }
});

// 表单提交交互
document.querySelector('.apply-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('提交成功！我们将尽快与您联系~');
  this.reset();
});
