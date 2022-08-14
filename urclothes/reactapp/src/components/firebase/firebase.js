import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebase = {}

const app = initializeApp(firebase);
const auth = getAuth(app);