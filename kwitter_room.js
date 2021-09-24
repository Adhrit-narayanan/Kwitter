
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
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=" Welcome "+user_name+"!";
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    });
  });

}

getData();
function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function redirecttoroomname(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}