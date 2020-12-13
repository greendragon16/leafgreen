/*LÓGICA GERAL DO JOGO
O jogo consiste em uma tela de início, uma com as instruções e dificuldades, cinco telas de perguntas com as alternativas (apenas uma correta, na qual o jogador deverá escolhe-la), e tela de fim de jogo contendo a pontuação e créditos. Também tem telas de resultados entre as alternativas, informando ao jogador se ele acertou ou errou. 
Na tela inicial tem um botão para começar o jogo assim que clicado, também tem o nome e uma imagem de uma floresta.
Jogo terá 5 questões com 3 alternativas (cada com um botão para clicar) e apenas uma dela será acerta. E cada uma desse perguntas é sobre uma parte da planta, no caso as principais. São elas: a raiz, a flor, a folha, o caule e o fruto. 
A segunda tela do jogo corresponde a instruções e as dificuldades do jogo. Cada uma delas terá uma pequena informação do lado. Fácil: Até acertar, Normal: Tem 3 vidas e na Difícil: Não pode errar.
Na dificuldade fácil o jogador não perde o jogo, vai tentando a até acertar. Quando errar a questão mudará de tela informando que errou e que pode tentar novamente. E quando acertar também mostrará que acertou e que pode continuar. E no final ganhará 100 pontos para cada questão.
No normal o jogador tem o risco de perde, já que ele vai ter 3 vidas, no mesmo modo do fácil, ele será informado se acertou ou errou, mas quando errar perderá uma vida. Aqui a pontuação é mais alta, já que para cada questão ganhará 250 pontos, mais 250 pontos para cada vida sobrando no final, assim poderá fazer até 2000 pontos. Se perder todas as vidas, é game over e sem pontuação.
Na difícil o jogador tem apenas 1 vida, quando acertada a resposta, vai ser informado e que pode prosseguir, mas se errar já era, fim de jogo, e não terá pontuação. Mas se conseguir terminar a pontuação e bem alta, 1000 pontos para cada questão ficando assim com 5000 pontos. 
Jogo conterá duas telas finais, uma de “perdeu o jogo” e outra se conseguir ‘terminar’. Na tela “perdeu o jogo” mostrará que perdeu o jogo porque acabou as vidas ou vida (na difícil) e dois botões um para o inicio do jogo o e outro para os créditos. E na tela de créditos tem o nome no programador e o professor, e um botão para ir pro início do game.




JODIR COSTA 
TURMA: T03
JOGO: LEAF GREEN
VIDEO: https://youtu.be/6N--Syr7ZNQ

*/


var cont = 0 
var largura = 150
var altura = 50
var tela = 1
var vida = 3
var cena =0
var i=1

let imgMenu
let imgRegras
let img=[i]
let song

function preload() {
  song = loadSound('Fly.mp3')
  imgMenu = loadImage('menu.png');
  imgRegras = loadImage('regras.png')
 
  for(i=1;i<=5;i++){
    img[i]=loadImage('fase0'+i+'.png')  }
    
}


function setup() {
  song.loop()
  createCanvas(600,600);
   
 }
 


function draw(){
  
  
  if(tela==1){
   
    cena=0
    pontos=0
    contc=0
    vida=3
    menu();
    
  }
  if(tela==19){
     regras()
  
  }
  if(cena==1){
     for(;contc<1;contc++){ /*aqui ta repetindo uma vez*/
    pontos=0
    tela=tela-17
    vida=0
    }
    facil()
  }
  if(cena==2){
    for(;contc<1;contc++){
    pontos=0
    tela=tela-17
    vida=3
    }
    normal()
  }
  if(cena==3){
    for(;contc<1;contc++){
    pontos=-250
    tela=tela-17
    vida=1
    }
    dificil()
  }
}

function facil(){  
  if(tela==2){
    cont=0
    fase1();
  }
  if(tela==3){
    resultado1();
   pontosF()
    
  }
  if(tela==4){
    resultado2();
    acontece()
  
   
  }
  if(tela==5){
    cont=0
    fase2();
  }
  if(tela==6){
    resultado3()
     pontosF()
  }
  if(tela==7){
    resultado4()
    acontece()
   
  }
  if(tela==8){
    cont=0
    fase3()
  }
  if(tela==9){
    resultado5()
     pontosF()
  }
  if(tela==10){
    resultado6()
    acontece()
     
  }
  if(tela==11){
    cont=0
    fase4()
  }
  if(tela==12){
    resultado7()
    pontosF()
  }
  if(tela==13){
    resultado8()
    acontece()
     
  }
  if(tela==14){
    cont=0
    fase5()
  }
  if(tela==15){
    resultado9()
    acontece()
     
  }
  if(tela==16){
    
    resultado10()
    pontosF()
  }
  if(tela==18){
    resultado11()
  }
  if(tela==17){
    creditos()
  }


  
  
}
function pontosF(){
  if(cont<1){ 
      pontos=pontos+100
      cont++}
}

function normal(){   
  if(tela==2 && vida>0){
    cont=0
    fase1();
  }
  if(tela==3){
    resultado1();
   while(cont<1){
      pontos=pontos+250
      cont++}
    
  }
  if(tela==4){
    resultado2(); 
    while(cont<1){
      vida=vida-1
      if(vida==0){
        tela=18}
      cont++}
  }
  if(tela==5 && vida>0){
    cont=0
    fase2();
  }
  if(tela==6){
    resultado3()
     while(cont<1){
      pontos=pontos+250
      cont++}
  }
  if(tela==7){
    resultado4()
     while(cont<1){
      vida=vida-1
      if(vida==0){
        tela=18}
      cont++}
  }
  if(tela==8 && vida>0){
    cont=0
    fase3()
  }
  if(tela==9){
    resultado5()
     while(cont<1){
      pontos=pontos+250
      cont++}
  }
  if(tela==10){
    resultado6()
     while(cont<1){
      vida=vida-1
      if(vida==0){
        tela=18}
      cont++}
  }
  if(tela==11 && vida>0){
    cont=0
    fase4()
  }
  if(tela==12){
    resultado7()
     while(cont<1){
      pontos=pontos+250
      cont++}
  }
  if(tela==13){
    resultado8()
     while(cont<1){
      vida=vida-1
      if(vida==0){
        tela=18}
      cont++}
  }
  if(tela==14 && vida>0){
    cont=0
    fase5()
  }
  if(tela==15){
    resultado9()
     while(cont<1){
      vida=vida-1
      if(vida==0){
        tela=18}
      cont++}
  }
  if(tela==16){
    
    resultado10()
     while(cont<1){
      pontos=pontos+250
      cont++}
  }
  if(tela==18){
    resultado11()
  }
  if(tela==17){
    creditos()
  }

}

function dificil(){   
  if(tela==2 && vida>0){
    cont=0
    fase1();
  }
  if(tela==3){
    resultado1();
   while(cont<1){
      pontos=pontos+1000
      cont++}
    
  }
  if(tela==4){
    resultado2(); 
    while(cont<1){
      vida=vida-1
      if(vida==0){
        tela=18}
      cont++}
  }
  if(tela==5 && vida>0){
    cont=0
    fase2();
  }
  if(tela==6){
    resultado3()
     while(cont<1){
      pontos=pontos+1000
      cont++}
  }
  if(tela==7){
    resultado4()
     while(cont<1){
      vida=vida-1
      if(vida==0){
        tela=18}
      cont++}
  }
  if(tela==8 && vida>0){
    cont=0
    fase3()
  }
  if(tela==9){
    resultado5()
     while(cont<1){
      pontos=pontos+1000
      cont++}
  }
  if(tela==10){
    resultado6()
     while(cont<1){
      vida=vida-1
      if(vida==0){
        tela=18}
      cont++}
  }
  if(tela==11 && vida>0){
    cont=0
    fase4()
  }
  if(tela==12){
    resultado7()
     while(cont<1){
      pontos=pontos+1000
      cont++}
  }
  if(tela==13){
    resultado8()
     while(cont<1){
      vida=vida-1
      if(vida==0){
        tela=18}
      cont++}
  }
  if(tela==14 && vida>0){
    cont=0
    fase5()
  }
  if(tela==15){
    resultado9()
     while(cont<1){
      vida=vida-1
      if(vida==0){
        tela=18}
      cont++}
  }
  if(tela==16){
    
    resultado10()
     while(cont<1){
      pontos=pontos+1000
      cont++}
  }
  if(tela==18){
    resultado11()
  }
  if(tela==17){
    creditos()
  }

}

function menu()   {
   
  
  
 
  background(imgMenu);
           

 
  
  
  
  x1=140
  y1=400
  textSize(40);
  fill (200, 200, 200);
  rect(x1+40,y1-330, largura+70, altura,15);
  fill (0, 100, 0);
  text ("Leaf Green", 190, 110);
    
  textSize(20);
  fill (100, 100, 0);
  rect(x1,y1, largura+130, altura,15)
  fill(0)
  text ("CLIQUE AQUI PARA INICIAR", x1+10, y1+30)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+130 && mouseY> y1&& mouseY<y1 +altura){
     stroke(0)
     rect(x1,y1, largura+130, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        tela=19
  
  }}
  noStroke(200)
  text ("CLIQUE AQUI PARA INICIAR", x1+10, y1+30 )
}

function regras(){
  background(imgRegras);
  
  x1=70
  y1=205
  
  /*facil*/
  
  textSize(30);
  fill (100, 100, 0);
  rect(x1,y1, largura+10, altura,15)
  fill(0)
  text ("FÁCIL", x1+10, y1+35)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+10 && mouseY> y1&& mouseY<y1 +altura){
     stroke(0)
     rect(x1,y1, largura+10, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        cena=1
  
  }}
  noStroke(200)
  text ("FÁCIL", x1+10, y1+35 )
  
  /*normal*/
  
  textSize(30);
  fill (100, 100, 0);
  rect(x1,y1+95, largura+10, altura,15)
  fill(0)
  text ("NORMAL", x1+10, y1+130)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+10 && mouseY> y1+95 && mouseY<y1+95 +altura){
     stroke(0)
     rect(x1,y1+95, largura+10, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        cena=2
  
  }}
  noStroke(200)
  text ("NORMAL", x1+10, y1+130 )
  
  /*dificil*/
  
  textSize(30);
  fill (100, 100, 0);
  rect(x1,y1+195, largura+10, altura,15)
  fill(0)
  text ("DIFÍCIL", x1+10, y1+230)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+10 && mouseY> y1+195 && mouseY<y1+195 +altura){
     stroke(0)
     rect(x1,y1+195, largura+10, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        cena=3
  
  }}
  noStroke(200)
  text ("DIFÍCIL", x1+10, y1+230 )
  
}
           
function fase1(){
  
    background(img[1])
  
  


  letraA1()
  letraB1()
  letraC1()
 
  
  
  
  fill (200, 190, 190)
  rect(10,105, 152, 40,0)
  textSize(30);
  fill (10, 50, 10)
  text("VIDA(S):"+vida,20,135)
 
 
  
}

function letraA1(){
  x1=20
  y1=520
    
  textSize(30);
  fill (100, 100, 0);
  rect(x1,y1, largura, altura,15)
  fill(0)
  text ("a) Folhas", x1+10, y1+30)
 
  
  
if(mouseX>x1 && mouseX< x1 + largura && mouseY> y1&& mouseY<y1 +altura){
  stroke(0)
  rect(x1,y1, largura, altura,15)
  fill(100,222,145)
  if(mouseIsPressed)
    tela=3
  
  }
   
  noStroke(200)
  text ("a) Folhas", x1+10, y1+30)
  
  
}
function letraB1(){
  x2=225
  y1=520
    
  textSize(30);
  fill (100, 100, 0);
  rect(x2,y1, largura, altura,15)
  fill(0)
  text ("b) Caule", x2+10, y1+30)
 
  
  
if(mouseX>x2 && mouseX< x2 + largura && mouseY> y1&& mouseY<y1 +altura){
  stroke(0)
  rect(x2,y1, largura, altura,15)
  fill(100,222,145)
  if(mouseIsPressed){
    tela=4
  }}
   
  noStroke(200)
  text ("b) Caule", x2+10, y1+30)
  
  
}
function letraC1(){
  x3=430
  y1=520
    
  textSize(30);
  fill (100, 100, 0);
  rect(x3,y1, largura, altura,15)
  fill(0)
  text ("c) Fruto", x3+10, y1+30) 
if(mouseX>x3 && mouseX< x3 + largura && mouseY> y1&& mouseY<y1 +altura){
  stroke(0)
  rect(x3,y1, largura, altura,15)
  fill(100,222,145)
  if(mouseIsPressed){
    tela=4
  }}
   
  noStroke(200)
  text ("c) Fruto", x3+10, y1+30)
  
  
}

function fase2(){
  
  background(img[2]);
  
  fill (200, 190, 190)
  rect(10,105, 152, 40,0)
  textSize(30);
  fill (10, 50, 10)
  text("VIDA(S):"+vida,20,135)
  
  
  
  letra2A();
  letra2B();
  letra2C();
}

function letra2A(){
  x1=20
  y1=520
    
  textSize(30);
  fill (100, 100, 0);
  rect(x1,y1, largura, altura,15)
  fill(0)
  text ("a) Raizes", x1+10, y1+30)
 
  
  
if(mouseX>x1 && mouseX< x1 + largura && mouseY> y1&& mouseY<y1 +altura){
  stroke(0)
  rect(x1,y1, largura, altura,15)
  fill(100,222,145)
  if (mouseIsPressed) {
    if (mouseButton === LEFT){
    tela=7
    }
  }}
   
  noStroke(200)
  text ("a) Raizes", x1+10, y1+30)
  
  
}
function letra2B(){
  x2=225
  y1=520
    
  textSize(30);
  fill (100, 100, 0);
  rect(x2,y1, largura, altura,15)
  fill(0)
  text ("b) Caule", x2+10, y1+30)
 
  
  
if(mouseX>x2 && mouseX< x2 + largura && mouseY> y1&& mouseY<y1 +altura){
  stroke(0)
  rect(x2,y1, largura, altura,15)
  fill(100,222,145)
  if (mouseIsPressed) 
  {
    tela=7
  }
  }
   
  noStroke(200)
  text ("b) Caule", x2+10, y1+30)
  
  
}
function letra2C(){
  x3=430
  y1=520
    
  textSize(30);
  fill (100, 100, 0);
  rect(x3,y1, largura, altura,15)
  fill(0)
  text ("c) Frutos", x3+10, y1+30)
 
  
  
if(mouseX>x3 && mouseX< x3 + largura && mouseY> y1&& mouseY<y1 +altura){
  stroke(0)
  rect(x3,y1, largura, altura,15)
  fill(100,222,145)
  if (mouseIsPressed){
    tela=6}
  }
   
  noStroke(200)
  text ("c) Frutos", x3+10, y1+30)
  
  
}
    
function fase3(){
  
 background(img[3]);
  
   fill (200, 190, 190)
  rect(10,105, 152, 40,0)
  textSize(30);
  fill (10, 50, 10)
  text("VIDA(S):"+vida,20,135)
  
  
  
  letra3A()
  letra3B()
  letra3C()
}

function letra3A(){
  x1=20
  y1=520
    
  textSize(30);
  fill (100, 100, 0);
  rect(x1,y1, largura, altura,15)
  fill(0)
  text ("a) Caule", x1+10, y1+30)
 
  
  
if(mouseX>x1 && mouseX< x1 + largura && mouseY> y1&& mouseY<y1 +altura){
  stroke(0)
  rect(x1,y1, largura, altura,15)
  fill(100,222,145)
  if(mouseIsPressed){
    tela=9
  
  }}
   
  noStroke(200)
  text ("a) Caule", x1+10, y1+30)
  
  
}
function letra3B(){
  x2=225
  y1=520
    
  textSize(30);
  fill (100, 100, 0);
  rect(x2,y1, largura, altura,15)
  fill(0)
  text ("b) Flores", x2+10, y1+30)
 
  
  
if(mouseX>x2 && mouseX< x2 + largura && mouseY> y1&& mouseY<y1 +altura){
  stroke(0)
  rect(x2,y1, largura, altura,15)
  fill(100,222,145)
  if(mouseIsPressed){
    tela=10
  }}
   
  noStroke(200)
  text ("b) Flores", x2+10, y1+30)
  
  
}
function letra3C(){
  x3=430
  y1=520
    
  textSize(30);
  fill (100, 100, 0);
  rect(x3,y1, largura, altura,15)
  fill(0)
  text ("c) Fruto", x3+10, y1+30)
 
  
  
if(mouseX>x3 && mouseX< x3 + largura && mouseY> y1&& mouseY<y1 +altura){
  stroke(0)
  rect(x3,y1, largura, altura,15)
  fill(100,222,145)
  if(mouseIsPressed){
    tela=10
  }}
   
  noStroke(200)
  text ("c) Fruto", x3+10, y1+30)
  
  
}

function fase4(){
  
   background(img[4]);
  
   fill (200, 190, 190)
  rect(10,105, 152, 40,0)
  textSize(30);
  fill (10, 50, 10)
  text("VIDA(S):"+vida,20,135)
  
  
  
  letraA4()
  letraB4()
  letraC4()
} 

function letraA4(){
  x1=20
  y1=520
    
  textSize(30);
  fill (100, 100, 0);
  rect(x1,y1, largura, altura,15)
  fill(0)
  text ("a) Raizes", x1+10, y1+30)
 
  
  
if(mouseX>x1 && mouseX< x1 + largura && mouseY> y1&& mouseY<y1 +altura){
  stroke(0)
  rect(x1,y1, largura, altura,15)
  fill(100,222,145)
  if(mouseIsPressed){
    tela=13
  
  }}
   
  noStroke(200)
  text ("a) Raizes", x1+10, y1+30)
  
  
}
function letraB4(){
  x2=225
  y1=520
    
  textSize(30);
  fill (100, 100, 0);
  rect(x2,y1, largura, altura,15)
  fill(0)
  text ("b) Flores", x2+10, y1+30)
 
  
  
if(mouseX>x2 && mouseX< x2 + largura && mouseY> y1&& mouseY<y1 +altura){
  stroke(0)
  rect(x2,y1, largura, altura,15)
  fill(100,222,145)
  if(mouseIsPressed){
    tela=12
  }}
   
  noStroke(200)
  text ("b) Flores", x2+10, y1+30)
  
  
}
function letraC4(){
  x3=430
  y1=520
    
  textSize(30);
  fill (100, 100, 0);
  rect(x3,y1, largura, altura,15)
  fill(0)
  text ("c) Fruto", x3+10, y1+30) 
if(mouseX>x3 && mouseX< x3 + largura && mouseY> y1&& mouseY<y1 +altura){
  stroke(0)
  rect(x3,y1, largura, altura,15)
  fill(100,222,145)
  if(mouseIsPressed){
    tela=13
  }}
   
  noStroke(200)
  text ("c) Fruto", x3+10, y1+30)
  
  
}

function fase5(){
  
  background(img[5]);     
  
  fill (200, 190, 190)
  rect(10,105, 152, 40,0)
  textSize(30);
  fill (10, 50, 10)
  text("VIDA(S):"+vida,20,135)
  
  
  
  letraA5()
  letraB5()
  letraC5()
}
  
function letraA5(){
  x1=20
  y1=520
    
  textSize(30);
  fill (100, 100, 0);
  rect(x1,y1, largura, altura,15)
  fill(0)
  text ("a) Frutos", x1+10, y1+30)
 
  
  
if(mouseX>x1 && mouseX< x1 + largura && mouseY> y1&& mouseY<y1 +altura){
  stroke(0)
  rect(x1,y1, largura, altura,15)
  fill(100,222,145)
  if(mouseIsPressed){
    tela=15
  
  }}
   
  noStroke(200)
  text ("a) Frutos", x1+10, y1+30)
  
  
}
function letraB5(){
  x2=225
  y1=520
    
  textSize(30);
  fill (100, 100, 0);
  rect(x2,y1, largura, altura,15)
  fill(0)
  text ("b) Caule", x2+10, y1+30)
 
  
  
if(mouseX>x2 && mouseX< x2 + largura && mouseY> y1&& mouseY<y1 +altura){
  stroke(0)
  rect(x2,y1, largura, altura,15)
  fill(100,222,145)
  if(mouseIsPressed){
    tela=15
  }}
   
  noStroke(200)
  text ("b) Caule", x2+10, y1+30)
  
  
}
function letraC5(){
  x3=430
  y1=520
    
  textSize(30);
  fill (100, 100, 0);
  rect(x3,y1, largura, altura,15)
  fill(0)
  text ("c) Raízes", x3+10, y1+30)
  
if(mouseX>x3 && mouseX< x3 + largura && mouseY> y1&& mouseY<y1 +altura){
  stroke(0)
  rect(x3,y1, largura, altura,15)
  fill(100,222,145)
  if(mouseIsPressed){
    tela=16
  }}
   
  noStroke(200)
  text ("c) Raízes", x3+10, y1+30)
  
  
}


function resultado1()   {
  background(220, 250, 220);
  x1=140
  y1=400
  textSize(40);
  fill (200, 200, 200);
  rect(x1,y1-350, largura+200, altura,15);
  fill (0, 100, 0);
  text ("VOCÊ ACERTOU!", 150, 90);
    
  textSize(20);
  fill (100, 100, 0);
  rect(x1,y1, largura+200, altura,15)
  fill(0)
  text ("CLIQUE AQUI PARA CONTINUAR", x1+10, y1+30)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+200 && mouseY> y1&& mouseY<y1 +altura){
     stroke(0)
     rect(x1,y1, largura+200, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        tela=5
  
  }}
  noStroke(200)
  text ("CLIQUE AQUI PARA CONTINUAR", x1+10, y1+30)
}
function resultado2()   {
  background(220, 250, 220);
  x1=140
  y1=400
  
  textSize(40);
  fill (200, 200, 200);
  rect(x1,y1-230, largura+200, altura,15);
  fill (0, 100, 0);
  text ("PERDEU 1 VIDA", 170, 210);
  
  textSize(40);
  fill (200, 200, 200);
  rect(x1,y1-350, largura+200, altura,15);
  fill (0, 100, 0);
  text ("VOCÊ ERROU!", 170, 90);
    
  textSize(20);
  fill (100, 100, 0);
  rect(x1,y1, largura+220, altura,15)
  fill(0)
  text ("CLIQUE AQUI E TENTE NOVAMENTE", x1+10, y1+30)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+220 && mouseY> y1&& mouseY<y1 +altura){
     stroke(0)
     rect(x1,y1, largura+220, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        tela=2
  
  }}
  noStroke(200)
  text ("CLIQUE AQUI E TENTE NOVAMENTE", x1+10, y1+30)
}
function resultado3()   {
 background(220, 250, 220);
  x1=140
  y1=400
  textSize(40);
  fill (200, 200, 200);
  rect(x1,y1-350, largura+200, altura,15);
  fill (0, 100, 0);
  text ("VOCÊ ACERTOU!", 150, 90);
    
  textSize(20);
  fill (100, 100, 0);
  rect(x1,y1, largura+200, altura,15)
  fill(0)
  text ("CLIQUE AQUI PARA CONTINUAR", x1+10, y1+30)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+200 && mouseY> y1&& mouseY<y1 +altura){
     stroke(0)
     rect(x1,y1, largura+200, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        tela=8
  
  }}
  noStroke(200)
  text ("CLIQUE AQUI PARA CONTINUAR", x1+10, y1+30)
}
function resultado4()   {
  background(220, 250, 220);
  x1=140
  y1=400
  
  textSize(40);
  fill (200, 200, 200);
  rect(x1,y1-230, largura+200, altura,15);
  fill (0, 100, 0);
  text ("PERDEU 1 VIDA", 170, 210);
  
  textSize(40);
  fill (200, 200, 200);
  rect(x1,y1-350, largura+200, altura,15);
  fill (0, 100, 0);
  text ("VOCÊ ERROU!", 170, 90);
    
  textSize(20);
  fill (100, 100, 0);
  rect(x1,y1, largura+220, altura,15)
  fill(0)
  text ("CLIQUE AQUI E TENTE NOVAMENTE", x1+10, y1+30)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+220 && mouseY> y1&& mouseY<y1 +altura){
     stroke(0)
     rect(x1,y1, largura+220, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        tela=5
  
  }}
  noStroke(200)
  text ("CLIQUE AQUI E TENTE NOVAMENTE", x1+10, y1+30)
}
function resultado5()   {
  background(220, 250, 220);
  x1=140
  y1=400
  textSize(40);
  fill (200, 200, 200);
  rect(x1,y1-350, largura+200, altura,15);
  fill (0, 100, 0);
  text ("VOCÊ ACERTOU!", 150, 90);
    
  textSize(20);
  fill (100, 100, 0);
  rect(x1,y1, largura+200, altura,15)
  fill(0)
  text ("CLIQUE AQUI PARA CONTINUAR", x1+10, y1+30)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+200 && mouseY> y1&& mouseY<y1 +altura){
     stroke(0)
     rect(x1,y1, largura+200, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        tela=11
  
  }}
  noStroke(200)
  text ("CLIQUE AQUI PARA CONTINUAR", x1+10, y1+30)
}
function resultado6()   {
  background(220, 250, 220);
  x1=140
  y1=400
  
  textSize(40);
  fill (200, 200, 200);
  rect(x1,y1-230, largura+200, altura,15);
  fill (0, 100, 0);
  text ("PERDEU 1 VIDA", 170, 210);
  
  textSize(40);
  fill (200, 200, 200);
  rect(x1,y1-350, largura+200, altura,15);
  fill (0, 100, 0);
  text ("VOCÊ ERROU!", 170, 90);
    
  textSize(20);
  fill (100, 100, 0);
  rect(x1,y1, largura+220, altura,15)
  fill(0)
  text ("CLIQUE AQUI E TENTE NOVAMENTE", x1+10, y1+30)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+220 && mouseY> y1&& mouseY<y1 +altura){
     stroke(0)
     rect(x1,y1, largura+220, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        tela=8
  
  }}
  noStroke(200)
  text ("CLIQUE AQUI E TENTE NOVAMENTE", x1+10, y1+30)
}
function resultado7()   {
  background(220, 250, 220);
  x1=140
  y1=400
  textSize(40);
  fill (200, 200, 200);
  rect(x1,y1-350, largura+200, altura,15);
  fill (0, 100, 0);
  text ("VOCÊ ACERTOU!", 150, 90);
    
  textSize(20);
  fill (100, 100, 0);
  rect(x1,y1, largura+200, altura,15)
  fill(0)
  text ("CLIQUE AQUI PARA CONTINUAR", x1+10, y1+30)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+200 && mouseY> y1&& mouseY<y1 +altura){
     stroke(0)
     rect(x1,y1, largura+200, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        tela=14
  
  }}
  noStroke(200)
  text ("CLIQUE AQUI PARA CONTINUAR", x1+10, y1+30)
}
function resultado8()   {
  background(220, 250, 220);
  x1=140
  y1=400
  
  textSize(40);
  fill (200, 200, 200);
  rect(x1,y1-230, largura+200, altura,15);
  fill (0, 100, 0);
  text ("PERDEU 1 VIDA", 170, 210);
  
  textSize(40);
  fill (200, 200, 200);
  rect(x1,y1-350, largura+200, altura,15);
  fill (0, 100, 0);
  text ("VOCÊ ERROU!", 170, 90);
    
  textSize(20);
  fill (100, 100, 0);
  rect(x1,y1, largura+220, altura,15)
  fill(0)
  text ("CLIQUE AQUI E TENTE NOVAMENTE", x1+10, y1+30)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+220 && mouseY> y1&& mouseY<y1 +altura){
     stroke(0)
     rect(x1,y1, largura+220, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        tela=11
  
  }}
  noStroke(200)
  text ("CLIQUE AQUI E TENTE NOVAMENTE", x1+10, y1+30)
}
function resultado9()   {
  background(220, 250, 220);
  x1=140
  y1=400
  
  textSize(40);
  fill (200, 200, 200);
  rect(x1,y1-230, largura+200, altura,15);
  fill (0, 100, 0);
  text ("PERDEU 1 VIDA", 170, 210);
  
  textSize(40);
  fill (200, 200, 200);
  rect(x1,y1-350, largura+200, altura,15);
  fill (0, 100, 0);
  text ("VOCÊ ERROU!", 170, 90);
    
  textSize(20);
  fill (100, 100, 0);
  rect(x1,y1, largura+220, altura,15)
  fill(0)
  text ("CLIQUE AQUI E TENTE NOVAMENTE", x1+10, y1+30)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+220 && mouseY> y1&& mouseY<y1 +altura){
     stroke(0)
     rect(x1,y1, largura+220, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        tela=14
  
  }}
  noStroke(200)
  text ("CLIQUE AQUI E TENTE NOVAMENTE", x1+10, y1+30)
}
function resultado10()   {
  background(200, 250, 200);
  x1=140
  y1=300
  pontosTotal=pontos+(250*vida)
  
  textSize(40);
  fill (200, 200, 200);
  rect(x1-10,y1-230, largura+220, altura,15);
  fill (0, 100, 0);
  text ("VOCÊ TERMINOU!", 140, 110);
   
  textSize(40);
  fill (200, 200, 200);
  rect(x1-10,y1-130, largura+220, altura,15);
  fill (0, 100, 0);
  text ("PONTUAÇÃO: "+pontosTotal, 140, 210);
    
  
  textSize(20);
  fill (100, 100, 100);
  rect(x1,y1+100, largura+150, altura,15)
  fill(0)
  text ("CRÉDITOS", x1+10, y1+130)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+150 && mouseY> y1+100&& mouseY<y1+100 +altura){
     stroke(0)
     rect(x1,y1+100, largura+150, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        tela=17
  
  }}
  noStroke(200)
  text ("CRÉDITOS", x1+10, y1+130)
  
  
  textSize(20);
  fill (100, 100, 100);
  rect(x1,y1, largura+150, altura,15)
  fill(0)
  text ("CLIQUE AQUI PARA O MENU", x1+10, y1+30)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+150 && mouseY> y1&& mouseY<y1 +altura){
     stroke(0)
     rect(x1,y1, largura+150, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        tela=1
  
  }}
  noStroke(200)
  text ("CLIQUE AQUI PARA O MENU", x1+10, y1+30)
}
function resultado11()   {
  background(200, 250, 200);
  x1=140
  y1=300
  
  textSize(40);
  fill (200, 200, 200);
  rect(x1-10,y1-230, largura+220, altura,15);
  fill (0, 100, 0);
  text ("VOCÊ PERDEU!", 140, 110);
  
  textSize(40);
  fill (200, 200, 200);
  rect(x1-10,y1-150, largura+240, altura,15);
  fill (0, 100, 0);
  text ("ACABOU AS VIDAS!", x1-10,y1-110);
    
  
  textSize(20);
  fill (100, 100, 100);
  rect(x1,y1+100, largura+150, altura,15)
  fill(0)
  text ("CRÉDITOS", x1+10, y1+130)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+150 && mouseY> y1+100&& mouseY<y1+100 +altura){
     stroke(0)
     rect(x1,y1+100, largura+150, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        tela=17
  
  }}
  noStroke(200)
  text ("CRÉDITOS", x1+10, y1+130)
  
  
  textSize(20);
  fill (100, 100, 100);
  rect(x1,y1, largura+150, altura,15)
  fill(0)
  text ("CLIQUE AQUI PARA O MENU", x1+10, y1+30)
 
  
  
  if(mouseX>x1 && mouseX< x1 + largura+150 && mouseY> y1&& mouseY<y1 +altura){
     stroke(0)
     rect(x1,y1, largura+150, altura,15)
     fill(100,222,145)
     if(mouseIsPressed){
        tela=1
  
  }}
  noStroke(200)
  text ("CLIQUE AQUI PARA O MENU", x1+10, y1+30)
}
function acontece(){
  textSize(40)
  fill (200, 200, 200);
  rect(x1,y1-230, largura+200, altura,15);
  fill (0, 100, 0);
  text ("ACONTECE! :(", 170, 210);
}
function creditos(){
  x3=430
  y1=520
  background(100, 220, 200)
  textSize(40);
  fill (200, 200, 200);
  rect(90,65, largura+220, altura,15);
  fill (0, 100, 0);
  text ("CRÉDITOS!", 140, 110);
  
  textSize(30);
  fill (0, 30, 0);
  text ("PROGRAMADOR: JODIR COSTA", 50, 200);
  text ("EDUCADOR: EUDES GOMES", 50, 300);
  
  textSize(30);
  fill (100, 100, 100);
  rect(x3,y1, largura, altura,15)
  fill(0)
  text ("MENU", x3+10, y1+30) 
if(mouseX>x3 && mouseX< x3 + largura && mouseY> y1&& mouseY<y1 +altura){
  stroke(0)
  rect(x3,y1, largura, altura,15)
  fill(100,222,145)
  if(mouseIsPressed){
    tela=1
  }}
   
  noStroke(200)
  text ("MENU", x3+10, y1+30)
}