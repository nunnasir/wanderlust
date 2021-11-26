import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, [auth])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                console.log('Logout Successfully!');
                setUser({});
                setError("");
            })
            .catch(error => {
                setError(`${error.code}-${error.message}`);
            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        error,
        isLoading,
        setError,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;