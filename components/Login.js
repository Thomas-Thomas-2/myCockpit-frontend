import styles from "../styles/Login.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { checkConnectionNeed } from "../modules/checkConnectioNeed";

export default function Login() {
  const [username, setUsername] = useState("");
  const [emailSignup, setEmailSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [passwordSignupConfirm, setPasswordSignupConfirm] = useState("");
  const [showPwdSignup, setShowPwdSignup] = useState(false);
  const [showPwdSignupConfirm, setShowPwdSignupConfirm] = useState(false);
  const [emailSignin, setEmailSignin] = useState("");
  const [passwordSignin, setPasswordSignin] = useState("");
  const [showPwdSignin, setShowPwdSignin] = useState(false);

  const router = useRouter();

  console.log("Dev branch");

  useEffect(() => {
    (async () => {
      await checkConnectionNeed(router);
    })();
  }, []);

  const handleSignup = async () => {
    try {
      if (
        !username ||
        !emailSignup ||
        !passwordSignup ||
        !passwordSignupConfirm ||
        passwordSignup !== passwordSignupConfirm
      ) {
        return alert("Input data missing or mistake, please check.");
      } else {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/signup`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              email: emailSignup,
              password: passwordSignup,
            }),
          },
        );

        const data = await response.json();

        if (data.result) {
          router.replace("/dashboard");
        } else {
          alert(`Error : ${data.error}`);
        }
      }
    } catch (error) {
      console.error("Server error :", error);
      alert("Error to connect to server.");
    }
  };

  const handleSignin = async () => {
    try {
      if (!emailSignin || !passwordSignin) {
        return alert("Input data missing or mistake, please check.");
      } else {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/signin`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: emailSignin,
              password: passwordSignin,
            }),
          },
        );

        const data = await response.json();

        if (data.result) {
          router.replace("/dashboard");
        } else {
          alert(`Error : ${data.error}`);
        }
      }
    } catch (error) {
      console.error("Server error :", error);
      alert("Error to connect to server.");
    }
  };

  return (
    <div className={styles.content}>
      <Head>
        <title>MyCockpit - Login </title>
        <meta
          name="signup"
          content="Welcome to MyCockpit, your daily tool to help you to manage your activity as a Method Engineer!"
        />
      </Head>
      <Header login={true} />
      <main className={styles.main}>
        <div className={styles.titlePage}>
          <p className={styles.title}>
            Welcome to MyCockpit, your daily tool to help you to manage your
            activity!
          </p>
        </div>
        <div className={styles.section}>
          <div className={styles.signSection}>
            <div className={styles.subtitle}>SIGN UP</div>
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
              value={username}
              maxLength={20}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              value={emailSignup}
              onChange={(e) => setEmailSignup(e.target.value)}
            />
            <div className={styles.mainPassword}>
              <input
                className={styles.inputPassword}
                type={showPwdSignup ? "text" : "password"}
                placeholder="Password"
                value={passwordSignup}
                minLength={10}
                onChange={(e) => setPasswordSignup(e.target.value)}
              />
              {!showPwdSignup ? (
                <FontAwesomeIcon
                  icon={faEye}
                  className={styles.icon}
                  onClick={() => setShowPwdSignup(true)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className={styles.icon}
                  onClick={() => setShowPwdSignup(false)}
                />
              )}
            </div>
            <div className={styles.checkPasswordSection}>
              <div className={styles.checkPasswordLine}>
                <input
                  className={styles.inputPassword}
                  type={showPwdSignupConfirm ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={passwordSignupConfirm}
                  minLength={10}
                  onChange={(e) => setPasswordSignupConfirm(e.target.value)}
                />
                {!showPwdSignupConfirm ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    className={styles.icon}
                    onClick={() => setShowPwdSignupConfirm(true)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className={styles.icon}
                    onClick={() => setShowPwdSignupConfirm(false)}
                  />
                )}
              </div>
              {passwordSignup !== passwordSignupConfirm && (
                <div className={styles.alert}>Passwords doesn't match</div>
              )}
            </div>

            <button className={styles.btn} onClick={handleSignup}>
              Sign up
            </button>
          </div>

          <div className={styles.signSection}>
            <div className={styles.subtitle}>SIGN IN</div>
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              value={emailSignin}
              onChange={(e) => setEmailSignin(e.target.value)}
            />
            <div className={styles.mainPassword}>
              <input
                className={styles.inputPassword}
                type={showPwdSignin ? "text" : "password"}
                placeholder="Password"
                value={passwordSignin}
                minLength={10}
                onChange={(e) => setPasswordSignin(e.target.value)}
              />
              {!showPwdSignin ? (
                <FontAwesomeIcon
                  icon={faEye}
                  className={styles.icon}
                  onClick={() => setShowPwdSignin(true)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className={styles.icon}
                  onClick={() => setShowPwdSignin(false)}
                />
              )}
            </div>
            <button
              className={styles.btn}
              // disabled={!passwordSignin || emailSignin}
              onClick={handleSignin}
            >
              Sign in
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
