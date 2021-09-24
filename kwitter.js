var firebaseConfig = {
  apiKey: "AIzaSyBlAM1MNnCRuWYREuZtX8sU1REX370kcqk",
  authDomain: "kwetter-3fb03.firebaseapp.com",
  databaseURL: "https://kwetter-3fb03-default-rtdb.firebaseio.com",
  projectId: "kwetter-3fb03",
  storageBucket: "kwetter-3fb03.appspot.com",
  messagingSenderId: "453555206805",
  appId: "1:453555206805:web:0846ab8db2a19488d1b99c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

