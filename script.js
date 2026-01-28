// Import Firebase SDKs (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔴 Your Firebase configuration (PASTE YOURS HERE)
const firebaseConfig = {
  apiKey: "AIzaSyB-6w9tRe9-kby9HYcekVDESpKbjkXAs8E",
  authDomain: "smart-campus-issue-repor-4069a.firebaseapp.com",
  projectId: "smart-campus-issue-repor-4069a",
  storageBucket: "smart-campus-issue-repor-4069a.appspot.com",
  messagingSenderId: "320026687064",
  appId: "1:320026687064:web:0270ed7446dd6c764afc2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submission
document.getElementById("issueForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  try {
    await addDoc(collection(db, "issues"), {
      name: name,
      category: category,
      description: description,
      status: "Pending",
      createdAt: new Date()
    });

    document.getElementById("message").innerText =
      "✅ Issue submitted successfully!";
    document.getElementById("issueForm").reset();

  } catch (error) {
    console.error("Error adding document: ", error);
    document.getElementById("message").innerText =
      "❌ Error submitting issue";
  }
});
