import React, { Component, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateCurrentUser,
} from "firebase/auth";
import { auth, db } from "../../firebase-config";
import { Link } from "react-router-dom";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import "../../App.css";

const Editpage = () => {
  const [user, setUser] = useState({});
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const edit = async (postId) => {
    await addDoc(collection(db, "posts"), {
      post: newTweet,
      email: user.email,
    });
    console.log(postId);
    await deleteDoc(doc(db, "posts", postId));

    window.location.reload();
  };
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));

    const newTweets = [];

    await querySnapshot.docs.map((doc) => {
      newTweets.push({ ...doc.data(), id: doc.id });
    });

    setTweets(newTweets);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="app">
      {tweets.map((tweet, counter) => {
        console.log(tweet);
        return (
          <div key={counter}>
            <input
              type="text"
              defaultValue={tweet.post}
              onChange={(event) => {
                setNewTweet(event.target.value);
              }}
            ></input>
            <button onClick={() => edit(tweet.id)}>edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default Editpage;
