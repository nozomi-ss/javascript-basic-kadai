// btnというidを持つHTML要素を取得し、定数に代入する
const modBtn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const teXt = document.getElementById('text');

modBtn.addEventListener('click', () => {
  // h2要素を作成する
  const h2 = document.createElement('h2');
  // 作成したh2要素に「ボタンがクリックされました」というテキストを追加する
  text.textContent = 'ボタンがクリックされました';


}); 