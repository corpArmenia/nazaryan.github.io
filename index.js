/*Ստեղծեք canvas և դրա ներքևում button։
 button էլեմենտը սեղմելիս canvas-ի վրա պետք է ավելանա կլոր 
 օբյեկտ(գնդակ)` կամայական տեղում, կամայական չափի,  որը կշարժվի կամայական ուղղությամբ։ 
 Որպես հավելում, կարող եք փորձել ստեղծել տարբեր գույների կլոր գնդակներ։ 
 Գնդակը պետք է canvas-ի եզրերին հասնելիս փոխի իր ուղղությունը, այնպես, 
 որ միշտ մնա canvas-ի ներսում։ Արդյունքում կունենանք canvas-ի ներսում շարժվող գնդակների փունջ։
 Կարող ենք ավելացնել նոր գնդակներ սեղմելով canvas-ի ներքևի button-ը։  */
 
 const canvas = document.querySelector("canvas");
 const context = canvas.getContext("2d");
 const btn = document.querySelector(".starting");
 const btn2 = document.querySelector(".stoping");
 const ballImg = document.createElement("img");
 ballImg.src ="https://www.transparentpng.com/thumb/ball/b9q1Xn-ball-hd-image.png";
  const btn3 = document.querySelector(".skiping");
  const backgroundImg = document.createElement("img");
   backgroundImg.src = "https://img.freepik.com/premium-photo/soccer-stadium-defocus-background-evening-arena-with-crowd-fans-d-illustration_336913-368.jpg?w=2000";
   const stabAudio = document.createElement("audio");
   stabAudio.src = "http://realmofthemadgod.appspot.com/sfx/button_click.mp3";
   const stopAudio = document.createElement("audio");
   stopAudio.src = "http://orteil.dashnet.org/cookieclicker/snd/click5.mp3";
 let data = {
    balls: []
 }

 function update(){
  
    data.balls.forEach(function(ball){
        ball.update();
    })
   
    };

 

 function draw(){
   context.clearRect(0, 0, canvas.width, canvas.height);
   context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    data.balls.forEach(function(ball){
        ball.draw()
    });
   
 }

 function loop(){
    requestAnimationFrame(loop);
    update();
    draw();
    
 }

 loop();

 function Ball(){
   

   
    this.r = random(10, 40);
   this.x = random(this.r, canvas.width-this.r);
   this.y = random(this.r, canvas.height-this.r);

   
   this.xDelta = random(-5-2, 5);
   this.yDelta = random(-5-2, 5);
   this.update = function(ball){
    if((this.x + this.r) > canvas.width  || 
    this.x - this.r < 0){
       this.xDelta *= -1;
     
    }
    if((this.y + this.r) > canvas.height  || 
    this.y - this.r < 0){
       this.yDelta *= -1;
       
    }
  
        this.x += this.xDelta;
        this.y += this.yDelta;
      
   };
   this.draw = function(){
      
    context.drawImage(ballImg, this.x, this.y, 100, 100);
     
   }

 }

btn.addEventListener("click", function(){
   stabAudio.currentTime = 0;
       stabAudio.play()
    const ball = new Ball;
    data.balls.push(ball);
  
 })
 btn2.addEventListener("click", function(){
   stopAudio.currentTime = 0;
   stopAudio.play()
     update = false;
 })


 function random(min, max){
   return Math.floor(Math.random() * (max-min)) + min;
 }

