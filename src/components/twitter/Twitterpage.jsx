import React, { Component, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, db } from "../../firebase-config";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import "../../App.css";

const Twitter = async () => {
  const [user, setUser] = useState({});
  const [posts, setPost] = useState([]);

  const querySnapshot = await getDocs(collection(db, "posts"));
  console.log(querySnapshot);
  await querySnapshot.docs.map((doc) => {
    // doc.data() is never undefined for query doc snapshots
    setPost((oldArray) => [...oldArray, doc?.data().post]);
  });
  console.log({ posts });
  return (
    <div className="app">
      {posts.map((post) => {
        return <div>{post}</div>;
      })}
    </div>
  );
};

export default Twitter;
