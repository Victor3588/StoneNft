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

  function signup() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    //alert("signup success1234");
}
function signin() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    //alert("signin success");
    
}
function signout() {
    auth.signOut();
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
    //alert("signout success");
}
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        alert("active user" + email);
        window.location.href='index.html';
    }
    else {
        //alert("no active user found");
    }
})