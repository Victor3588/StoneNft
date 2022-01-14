

const ethereumButton = document.querySelector('.wl');
const showAccount = document.querySelector('.showAccount');

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  console.log(account);
  showAccount.innerHTML = "";
  showAccount.innerHTML = account;
}

// let timeLine = new gsap.timeline({
//   scrollTrigger: {
//       trigger: "#test2",
//       pin: true,
//       start: "-650 120",
//       end: "+=200",
//       scrub: true, 
//       markers: true, id: "test2",
//   },
// });
// timeLine.to('#test2',1, {x:450});

gsap.to("#test2", {
  x: 450,
  duration: 2,
  scrollTrigger: {
    trigger: "#test2",
    pin: false,
    start: "-600 120",
    end: "+=300",
    scrub: true, 
    markers: false, id: "test2",
  }
});
gsap.to(".god", {
  delay: 3,
  duration: 3,
 x: -750,
});
gsap.to(".god2", {
  delay:3,
  duration: 3,
  x: 750,
});
gsap.to(".bglogo", {
  opacity: 0,
   duration: 2,
   delay: 2,
   opacity:100,
});
gsap.to("h1", {duration: 3, text: "this is a to tween"});

gsap.to("#store", {
  x: 450,
  duration: 2,
  scrollTrigger: {
    trigger: "#store",
    pin: false,
    start: "-600 120",
    end: "+=300",
    scrub: true, 
    markers: false, id: "store",
  }
});
const firebaseConfig = {
  apiKey: "AIzaSyBMm7ra7tdlbxCl4GB9BQ8efSsjtfoZ4Bc",
  authDomain: "stonenft-9bf2f.firebaseapp.com",
  projectId: "stonenft-9bf2f",
  storageBucket: "stonenft-9bf2f.appspot.com",
  messagingSenderId: "78123353690",
  appId: "1:78123353690:web:bff378b51158230cc5fa63",
  measurementId: "G-DE11M73R75"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
function signout() {
    auth.signOut();
    alert("signout success");
    window.location.href='login.html';
}
const sendEthButton = document.querySelector('.sendEthButton ');

let accounts = [];

//Sending Ethereum to an address
sendEthButton.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
          value: 'b1a2bc2ec500000',
          gasPrice: '0x0',
          gas: '0x0',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}
const sendEthButton1 = document.querySelector('.sendEthButton1 ');



//Sending Ethereum to an address
sendEthButton1.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
          value: '214e8348C4f0000',
          gasPrice: '0x0',
          gas: '0x0',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

const sendEthButton2 = document.querySelector('.sendEthButton2 ');



//Sending Ethereum to an address
sendEthButton2.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
          value: '1ff973cafa8000',
          gasPrice: '0x0',
          gas: '0x0',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});


const sendEthButton3 = document.querySelector('.sendEthButton3 ');



//Sending Ethereum to an address
sendEthButton3.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
          value: 'd529ae9e860000',
          gasPrice: '0x0',
          gas: '0x0',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

const sendEthButton4 = document.querySelector('.sendEthButton4 ');



//Sending Ethereum to an address
sendEthButton4.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
          value: '9fdf42f6e48000',
          gasPrice: '0x0',
          gas: '0x0',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

const sendEthButton5 = document.querySelector('.sendEthButton5 ');



//Sending Ethereum to an address
sendEthButton5.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
          value: '14f498ffead70000',
          gasPrice: '0x0',
          gas: '0x0',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

const sendEthButton6 = document.querySelector('.sendEthButton6 ');



//Sending Ethereum to an address
sendEthButton6.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
          value: 'f8b0a10e470000',
          gasPrice: '0x0',
          gas: '0x0',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

const sendEthButton7 = document.querySelector('.sendEthButton7 ');



//Sending Ethereum to an address
sendEthButton7.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
          value: '853a0d2313c0000',
          gasPrice: '0x0',
          gas: '0x0',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

const sendEthButton8 = document.querySelector('.sendEthButton8 ');



//Sending Ethereum to an address
sendEthButton8.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
          value: 'ca8132b0328000',
          gasPrice: '0x0',
          gas: '0x0',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});




