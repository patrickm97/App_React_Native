import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBqqkwkDzHoig90bvqmLHdSvVLIBo_xzH4",
  authDomain: "projeto-react-217ee.firebaseapp.com",
  projectId: "projeto-react-217ee",
  storageBucket: "projeto-react-217ee.appspot.com",
  messagingSenderId: "176608045871",
  appId: "1:176608045871:web:a243558985242b9c43cfda"
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };