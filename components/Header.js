//import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Header.module.css";

export default function Header({ login, username, logout, team, leader }) {
  const router = useRouter();

  const handleClick = () => {
    logout();
  };

  return (
    <header className={styles.content}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <Image src="/favicon_test.svg" alt="Logo" width={35} height={35} />
        </Link>
      </div>
      {!login && (
        <>
          <div className={styles.nav}>
            <Link href="/dashboard">
              <p
                className={`${styles.pageTitle} ${router.pathname === "/dashboard" ? styles.active : ""}`}
              >
                Dashboard
              </p>
            </Link>
            <Link href="/kpi">
              <p
                className={`${styles.pageTitle} ${router.pathname === "/kpi" ? styles.active : ""}`}
              >
                KPI
              </p>
            </Link>
          </div>

          <div className={styles.menu}>
            <div className={styles.profile}>
              <span className={styles.username}>{username || "-"}</span>
              <button
                type="button"
                className={styles.btn}
                title="Log out"
                aria-label="Log out"
              >
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className={styles.icon}
                  onClick={() => handleClick()}
                />
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
