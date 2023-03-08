import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { FirebaseAuth } from './firebaseFE';

const googleProvider = new GoogleAuthProvider();

export const googleSignUpAndLogIn = async () => {
  try {
    const response = await signInWithPopup(
      FirebaseAuth,
      googleProvider,
    );
    return response.user.uid;
  } catch (err) {
    return console.error(err);
  }
};

export const emailSignUp = async ({ email, password }) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );
    return resp.user.uid;
  } catch (e) {
    return alert(e.message);
  }
};

export const emailLogIn = async ({ email, password }) => {
  try {
    const response = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );
    return response.user.uid;
  } catch (err) {
    return alert(e.message);
  }
};

export const authStateChange = (setSession) => {
  onAuthStateChanged(FirebaseAuth, (user) => {
    if (!user) {
      return setSession({
        status: 'no-authenticated',
        userId: null,
      });
    }

    return setSession({
      status: 'authenticated',
      userId: user.uid,
    });
  });
};

export const emailLogOut = async () => {
  try {
    return await FirebaseAuth.signOut;
  } catch (err) {
    return console.error(err);
  }
};
