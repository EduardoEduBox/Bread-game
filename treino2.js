// Refers to bread UI left-side 
let numeroPaes = document.querySelector(".numero");
let pao = document.querySelector("#pao");
const textoRelato = document.querySelector(".relatos");
let adicional = document.querySelector(".adicional");

const relato = [
  'Yutsuu Faksumi: "com certeza o melhor pão que eu já comprei!"',
  'Singer Faksumi: "olha, sinceramente, eu fiquei em choque de tão gostoso que esse pão consegue ser!"',
  `Aika'Nu: "quando eu descobri sobre esses pães, eu fui imediatamente comprar, e valeu super a pena!"`,
  'Málanus Faksumi: "bom pra PORRA!"',
  'San Majutsu-Shi: "eu me surpreendi com tal sabor, é ótimo pra comer enquanto estuda, dá um gás do caramba!"',
  'Madger Yasáshi: "maluco!!! quando eu provei esses pães, fui bombardeado com uma chuva de sabor, sério, é a única coisa que eu quero comer pra sempre!!!"',
  'Tsúkino Shinji: "esses pães são o conceito mais puro do que chamamos de "sabor perfeito"!"',
  'Himaru Hayasuki: "quando eu provei esses pães, ná hora contei para o Wevy e o Tsúkino, e do mesmo jeito que eu fui para as nuvens só pelo sabor, eles tambem foram"',
  'Hatsúi: "meeeeu, eu acho que a melhor coisa que já aconteceu em toda minha vida foi ter conhecido essa padaria!!!! QUE PARAÍSO!!"',
  'Wevy Kanoraine: "caramba, eu não sou um cara fácil de ganhar, mas esses pães me ganharam pra CARALHO!!!"',
  'Shiba Yakusune: "nossa, eu me surpreendi com esses sabores, ainda bem que o Málanus me contou sobre esse maravilha de padaria!"',
  'Nakishi yato: "noassa muleque, que negócio goxxxtoooso!!"',
];

const formatter = Intl.NumberFormat("pt", { notation: "compact" });
const formatter2 = Intl.NumberFormat("pt");

let cliques = 1;
let calculo = 0;
let count = 1;

function checagem() {
  if (count >= 1000000) {
    numeroPaes.innerHTML = formatter.format(count);
  } else {
    numeroPaes.innerHTML = formatter2.format(count);
  }
}

// Executing the current click variable description to singular and plural (ternary operator)
const valorClick = document.querySelector(".valorClick");
cliques > 1 ? valorClick.innerHTML = `seus cliques valem atualmente ${cliques} pães` : valorClick.innerHTML = `seus cliques valem atualmente ${cliques} pão`;

let index = 0;

function analise() {

  let currentBreadFilter = (currentColor) => {
    return pao.style.filter = `drop-shadow(0vh 0vh 10vh ${currentColor})`;
  }

  // The "plus one" emphatizes the count variable with the click

  switch (count) {
    case 10 + 1:
      currentBreadFilter('red');
      adicional.innerHTML = "Sua padaria está engatinhando!";
      break;

    case 100 + 1:
      currentBreadFilter('lightgreen');
      adicional.innerHTML = "As pessoas estão começando a conhecer sua padaria!";
      break;

    case 500 + 1:
      currentBreadFilter('blue');
      adicional.innerHTML = "Estão começando a falar sobre seus pães na vizinhança!";
      break;

    case 2500 + 1:
      currentBreadFilter('purple');
      adicional.innerHTML = "Seus pães viram notícia em todo vilarejo Uxclavasa!";
      break;

    case 10000 + 1:
      currentBreadFilter('white');
      adicional.innerHTML = "Ázuma agora está infestada de pessoas comprando seus pães!";
      break;

    case 50000 + 1:
      currentBreadFilter('orange');
      adicional.innerHTML = "Seus pães estão sendo comprados agora por todo o reino de Belgadina!";
      break;

    case 250000 + 1:
      currentBreadFilter('lightblue');
      adicional.innerHTML = "Seus pães agora chegam ao paladar de Canáfice!";
      break;

    case 1500000 + 1:
      currentBreadFilter('lightred');
      adicional.innerHTML = "Varios reinos agora conhecem seus pães";
      break;

    case 50000000 + 1:
      currentBreadFilter('white');
      adicional.innerHTML = "O mundo todo agora degusta seus pães!";
      break;
  }
}

setInterval(() => {
  if (index <= relato.length - 1) {
    textoRelato.innerHTML = relato[index];
    index++;
  } else {
    index = 0;
  }
}, 10000);

let estagiário = {
  rende1: 1,
  melhoria1: 0,
  number1: 10,
};

let numeroNpc = document.getElementById("numeroNpc");
let dom = document.querySelector(".number");
let valor1 = document.querySelector(".valor1");
dom.innerHTML = formatter.format(estagiário.number1);
valor1.innerHTML = estagiário.rende1;

function npc() {
  if (count >= estagiário.number1 + 1) {
    count = count - estagiário.number1 - 1;
    estagiário.melhoria1++;
    numeroNpc.innerHTML = estagiário.melhoria1;
    checagem();
    estagiário.number1 += Math.round(estagiário.number1 / 3 / 2);
    dom.innerHTML = formatter.format(estagiário.number1);

    setInterval(() => {
      count += estagiário.rende1;
      checagem();

      analise();
    }, 10000);
  } else {
    alert("você não tem pães o suficiente! Vá trabalhar!");
  }
  upgrades1();
}

let revoltado = {
  rende2: 1,
  melhoria2: 0,
  number2: 150,
};
let numeroFuncionario = document.getElementById("numeroFuncionário");
let dom2 = document.querySelector(".number2");
let valor2 = document.querySelector(".valor2");
dom2.innerHTML = formatter.format(revoltado.number2);

function funcionario() {
  if (count >= revoltado.number2) {
    count = count - revoltado.number2 - 1;
    revoltado.melhoria2++;
    numeroFuncionario.innerHTML = revoltado.melhoria2;
    checagem();
    revoltado.number2 += Math.round(revoltado.number2 / 3 / 2);
    dom2.innerHTML = formatter.format(revoltado.number2);

    setInterval(() => {
      count += revoltado.rende2;
      checagem();

      analise();
    }, 1000);
  } else {
    alert("você não tem pães o suficiente! Vá trabalhar!");
  }
  upgrades3();
}

let rende3 = 10;
let melhoria3 = 0;
let numeroDemonio = document.getElementById("numeroDemonio");
let dom3 = document.querySelector(".number3");
let valor3 = document.querySelector(".valor3");
let number3 = 1500;
dom3.innerHTML = formatter.format(number3);

function demonio() {
  if (count >= number3) {
    count = count - number3 - 1;
    melhoria3++;
    numeroDemonio.innerHTML = melhoria3;
    checagem();
    number3 += Math.round(number3 / 3 / 2);
    dom3.innerHTML = formatter.format(number3);
    valor3.innerHTML = rende3;

    setInterval(() => {
      count += 10;
      checagem();

      analise();
    }, 1000);
  } else {
    alert("você não tem pães o suficiente! Vá trabalhar!");
  }
  upgrades5();
}

let melhoria4 = 0;
let numeroProtagonista = document.getElementById("numeroProtagonista");
let dom4 = document.querySelector(".number4");
let number4 = 15000;
dom4.innerHTML = formatter.format(number4);

function protagonista() {
  if (count >= number4) {
    count = count - number4 - 1;
    melhoria4++;
    numeroProtagonista.innerHTML = melhoria4;
    checagem();
    number4 += Math.round(number4 / 3 / 2);
    dom4.innerHTML = formatter.format(number4);

    setInterval(() => {
      count += 120;
      checagem();

      analise();
    }, 1000);
  } else {
    alert("você não tem pães o suficiente! Vá trabalhar!");
  }
}

let melhoria5 = 0;
let numeroPadeiro = document.getElementById("numeroPadeiro");
let dom5 = document.querySelector(".number5");
let number5 = 200000;
dom5.innerHTML = formatter.format(number5);

function padeiro() {
  if (count >= number5) {
    count = count - number5 - 1;
    melhoria5++;
    numeroPadeiro.innerHTML = melhoria5;
    checagem();
    number5 += Math.round(number5 / 3 / 2);
    dom5.innerHTML = formatter.format(number5);

    setInterval(() => {
      count += 1500;
      checagem();

      analise();
    }, 1000);
  } else {
    alert("você não tem pães o suficiente! Vá trabalhar!");
  }
}

let melhoria6 = 0;
let numeroCalvo = document.getElementById("numeroCalvo");
let dom6 = document.querySelector(".number6");
let number6 = 3000000;
dom6.innerHTML = formatter.format(number6);

function calvo() {
  if (count >= number6) {
    count = count - number6 - 1;
    melhoria6++;
    numeroCalvo.innerHTML = melhoria6;
    checagem();
    number6 += Math.round(number6 / 3 / 2);
    dom6.innerHTML = formatter.format(number6);

    setInterval(() => {
      count += 25000;
      checagem();

      analise();
    }, 1000);
  } else {
    alert("você não tem pães o suficiente! Vá trabalhar!");
  }
}

let melhoria7 = 0;
let numeroApocalipsun = document.getElementById("numeroApocalipsun");
let dom7 = document.querySelector(".number7");
let number7 = 100000000;
dom7.innerHTML = formatter.format(number7);

function apocalipsun() {
  if (count >= number7) {
    count = count - number7 - 1;
    melhoria7++;
    numeroApocalipsun.innerHTML = melhoria7;
    checagem();
    number7 += Math.round(number7 / 3 / 2);
    dom7.innerHTML = formatter.format(number7);

    setInterval(() => {
      count += 400000;
      checagem();

      analise();
    }, 1000);
  } else {
    alert("você não tem pães o suficiente! Vá trabalhar!");
  }
}

// aqui está toda a parte de upgrade, cada div deve ter uma variável vinculada a ela

// função de upgrade dos elementos dentro da div2Mid

function upgrades() {
  // a1
  const a1 = document.getElementById("a1");
  if (calculo == 100) {
    a1.style.display = "block";
  }
}
function upgrades1() {
  // a2
  const a2 = document.getElementById("a2");
  if (estagiário.melhoria1 == 10) {
    a2.style.display = "block";
  }
}
function upgrades2() {
  // a3
  const a3 = document.getElementById("a3");
  if (calculo == 1000) {
    a3.style.display = "block";
  }
}
function upgrades3() {
  // a4
  const a4 = document.getElementById("a4");
  if (revoltado.melhoria2 == 10) {
    a4.style.display = "block";
  }
}
function upgrades4() {
  // a5
  const a5 = document.getElementById("a5");
  if (calculo == 5000) {
    a5.style.display = "block";
  }
}
function upgrades5() {
  // a6
  const a6 = document.getElementById("a6");
  if (melhoria3 == 10) {
    a6.style.display = "block";
  }
}

// aqui acaba

function entrou() {
  pao.style.width = "400px";
}

function clicou() {
  pao.style.width = "450px";
}

// coloquei o eventlistener pq antes o pointerevent não tava pegando kkkk
document.querySelector(".containerPao").addEventListener("click", (e) => {
  checagem();
  count += cliques;
  calculo++;

  analise();
  upgrades();
  upgrades2();
  upgrades3();
  upgrades4();
  upgrades5();

  // valorClick.innerHTML = `seus cliques valem atualmente ${cliques} pães`;

  // creating & defining the coco el
  let coco = document.createElement("div");
  coco.classList.add("coco");
  coco.innerHTML = `<strong>+${cliques}</strong>`;
  document.querySelector(".containerPao").appendChild(coco);

  // positioning the coco el based on the mouse click pos
  coco.style.top = `${e.clientY - 15}px`;
  coco.style.left = `${e.clientX}px`;

  // point animation
  setTimeout(() => {
    coco.style.translate = "0px -100px";
    coco.style.opacity = "0";
    // after the floating point end...
    setTimeout(() => {
      coco.remove();
    }, 500);
  }, 50);
});

function b1() {
  if (count >= 501) {
    a1.remove();
    count -= 500;
    cliques++;
    checagem();
    valorClick.innerHTML = `seus cliques valem atualmente ${cliques} pães`;
  } else {
    alert("TU NÃO TEM OS PÃES MANO, AAAAAAAAAAAAAAAA");
  }
}

function b2() {
  if (count >= 2501) {
    a2.remove();
    count -= 2500;
    estagiário.rende1 += 4;
    valor1.innerHTML = estagiário.rende1;
    checagem();
  } else {
    alert("TU NÃO TEM OS PÃES MANO, AAAAAAAAAAAAAAAA");
  }
}

function b3() {
  if (count >= 10001) {
    a3.remove();
    count -= 10000;
    cliques += 3;
    checagem();
    valorClick.innerHTML = `seus cliques valem atualmente ${cliques} pães`;
  } else {
    alert("TU NÃO TEM OS PÃES MANO, AAAAAAAAAAAAAAAA");
  }
}

function b4() {
  if (count >= 20001) {
    a4.remove();
    count -= 20000;
    revoltado.rende2 += 4;
    revoltado.valor2.innerHTML = revoltado.rende2;
    checagem();
  } else {
    alert("TU NÃO TEM OS PÃES MANO, AAAAAAAAAAAAAAAA");
  }
}

function b5() {
  if (count >= 50001) {
    a5.remove();
    count -= 50000;
    cliques += 8;
    checagem();
    valorClick.innerHTML = `seus cliques valem atualmente ${cliques} pães`;
  } else {
    alert("TU NÃO TEM OS PÃES MANO, AAAAAAAAAAAAAAAA");
  }
}

function b6() {
  if (count >= 250001) {
    a6.remove();
    count -= 250000;
    rende3 += 40;
    valor3.innerHTML = rende3;
    checagem();
  } else {
    alert("TU NÃO TEM OS PÃES MANO, AAAAAAAAAAAAAAAA");
  }
}
