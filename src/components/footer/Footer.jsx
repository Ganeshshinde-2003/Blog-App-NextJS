import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 NexTech, All rights reserved.</div>
      <div className={styles.social}>
        <Link href="https://www.linkedin.com/in/dev-ganesh-shinde/">
          {" "}
          <Image
            src="/git.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="NexTech"
          />
        </Link>
        <Link href="https://www.instagram.com/gani_shinde20/">
          {" "}
          <Image
            src="/2.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="NexTech"
          />
        </Link>
        <Link href="https://twitter.com/Gani_Shinde">
          {" "}
          <Image
            src="/3.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="NexTech"
          />
        </Link>
        <Link href="https://github.com/Ganeshshinde-2003">
          {" "}
          <Image
            src="/linkedin.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="NexTech"
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
