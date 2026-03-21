//import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Header.module.css";

export default function Header() {
  useEffect(() => {}, []);

  return (
    <header className={styles.content}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <Image src="/favicon_test_1.ico" alt="Logo" width={50} height={50} />
        </Link>
      </div>
      <div className={styles.menu}>
        <div className={styles.profileMenuWrapper}>
          <button type="button" className={styles.btnParameters}>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={styles.chevronIcon}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
