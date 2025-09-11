
/*
  Create Senryu System by @dragon_sub Copyright (C) 2025 dragon_sub
*/



var wasteWords = [
  "varを使って何が悪い!",
  "石と意思が充実した毎日が幸せのカギ",
  "これであと10年は戦える！ー匿名Sさん",
  "marqeeタグを使いまくれ！！",
  "エディター?男ならメモ帳一択だ！",
  "男ならアセンブリだ！",
  "SETP4 プルトニウムから出る放射線をベリリウムで反射させます",
  "バナナのDNAはおいしい　と動物園のゴリラ",
  "ついにアイデアが尽きた",
  "珍しいものを使わなくても茶色かったらだいたいうまい",
  "Malbolgeは1998年にBen Olmsteadによって開発された、パブリックドメインの難解プログラミング言語である　名前は、ダンテの神曲地獄篇における地獄の第8圏であるマーレボルジェ(Malebolge)にちなんで名付けられた　Malbolgeはチューリング完全であるが、実用言語ではない　Malbolgeの異常な点は、最悪の、すなわち最も扱いにくく難解であるプログラミング言語となるべく設計されたことである　MalbolgeはINTERCAL、機械語、Brainfuckの最悪な部分を組み合わせたものであるという　しかし、理解を困難にするために用いたトリックのいくつかはごく単純化することができる　仮想マシンは59,049 (310) のメモリ空間を持ち、それぞれ10桁の三進数を格納することができる　各メモリ空間には0から59048までのメモリアドレスが割り当てられ、0から59048までの値をとることができる　この上限を超えてインクリメントした場合、0に戻る　この言語ではデータと命令が同じメモリ空間を使用する　これはx86アーキテクチャなどのハードウェアの仕組みに影響されている　ところで調子どう?",
  "ナノデー",
  "ブルアカは一度やってみるべき",
];

let = senryu[
  ["柿食えば","法隆寺","理論上","フクロウだ","てんぷら粉","@America","おいしいな","遣唐使","消費税","所得税","やりますねぇ","いとをかし","大切な","ハプニング","セル結合","5の精神","新時代","来たぞｺﾚ"],
  ["鐘が鳴るなり","1+1は","誕生日の","ハーブを添えて","暫定税率","罠(トラップ)カード","私の名前も"]
];


onload = function(){
  var ww = document.getElementById("wasteWords");
  ww.textContent = wasteWords[getRandomInt(0,wasteWords.length)];

  let senryu = document.getElementByid("senryu");
  let senryu5 = sentyu[0][getRandomInt(0,senryu[0].length)];
  let senryu7 = sentyu[1][getRandomInt(0,senryu[1].length)];
  let senryu52 = sentyu[0][getRandomInt(0,senryu[0].length)];
  senryu.textContent = senryu5+senryu7+senryu5;
  console.log("貴様ｯ!　見ているなﾂ!");
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 上限は除き、下限は含む
}
