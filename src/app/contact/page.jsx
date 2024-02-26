"use client"

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

// export const metadata = {
//   title: "NexTech Contact",
//   description: "Let's Get Connected ",
// }

function Contact() {

  const [text, setText] = useState("send")
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    console.log("hiiii")

    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    console.log(name,email,message)

    try {
      const res = await fetch("http://localhost:3000/api/connect", {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            message,
          }),
      })
      setText("sent");
      mutate();
      e.target.reset() && router.push("/");
      res.status === 201 
    } catch (error) {
      setError(error);
      console.log(error);
    }

  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="NexTech"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" placeholder="name" className={styles.input}/>
          <input type="text" placeholder="email" className={styles.input}/>
          <textarea className={styles.textArea} placeholder="message" cols="30" rows="10" ></textarea>
          <button className={styles.button}>{text}</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
