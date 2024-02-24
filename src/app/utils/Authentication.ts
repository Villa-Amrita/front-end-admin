import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "config/firebase";
import { type Admin } from "~/app/Schema/adminSchema";

export type SigninAdmin = {
  email: string;
  password: string;
};

export const createAdmin = async (admin: Admin) => {
  try {
    await createUserWithEmailAndPassword(auth, admin.email, admin.password);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Error registering user: " + error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const signin = async (admin: SigninAdmin) => {
  try {
    await signInWithEmailAndPassword(auth, admin.email, admin.password);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Error signing in: " + error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const signout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Error signing out: " + error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const authenticated = (): boolean => {
  return !!auth.currentUser;
};
