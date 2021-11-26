 
  // intialize require dom element
//  const section = document.querySelectorAll('section');
//  const playercount= document.querySelectorAll('.playercount');
//   const  palyernumber= 10;

// playercount.textContent = playercount;
const section = document.querySelector("section");
const playercount = document.querySelector("span");
let  palyernumber = 4;
playercount.textContent = palyernumber;
 

 // get data that is picture
//  function getData =()=>{[



//      {imgsrc:"./memoryCardflipflop/image/pexels-anastasia-shuraeva-5705503.jpg",name:""}



//   ] }

// array of object
const getData=()=>[


 {imagsrc:"./image/one.jpg" ,name:"one"},
 {imagsrc:"./image/eight.jpg" ,name:"one"},
 {imagsrc:"./image/eighteen.jpg" ,name:"two"},
 {imagsrc:"./image/eleven.jpg" ,name:"three"},
 {imagsrc:"./image/fiften.jpg" ,name:" four"},
 {imagsrc:"./image/seven.jpg" ,name:"five"},
 {imagsrc:"./image/one.jpg" ,name:"one"},
 {imagsrc:"./image/eight.jpg" ,name:"one"},
 {imagsrc:"./image/eighteen.jpg" ,name:"two"},
 {imagsrc:"./image/eleven.jpg" ,name:"three"},
 {imagsrc:"./image/fiften.jpg" ,name:" four"},
 {imagsrc:"./image/seven.jpg" ,name:"five"},
 {imagsrc:"./image/six.jpg" ,name:" six"},
 {imagsrc:"./image/three.jpg" ,name:"seven"},
 {imagsrc:"./image/twenty.jpg" ,name:"eight"},
 {imagsrc:"./image/ten.jpg" ,name:"nine"},
 {imagsrc:"./image/two.jpg" ,name:"ten"},
 {imagsrc:"./image/six.jpg" ,name:" six"},
 {imagsrc:"./image/three.jpg" ,name:"seven"},
 {imagsrc:"./image/twenty.jpg" ,name:"eight"},
 




];


// ramdom-mize function 
const randomize=()=>{
     

    const cardData = getData();
    cardData.sort(()=>Math.random()-0.5);
       return cardData;
};

// card generator
const cardGenarator=()=>{
 
     const createCard = randomize();

     createCard.forEach((iteam)=> {
           const card = document.createElement('div');
           const face = document.createElement('img');
           const back = document.createElement('div');
              // adding clss  to  create all element


               card.classList="card";
               face.classList ="face";
               back.classList = "back";
               // adding element on section 
                //   section.appendChild(card);
                //  section.appendChild(face);
                //   section.appendChild(back);
                  // addding image to face elememt
                  section.appendChild(card);
                  card.appendChild(face);
                  card.appendChild(back);
                   card.setAttribute('name',iteam.name);                
                      face.src = iteam.imagsrc;
                  
        //  console.log(iteam);
        card.addEventListener('click',(e)=>{


              card.classList.toggle('togglecard');

             checkedcard(e);

        });
                         
          
      });

};


const checkedcard=(e)=>{
 console.log(e);
const checkcard = e.target;
 checkcard.classList.add("flipped");

 const flipcards = document.querySelectorAll(".flipped");
 console.log(flipcards);
 ///logic
 
 
 
 if(flipcards.length ===2){


     if(flipcards[0].getAttribute("name") === flipcards[1].getAttribute("name")){


         console.log("match");

        flipcards.forEach((cards)=>{

              cards.classList.remove("flipped");

               cards.style.pointerEvents="none" ;//  nothing to pointer vevnt enymore
        });

     }else{


        console.log("wrong");

       flipcards.forEach((cards)=>{

        cards.classList.remove("flipped");
        setTimeout(()=>{

          cards.classList.remove("togglecard");

        },1000);
        

       });
       palyernumber--;
       playercount.textContent = palyernumber;
       if(palyernumber === 0){
           restart();


       };

     }


 }
};
/// restart
    const  restart=()=>{
     const restartData = randomize();
     const faces = document.querySelectorAll(".face");
     const card =  document.querySelectorAll(".card");
       restartData.forEach((iteam,index)=>{


       card[index].classList.remove("togglecard");
       setInterval(()=>{

        card[index].style.pointerEvents = "all";
        faces[index].src = iteam.imagsrc;
        cards[index].setAttribute("name",iteam.name);

       },1000);


       });
       palyernumber = 4;
       playercount.textContent = palyernumber;


    }


cardGenarator();