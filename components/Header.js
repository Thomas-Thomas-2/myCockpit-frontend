//import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Header.module.css";

export default function Header({ login, username, logout }) {
  const handleClick = () => {
    logout();
  };

  return (
    <header className={styles.content}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <Image src="/favicon_test_1.ico" alt="Logo" width={35} height={35} />
        </Link>
      </div>
      <div className={styles.menu}>
        {!login && (
          <>
            <div className={styles.nav}></div>
            <div className={styles.profile}>
              <span className={styles.username}>{username || "-"}</span>
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className={styles.icon}
                onClick={() => handleClick()}
              />
            </div>
          </>
        )}
      </div>
    </header>
  );
}
