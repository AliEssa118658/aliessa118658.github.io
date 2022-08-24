const cardholder= document.getElementById("cardholder-name");
const cardNumber= document.getElementById("cardNumber");
const expiry = Array.from(document.querySelectorAll(".expiry"));
const cvc=document.getElementById("cvc");
const submit=document.getElementById("Confirm");
const nameOnCard = document.querySelector(".nameOnCard");
const numOnCard = document.querySelector(".numberOnCard");
const expMM = document.querySelector(".expMM");
const expYY = document.querySelector(".expYY");
const cvcDisplay = document.querySelector(".cvcOncard");
const thankYou= document.getElementById("thank-you-holder");
const thankYouSection= document.getElementById("thankyou");
const continueBtn= document.getElementById("continue");
const form= document.getElementById("myform");
//const expiryErrorMessage= document.getElementById("date-error");

function inputName(){
   nameOnCard.innerHTML = cardholder.value;
   thankYou.innerHTML = cardholder.value;
    if(nameOnCard.innerHTML=="")
    {
        nameOnCard.innerHTML = cardholder.placeholder;
    }
}
function inputCardNum(){
var v = cardNumber.value;
v.match(/\d{1,4}/g);
v.replace(/[^\d]/g," ");
//.replace(/[^\d]/g," ").Substring(0,16).match(/\d{1,4}/g)
numOnCard.innerHTML=v;
if(cardNumber.value ==="")
{
    numOnCard.innerHTML=cardNumber.placeholder;
}
}

function inputMM(){
    let formattedMM = expiry[0].value;
    //formattedMM = formattedMM.Substring(0,2);
    expiry[0].value= formattedMM;
    if(expiry[0].value===""){
        expMM.innerHTML="00";

    }else{
        expMM.innerHTML=expiry[0].value;
    }
}
function inputYY(){
    let formattedYY = expiry[1].value;
    //formattedYY = formattedYY.Substring(0,2);
    expiry[1].value= formattedYY;
    if(expiry[1].value===""){
        expYY.innerHTML="00";

    }else{
        expYY.innerHTML=expiry[1].value;
    }
}
function inputCvc(){
    let formattedCvc = cvc.value;
    //formattedCvc = formattedCvc.Substring(0,3);
    cvc.value= formattedCvc;
    if(cvc.value===""){
            cvcDisplay.innerHTML="000";

    }else{
        cvcDisplay.innerHTML=cvc.value;
    }
}

submit.addEventListener("click",function(){
  
    thankYouSection.style.display="inline";
    form.style.display="none";

})

continueBtn.addEventListener("click",function(){

  
    thankYouSection.style.display="none";
    form.style.display="inline";
    nameOnCard.innerHTML=cardholder.placeholder;
    numOnCard.innerHTML=cardNumber.placeholder;
    expMM.innerHTML="00";
    expYY.innerHTML="00";
    cvcDisplay.innerHTML="000";
})  