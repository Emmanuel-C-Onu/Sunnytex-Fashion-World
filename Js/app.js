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
    name: "Bulb",
    img: "https://picsum.photos/250/199",
  },
  {
    id: 2,
    Qty: 1,
    price: "200",
    name: "Table",
    img: "https://picsum.photos/251/200",
  },
  {
    id: 3,
    Qty: 1,
    price: "300",
    name: "Cloth",
    img: "https://picsum.photos/249/200",
  },
  {
    id: 4,
    Qty: 1,
    price: "400",
    name: "Fridge",
    img: "https://picsum.photos/250/198",
  },
  {
    id: 5,
    Qty: 1,
    price: "500",
    name: "Phone",
    img: "https://picsum.photos/248/200",
  },
  {
    id: 6,
    Qty: 1,
    price: "600",
    name: "Watch",
    img: "https://picsum.photos/250/201",
  },
  {
    id: 7,
    Qty: 1,
    price: "700",
    name: "Torch",
    img: "https://picsum.photos/251/199",
  },
  {
    id: 8,
    Qty: 1,
    price: "800",
    name: "Mouse",
    img: "https://picsum.photos/249/201",
  },
  {
    id: 9,
    Qty: 1,
    price: "900",
    name: "Padlock",
    img: "https://picsum.photos/251/202",
  },
  {
    id: 9,
    Qty: 1,
    price: "900",
    name: "Padlock",
    img: "https://picsum.photos/251/202",
  },
  {
    id: 9,
    Qty: 1,
    price: "900",
    name: "Padlock",
    img: "https://picsum.photos/251/202",
  },
  {
    id: 9,
    Qty: 1,
    price: "900",
    name: "Padlock",
    img: "https://picsum.photos/251/202",
  },
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
                 <button class="border border-blue-600 bg-blue-600 product-btn text-xl py-1 px-2 w-full" id=${product.id}>Add to Cart</button>
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