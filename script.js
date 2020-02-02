
// ------------------ Script for Contact page ----------------
let fullName = document.getElementById('fullName');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let btnSend = document.getElementById('btnSend');
let inputNewsLetter = document.getElementById('inputNewsLetter');
let checkBox = document.getElementsByTagName('input');


function sendContact(){
    //check if input full name and phone is empty - if it is, pop up alert
    if(fullName.value == "" || phone.value == ""){
        alert("Please enter the required inputs");
    }else if(Number.isInteger(phone.value)){ //need to check if its number or not
        alert("Please enter only numbers");
    }else{
        //prints all the data
        alert("Lead name: " + fullName.value + "\n" +
          "Phone: " + phone.value + "\n" + 
          "Email: " + email.value + "\n" +
          "Subject: " + subject.value );
    }
}


function sendNewsLetter(){
    if(inputNewsLetter.value == ""){
        alert("Please enter your email");
    }else{
        alert('We will be in touch');
    }
}
// ------------------ Script for Contact page END ----------------


//------------------- Script for the Collection page START ---------------

function init(){
    for (let i = 0; i < jewelry.length; i++) {
                createJewelBox(jewelry[i],i);
    }
}

let menuList = document.querySelectorAll("input");

console.log(menuList[0].checked);
console.log(menuList[0].ontoggle);


function filter(filter){
    switch(filter){
        case 'man':
         
            for (let i = 0; i < jewelry.length; i++) {
                if(jewelry[i].gender == 'man'){
                    createJewelBox(jewelry[i],i);
                }
            }
        break;
        case 'woman':
        for (let i = 0; i < jewelry.length; i++) {
            if(jewelry[i].gender == 'woman'){
                createJewelBox(jewelry[i],i);
            }
        }
        break;
        case 'ring':
        for (let i = 0; i < jewelry.length; i++) {
            if(jewelry[i].type == 'ring'){
                createJewelBox(jewelry[i],i);
            }
        }
        break;
        case 'necklace':
        for (let i = 0; i < jewelry.length; i++) {
            if(jewelry[i].type == 'necklace'){
                createJewelBox(jewelry[i],i);
            }
        }
        break;
        case 'earrings':
        for (let i = 0; i < jewelry.length; i++) {
            if(jewelry[i].type == 'earrings'){
                createJewelBox(jewelry[i],i);
            }
        }
        break;
    }
}

let root = document.querySelector("#collection_content");
function createJewelBox(jewelryObj,index){

         let itemBox = document.createElement('div');
         itemBox.classList.add('item_box');
         itemBox.style.display = "flex";
         itemBox.style.alignItems = "center";
         itemBox.style.flexDirection = "column"
         itemBox.style.justifyContent = "center";
         root.appendChild(itemBox);
         
         let img = document.createElement('img');
         img.setAttribute("src", jewelryObj.image);
         img.classList.add('image_jewel');
         img.setAttribute("width", "250");
         img.setAttribute("height", "250");
         itemBox.appendChild(img);
         
         let h4 = document.createElement('h4');
         h4.innerText = jewelryObj.name;
         itemBox.appendChild(h4);
         
         let h5 = document.createElement('h5');
         h5.innerText = jewelryObj.price;
         itemBox.appendChild(h5);

         let button = document.createElement('button');
         button.innerText = "BUY";
         button.classList.add('buy_button');
         button.setAttribute('id',index);
         button.addEventListener('click', function(event){
            addToCart(event);  
         });
         itemBox.appendChild(button);        
}


function addToCart(event){
        
        console.log(event.getAttributes);
        
}