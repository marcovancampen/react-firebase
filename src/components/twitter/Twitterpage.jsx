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
import { Routes, Switch, Route } from "react-router-dom";
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

const Twitter = () => {
  const [user, setUser] = useState({});
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");

  // Push Function
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const push = async () => {
    await addDoc(collection(db, "posts"), {
      post: newTweet,
      email: user.email,
    });
    window.location.reload();
  };

  const deletePost = async (postId) => {
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
      <input
        type="text"
        onChange={(event) => {
          setNewTweet(event.target.value);
        }}
      ></input>
      <button onClick={push}>Tweet</button>
      {tweets.map((tweet, counter) => {
        return (
          <div key={counter}>
            <input type="text" defaultValue={tweet.post} readOnly></input>
            {user ? (
              <>
                {" "}
                <button
                  className="btn btn-success"
                  onClick={() => deletePost(tweet.id)}
                >
                  delete
                </button>
                <Link to="/Editpage" className="btn btn-primary">
                  Edit
                </Link>
              </>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Twitter;
