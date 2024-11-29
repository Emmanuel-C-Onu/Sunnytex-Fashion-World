const mobileButton = document.querySelector(".mobileButton");
const userButton = document.querySelector(".userButton");
const menuContainer = document.querySelector(".menuContainer");
const mobileContainer = document.querySelector(".mobileContainer");
const categoryContainer = document.querySelector(".categoryContainer");
const loginContainer = document.querySelector(".loginContainer");

document.querySelector(".mobileButton").addEventListener("click", () => {
 toggleMobileContainer();
});

function toggleMobileContainer() {
     if (mobileContainer.classList.contains("max-h-0")) {
       mobileContainer.classList.toggle("max-h-full");
       mobileButton.classList.toggle("text-red-500");
       mobileButton.classList.replace("fa-xmark", "fa-bars");
     }
     if (mobileContainer.classList.contains("max-h-full")) {
       mobileButton.classList.replace("fa-bars", "fa-xmark");
     }
}
document.querySelector(".userButton").addEventListener("click", () => {
  loginContainer.classList.toggle("hidden");
});
document.querySelector(".categoryMenu").addEventListener("click", () => {
  document.querySelector(".categoryMenu").classList.toggle("-rotate-45");
  categoryContainer.classList.toggle("max-h-full");
});
document.querySelector(".mobileNavButton").addEventListener("click", () => {
  menuContainer.classList.toggle("max-h-full");
});

setInterval(() => {
    document.querySelector(".txt1").classList.toggle("translate-x-[1500px]");
    document.querySelector(".txt2").classList.toggle("translate-x-[-700px]");
    document.querySelector(".txt3").classList.toggle("translate-y-[-1000px]");
    document.querySelector(".orderTxt").classList.toggle("translate-y-[1500px]");
    // document.querySelector(".image").classList.add('hidden')
    chngimg();
}, 10000);


// "Images/image5.png";








 let showAlt = document.querySelector(".showAlt")

let toggle = false;
function chngimg() {
  if (toggle === true) {
     
    showAlt.classList.remove("hidden");
  } else {
   showAlt.classList.add("hidden");
  }
  toggle = !toggle;
}

// gsap.from(".logotxt", { duration: 2, x: 200, ease: "elastic" });

    // gsap.to(".logotxt", { duration: 2, rotation: "360" });
    
 gsap.from(".img", { duration: 1.5, skew: 45, y: "random(-200, 200)", stagger: 0.25 });
//  gsap.effects.explode(".logotxt", {
//    direction: "up",
//    duration: 3,
//  });

// AOS.init({
//   duration: 800, // Animation duration in milliseconds
//   offset: 100, // Offset (in pixels) from the top of the page
// });

//  let tween = gsap.from(".logotxt", {
//    rotation: 360,
//    duration: 5,
//    ease: "elastic",
//  });

 //now we can control it!
//  tween.pause();
//  tween.seek(2);
//  tween.progress(0.5);
//  tween.play();


 //Product Page
const products = [
  {
    id: 1,
    Qty: 1,
    price: "100",
    name: "Senator Wear",
    img: "Images/Carousel_Img.png",
  },
  {
    id: 2,
    Qty: 1,
    price: "220",
    name: "Senator Wear",
    img: "Images/image2.jpeg",
  },
  {
    id: 3,
    Qty: 1,
    price: "215",
    name: "Senator Wear",
    img: "Images/image3.png",
  },
  {
    id: 4,
    Qty: 1,
    price: "230",
    name: "Senator Wear",
    img: "Images/image5.jpg",
  },
  {
    id: 5,
    Qty: 1,
    price: "150",
    name: "Senator Wear",
    img: "Images/toggleimg.PNG",
  },
  {
    id: 6,
    Qty: 1,
    price: "210",
    name: "Senator Wear",
    img: "Images/image3.png",
  },
  {
    id: 7,
    Qty: 1,
    price: "325",
    name: "Senator Wear",
    img: "Images/Carousel_Img.png",
  },
//   {
//     id: 8,
//     Qty: 1,
//     price: "200",
//     name: "Senator Wear",
//     img: "https://picsum.photos/249/201",
//   },
//   {
//     id: 9,
//     Qty: 1,
//     price: "125",
//     name: "Senator Wear",
//     img: "https://picsum.photos/251/202",
//   },
//   {
//     id: 9,
//     Qty: 1,
//     price: "130",
//     name: "Senator Wear",
//     img: "https://picsum.photos/251/202",
//   },
//   {
//     id: 9,
//     Qty: 1,
//     price: "120",
//     name: "Senator Wear",
//     img: "https://picsum.photos/251/202",
//   },
//   {
//     id: 9,
//     Qty: 1,
//     price: "110",
//     name: "Senator Wear",
//     img: "https://picsum.photos/251/202",
//   },
];

const productMapping = products.map(
  (product) =>
    `
          <div class="product-card pb-3 pt-5 w-full">
             <div class="img w-full"><img class="w-full" src="${product.img}" alt="Image"></div>
             <div class="text-center px-2">
                 <h2 class="product-name text-xl font-extrabold">${product.name}</h2>
                 <strong class="text-xl">$${product.price}</strong>
                 <a href="#productDetails" class="text-black py-2 hover:underline block">Product Details</a>
                 <button class="hover:bg-gradient-to-l from-amber-500 via-green-600 to-rose-900 border border-blue-600 rounded-lg bg-blue-600 product-btn text-xl py-1 px-2 w-full" id=${product.id}>Add to Cart</button>
             </div>
       
          </div>
        `
);
const displayResult = document.querySelector(".main");
displayResult.innerHTML = productMapping.join("");

let main = document.querySelector('main')
let showLogin = document.querySelector('.showLogin')
let showRegister = document.querySelector('.showRegister')
let login = document.querySelector('.login')
let register = document.querySelector('.register')
let loginRedir = document.querySelector(".loginRedir");
let regRedir = document.querySelector(".regRedir");
let back2homePage = document.querySelector(".back2homePage");

function showLoginFn() {
    login.classList.remove('hidden')
    main.classList.add("hidden"); 
    register.classList.add("hidden")
}
function showHomePage() {
    login.classList.add('hidden')
    main.classList.remove("hidden"); 
    register.classList.add("hidden")
}


function showRegisterFn() {
    login.classList.add('hidden')
    main.classList.add("hidden");
    register.classList.remove("hidden");
       
}
showLogin.addEventListener("click", ()=>{
    showLoginFn()
    toggleMobileContainer();
})
back2homePage.addEventListener("click", () => {
  showHomePage();
  toggleMobileContainer();
});
loginRedir.addEventListener("click", () => {
  showLoginFn();
  toggleMobileContainer();
});
showRegister.addEventListener("click", ()=>{
     showRegisterFn()
     toggleMobileContainer();
    })
regRedir.addEventListener("click", () => {
  showRegisterFn();
  toggleMobileContainer();
});