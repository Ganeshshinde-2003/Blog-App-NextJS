import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

function BlogPost() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>TITLE</h1>
          <p className={styles.desc}>somttikfnafa</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="NexTech"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.userName}>Ganesh Shinde</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="NexTech" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          something
        </p>
      </div>
    </div>
  );
}

export default BlogPost;
