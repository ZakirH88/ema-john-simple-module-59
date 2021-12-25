import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () =>{
	initializeApp(firebaseConfig);
}
export default initializeAuthentication;

/*
steps for authentication
------------------------
Step-1:Initial setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. enable auth method
--------------------------------
Step-2:component setup
1. Create Login Component
1. Create Register Component
1. Create Route Login & register

---------------------------------
Step-3: setup auth system
1. set up sign in method
2. setup sign out method
3. user state
4. special observer (onAuthStateChanged)
5. return necessary methods and states from useFirebase
-----------------------------------------
Step-4: create auth context hook (useAuth)
1. create a auth context
2. create context Provider
3. set context Provider context value
4. use auth Provider
5. create useAuth Hook
-------------------------------------------
Step-5: create private route
1. create private routeP
2. set private route
------------------------------------------
Step-6: Redirect after login
1. after login redirect user to their desired destination

Livesite Hosting on Firebase: https://ema-john-simple-module-59.web.app 
*/