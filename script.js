// 生成
function createSakura() {
  const sakura = document.createElement('div');
  sakura.classList.add('sakura-petal');
  
  // 設定
  const startX = Math.random() * window.innerWidth;
  const duration = Math.random() * 4 + 3;
  const size = Math.random() * 20 + 10;

  sakura.style.left = `${startX}px`;
  sakura.style.animationDuration = `${duration}s`;
  sakura.style.animationDelay = `${Math.random() * 5}s`;
  sakura.style.width = `${size}px`;
  sakura.style.height = `${size}px`;

  document.body.appendChild(sakura);

  // 削除処理
  sakura.addEventListener('animationend', () => {
    sakura.remove();
  });
}

// 生成処理
setInterval(createSakura, 100);
