import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import "firebase/compat/auth";

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const SignInWithGoogleProvider = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(" Login was successfull", token, user);
      // ...
    })
    .catch((error) => {
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(" error in signing in the user: ", credential, error);
      // ...
    });
};

export const SignOutUser = () => {
  signOut(auth)
    .then(() => {
      console.log(" Signed out successfully");
    })
    .catch((error) => {
      console.log("Encountered error while signing out: ", error);
    });
};
