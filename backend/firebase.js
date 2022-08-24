const {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} = require("firebase/auth")
const {initializeApp}=require("firebase/app")

const firebaseConfig = {
    apiKey: "AIzaSyBTqNBuN_5GozTSK0hZYbtd8VVE7J-Nk6c",
    authDomain: "fooddelivery-9e26c.firebaseapp.com",
    projectId: "fooddelivery-9e26c",
    storageBucket: "fooddelivery-9e26c.appspot.com",
    messagingSenderId: "264183997660",
    appId: "1:264183997660:web:7717e70f042135cb840019"
  };

  const app=initializeApp(firebaseConfig)
  const auth=getAuth(app)

  let signup=async(email,password)=>{
    let reply = {}
    await createUserWithEmailAndPassword(auth,email,password).then((usercredential)=>{
        reply = {msg:"Registered"}
    }).catch((error)=>{
        reply = {msg:error.code}
    })
    return reply
  }
  let login= async(email,password)=>{
    let reply={}
    await signInWithEmailAndPassword(auth,email,password).then((usercredential)=>{
        const user =usercredential.user
        reply={code: "success",
        msg:user.email}
        console.log("User", user.email);
    }).catch((error)=>{
        reply ={
            code:"error",
            msg:error.code}
    })
    return reply
  }

  module.exports = {signup,login}