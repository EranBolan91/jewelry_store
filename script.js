
// ------------------ Script for Contact page ----------------
let fullName = document.getElementById('fullName');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let btnSend = document.getElementById('btnSend');
let inputNewsLetter = document.getElementById('inputNewsLetter');
let checkBox = document.getElementsByTagName('input');
let jewelryCountBagde = document.getElementById('itemsJewelry');


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
    console.log(jewelry);
    
}

let menuList = document.querySelectorAll("input");
let root = document.querySelector("#collection_content");

function filter(filter){
    switch(filter){
        case 'man':
           removeItemsFromRoot(root);
        for (let i = 0; i < jewelry.length; i++) {
            if(jewelry[i].gender == 'man'){
                createJewelBox(jewelry[i],i);
            }
        }
        break;
        case 'woman':
            removeItemsFromRoot(root);
        for (let i = 0; i < jewelry.length; i++) {
            if(jewelry[i].gender == 'woman'){
                createJewelBox(jewelry[i],i);
            }
        }
        break;
        case 'ring':
            removeItemsFromRoot(root);
        for (let i = 0; i < jewelry.length; i++) {
            if(jewelry[i].type == 'ring'){
                createJewelBox(jewelry[i],i);
            }
        }
        break;
        case 'necklace':
            removeItemsFromRoot(root);
        for (let i = 0; i < jewelry.length; i++) {
            if(jewelry[i].type == 'necklace'){
                createJewelBox(jewelry[i],i);
            }
        }
        break;
        case 'earrings':
            removeItemsFromRoot(root);
        for (let i = 0; i < jewelry.length; i++) {
            if(jewelry[i].type == 'earrings'){
                createJewelBox(jewelry[i],i);
            }
        }
        break;
    }
}

function removeItemsFromRoot(parent){
    let child = parent.lastElementChild;  
    while (child) { 
        parent.removeChild(child); 
        child = parent.lastElementChild; 
    }
}

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
         button.innerText = "ADD CART";
         button.classList.add('btn');
         button.setAttribute('id',index);
         button.addEventListener('click', function(event){
            addToCart(event);  
         });
         itemBox.appendChild(button);        
}

let cart_items = []
function addToCart(event){

    let idItem = event.target.id;
    cart_items.push(jewelry[idItem]);
    jewelryCountBagde.innerText = cart_items.length; 
    
}//count how many items in the cart and display in the white bagde



//-------------- Cart mouse over ------------
//need to check how to remove old elements!!!
function showCart(){
    let cart_drop_down = document.getElementsByClassName("cart-dropdown")[0];
        removeItemsFromRoot(cart_drop_down);
        let totalsum = 0;
        console.log(cart_items);
      for (let i = 0; i < cart_items.length; i++) {
          console.log("Show cart: " + JSON.stringify(cart_items[i]));
          
        let img = document.createElement('img');
        img.setAttribute("src", cart_items[i].image);
        img.setAttribute("width", "70");
        img.setAttribute("height", "70");
        img.setAttribute('id',cart_items[i].id);
        cart_drop_down.appendChild(img);

        let h5 = document.createElement('h5');
        h5.innerText = cart_items[i].name;
        h5.style.fontSize = "14px"
        h5.setAttribute('id',cart_items[i].id);
        cart_drop_down.appendChild(h5);
        totalsum = totalsum + cart_items[i].price;
        
        if(i == cart_items.length-1){
            let hr = document.createElement('hr');
            hr.setAttribute('height',"5px");
            cart_drop_down.appendChild(hr);

            let h5 = document.createElement('h5');
            h5.style.color = "green";
            h5.innerText ="total mount: " +  totalsum;
            cart_drop_down.appendChild(h5);
        } 
      }
}
