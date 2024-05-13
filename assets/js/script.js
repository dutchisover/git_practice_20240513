//ローディング
// ローディング
const loading = document.querySelector('.loading');
// 読み込みが完了したら
window.addEventListener('load', () => {
  loading.classList.add('is-hide');
});

// ハンバーガーメニュー
const navButton = document.querySelector('.nav_button');
const navCloseButton = document.querySelector('.nav_button-close');
const header = document.querySelector('header');

function navOpen() {
  header.classList.toggle('is-open');
}
function navClose() {
  header.classList.remove('is-open');
}

navButton.addEventListener('click', () => {
  navOpen();
});

navCloseButton.addEventListener('click', () => {
  navClose();
});
