import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/fiebase.init";

initializeAuthentication();
 
const useFirebase = () =>{
	const [user, setUser] = useState({});

	const auth = getAuth();
	const GoogleProvider = new GoogleAuthProvider();

	const signInUsingGoogle = () =>{
		return	signInWithPopup(auth, GoogleProvider)
			
	}

	const logOut = () =>{
		signOut(auth)
			.then(() =>{
				setUser({})

			})

	}
	// observe whether user auth state changed or not.
	useEffect(() =>{
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} 
		  });
	}, [])
	
	return{
		user,
		signInUsingGoogle,
		logOut

	}

}
export default useFirebase;