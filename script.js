

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

