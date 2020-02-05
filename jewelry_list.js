const jewelry = [
{
    id:0,
    image:"Pictures/PHOTO-2020-01-29-16-14-38 2.jpg",
    name:"Diamond Ring",
    price:1000,
    type:"ring",
    gender:"man",
    amount:0,
    isClick: false
},
{
    id:1,
    image:"Pictures/PHOTO-2020-01-29-16-14-38 3.jpg",
    name:"Diamond Ring",
    price:4000,
    type:"ring",
    gender:"man",
    amount:0,
    isClick: false
},
{
    id:2,
    image:"Pictures/PHOTO-2020-01-29-16-14-38 4.jpg",
    name:"Diamond Ring",
    price:7000,
    type:"ring",
    gender:"man",
    amount:0,
    isClick: false
},
{
    id:3,
    image:"Pictures/PHOTO-2020-01-29-16-14-38 5.jpg",
    name:"Royal Diamond Ring",
    price:7000,
    type:"ring",
    gender:"man",
    amount:0,
    isClick: false
},
{
    id:4,
    image:"Pictures/PHOTO-2020-01-29-16-14-38 3.jpg",
    name:"Emerald Diamond Ring",
    price:500,
    type:"ring",
    gender:"woman",
    amount:0,
    isClick: false
},
{
    id:5,
    image:"Pictures/PHOTO-2020-01-29-16-15-25 2.jpg",
    name:"Gold Necklace",
    price:200,
    type:"necklace",
    gender:"woman",
    amount:0,
    isClick: false
},
{
    id:6,
    image:"Pictures/PHOTO-2020-01-29-16-15-25 2.jpg",
    name:"Gold Rings",
    price:800,
    type:"ring",
    gender:"woman",
    amount:0,
    isClick: false
},
{
    id:7,
    image:"Pictures/PHOTO-2020-01-29-16-15-25 4.jpg",
    name:"Bronze Diamond Ring",
    price:750,
    type:"ring",
    gender:"woman",
    amount:0,
    isClick: false
},
{
    id:8,
    image:"Pictures/PHOTO-2020-01-29-16-15-25 5.jpg",
    name:"Silver Ring",
    price:300,
    type:"ring",
    gender:"woman",
    amount:0,
    isClick: false
},
{
    id:9,
    image:"Pictures/PHOTO-2020-01-29-16-15-25 6.jpg",
    name:"Gold earrings",
    price:500,
    type:"earrings",
    gender:"man",
    amount:0,
    isClick: false
},
{
    id:10,
    image:"Pictures/PHOTO-2020-01-29-16-15-25 7.jpg",
    name:"Star Gold Earrings",
    price:820,
    type:"earrings",
    gender:"man",
    amount:0,
    isClick: false
},
{
    id:11,
    image:"Pictures/PHOTO-2020-01-29-16-15-25 8.jpg",
    name:"Blue Emerald Ring",
    price:150,
    type:"ring",
    gender:"woman",
    amount:0,
    isClick: false
},
{
    id:12,
    image:"Pictures/PHOTO-2020-01-29-16-15-25 5.jpg",
    name:"Silver Ring",
    price:300,
    type:"ring",
    gender:"woman",
    amount:0,
    isClick: false
},
{
    id:13,
    image:"Pictures/PHOTO-2020-01-29-16-15-25 9.jpg",
    name:"Diamond Silver Ring",
    price:1500,
    type:"ring",
    gender:"woman",
    amount:0,
    isClick: false
},
{
    id:14,
    image:"Pictures/PHOTO-2020-01-29-16-15-25 10.jpg",
    name:"Black Ring",
    price:1000,
    type:"ring",
    gender:"man",
    amount:0,
    isClick: false
},
{
    id:15,
    image:"Pictures/PHOTO-2020-01-29-16-15-25 11.jpg",
    name:"Blue Ring",
    price:2000,
    type:"ring",
    gender:"man",
    amount:0,
    isClick: false
},
{
    id:16,
    image:"Pictures/PHOTO-2020-01-29-16-15-25 12.jpg",
    name:"Silver Ring",
    price:300,
    type:"ring",
    gender:"man",
    amount:0,
    isClick: false
},
{
    id:17,
    image:"Pictures/PHOTO-2020-01-29-16-15-25 13.jpg",
    name:"Heart Necklace",
    price:100,
    type:"necklace",
    gender:"woman",
    amount:0,
    isClick: false
},
{
    id:18,
    image:"Pictures/PHOTO-2020-01-29-16-15-25 14.jpg",
    name:"Hamsa Necklace",
    price:300,
    type:"necklace",
    gender:"woman",
    amount:0,
    isClick: false
},
{
    id:19,
    image:"Pictures/PHOTO-2020-01-29-16-15-25.jpg",
    name:"Zibra Ring",
    price:300,
    type:"ring",
    gender:"woman",
    amount:0,
    isClick: false
},
{
    id:20,
    image:"Pictures/PHOTO-2020-01-29-16-16-00 2.jpg",
    name:"Royal Ring",
    price:5500,
    type:"ring",
    gender:"man",
    amount:0,
    isClick: false
},
{
    id:21,
    image:"Pictures/PHOTO-2020-01-29-16-16-00 3.jpg",
    name:"Elegant Earrings",
    price:500,
    type:"earrings",
    gender:"man",
    amount:0,
    isClick: false
},
{
    id:22,
    image:"Pictures/PHOTO-2020-01-29-16-16-00 4.jpg",
    name:"Black Earrings",
    price:400,
    type:"earrings",
    gender:"man",
    amount:0,
    isClick: false
},
{
    id:23,
    image:"Pictures/PHOTO-2020-01-29-16-16-00 5.jpg",
    name:"Diamond Earrings",
    price:2500,
    type:"earrings",
    gender:"man",
    amount:0,
    isClick: false
},
{
    id:24,
    image:"Pictures/PHOTO-2020-01-29-16-16-00 6.jpg",
    name:"Flower ring",
    price:2700,
    type:"ring",
    gender:"woman",
    amount:0,
    isClick: false
},
{
    id:25,
    image:"Pictures/PHOTO-2020-01-29-16-16-00.jpg",
    name:"Gold Diamond Earrings",
    price:2500,
    type:"earrings",
    gender:"woman",
    amount:0,
    isClick: false
}]


// function addToCart(event){
//     let index = event.traget.id;
//     if(cart_items.length != 0){
//         for (let i = 0; i < cart_items.length; i++) {
//               if(cart_items[i].id == index){
//                   cart_items[i].amount += 1;
//               }else{
//                 cart_items.push(jewelry[i])
//               }
//         }
//     }else{
//         cart_items.push(jewelry[i])
//     }
//     jewelryCountBagde.innerText = cart_items.length; 
// }//count how many items in the cart and display in the white bagde

// function addToCart(event){

//     let itemID = event.target.id;
//     console.log("ID of the item: " + event.target.id);
//     console.log("Click item id: " + itemID);
//     length = cart_items.length;
//     console.log("Length of the array: " + length);
//     if(cart_items.length != 0){
//         for (let i = 0; i < length; i++) {
//               if(cart_items[i].id == itemID){
//                   console.log("Inside if - cart items item ID: " + JSON.stringify(cart_items[i]));
//                   cart_items[i].amount += 1;
//                   console.log("Cart item Plus amount " + cart_items[i].id);
//               }else{
//                 cart_items.push(jewelry[itemID])
//                 console.log("Object Cart item insert to cart_items: " +JSON.stringify(cart_items[itemID]));
//               }
//         }
//     }else{
//         cart_items.push(JSON.stringify(jewelry[itemID]));
//         console.log("Object Cart item insert First time to cart_items: " + JSON.stringify(cart_items));
//     }
//     jewelryCountBagde.innerText = cart_items.length; 
//     console.log(cart_items);
    
// }//count how many items in the cart and display in the white bagde
