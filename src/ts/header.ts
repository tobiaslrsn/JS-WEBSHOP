import * as productObjects from "./models/product-objects";
import { Article } from "./models/product-objects";
import { productsToPage } from "./products";

// window.onload = function(){
//     productsToPage();

//     let purchaseBtnMalcolm = document.querySelectorAll(".purchase-button")
//     let cartAdding: HTMLButtonElement = document.getElementById("cartCount") as HTMLButtonElement;
    
//     purchaseBtnMalcolm.forEach(Element => {
//     let buttonsMalcolm = document.addEventListener("click", test);
    
// });


// };
// function test () {
//     console.log("Det funkar")
//     let purchaseBtnMalcolm = document.querySelectorAll(".purchase-button")
//     let cartAdding: HTMLButtonElement = document.getElementById("cartCount") as HTMLButtonElement;


//     if (purchaseBtnMalcolm) {
//           console.log('click');
//           // Kollar så element finns
//           if (cartAdding) {
//             // CartCount är antingen odefinierat eller ett nummer
//             // Om det är undifined faller det tillbaka till 0. Konvertera
//             // till int eftersom value från innerText
//             // returnerar en string;
//             let cartCount = Number(cartAdding.innerText || 0);
      
//             // Ökar med ett efter varje click
//             cartAdding.innerText = String(cartCount + 1);
//             //Gör att amount kommer upp
//             cartAdding.style.visibility ="visible"
//         }
        
//     }
    
// };
     

