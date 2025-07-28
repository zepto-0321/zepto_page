var wasteWords = ["varを使って何が悪い!","石と意思が充実した毎日が幸せのカギ","これであと10年は戦える！ー匿名Sさん","marqeeタグを使いまくれ！！","男ならメモ帳一択だ！","男ならアセンブリだ！","SETP4 プルトニウムから出る放射線をベリリウムで反射させます"];
onload = function(){
  var ww = document.getElementById("wasteWords");
  ww.textContent = wasteWords[getRandomInt(0,wasteWords.length)];
}


function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 上限は除き、下限は含む
}
