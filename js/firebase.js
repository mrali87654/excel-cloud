// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAhNjzfr2PnkeUCEAgPkB5HohpitNSlB78",
    authDomain: "excel-cloud-f0fe2.firebaseapp.com",
    projectId: "excel-cloud-f0fe2",
    storageBucket: "excel-cloud-f0fe2.firebasestorage.app",
    messagingSenderId: "905531285438",
    appId: "1:905531285438:web:e79d37f2a91d5016e1e3ef"
};

// Initialize Firebase (COMPAT MODE)
firebase.initializeApp(firebaseConfig);

// create global references
const auth = firebase.auth();
const db = firebase.firestore();
