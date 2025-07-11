function generatepassword( length, includelowercase, includeuppercase, includenumbers, includesymbols ){

    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberschars = "0123456789";
const symbolschars = "!'()*+-./:<=>?@[\]^_`{|}~";

let allowedchars = "";
let password = "";

allowedchars  += includelowercase ? lowercasechars : "";
allowedchars  += includeuppercase ? uppercasechars : "";
allowedchars  += includenumbers ? numberschars : "";
allowedchars  += includesymbols ? symbolschars : "";

 if(length <= 0){
    return `(Password Length must be at least 1)`;
 }
 if (allowedchars.length === 0 ){
    return `(atleast 1 set of characters needs to be selected)`;
 }
 for(let i = 0; i < length; i++){
    const randomindex = Math.floor(Math.random() * allowedchars.length);
    password += allowedchars[randomindex];
 }

    return password;
}


const passwordlength = 12;
const includelowercase = true;
const includeuppercase = true;
const includenumbers = true;
const includesymbols = true;

const password =  generatepassword( passwordlength, includelowercase, includeuppercase, includenumbers, includesymbols );

console.log(`Generated Password: ${password}`);










































/*
const back = document.getElementById("back");
const balik = document.getElementById("balik");
const total = document.getElementById("total");
const myh1 = document.getElementById("myh1");
const myh2 = document.getElementById("myh2");
const myh3 = document.getElementById("myh3");
const min = 10;
const max = 100;
let rnm1;
let rnm2;
let rnm3;





back.onclick = function() {
    rnm1 = Math.floor(Math.random() * max ) + min;
    rnm2= Math.floor(Math.random() * max ) + min;
    rnm3 = Math.floor(Math.random() * max ) + min;
    myh1.textContent = rnm1;
     myh2.textContent = rnm2;
    myh3.textContent = rnm3;
    let equal = rnm1 + rnm2 + rnm3;
      total.textContent = equal;

}

balik.onclick = function()
{
    bt0 = 0;
    myh1.textContent = bt0;
    myh2.textContent = bt0;
    myh3.textContent = bt0;
    total.textContent = bt0;
}

const mysubmit = document.getElementById("mysubmit");
const myage = document.getElementById("myage");
const result = document.getElementById("result");
let age;

mysubmit.onclick = function(){
    age = myage.value;
    age = Number(age);

    if (age == 0 ){
        result.textContent = "dwadw";
    }
    else if (age >=20){
        result.textContent =`your age is ${age} so you can drive`;
        console.log(typeof age);
    }
    else{
        result.textContent = "you cant drive";
    }
}
*/

