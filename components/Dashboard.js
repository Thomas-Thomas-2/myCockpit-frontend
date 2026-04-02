import styles from "../styles/Dashboard.module.css";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { checkConnectionNeed } from "../modules/checkConnectioNeed";
import ModalAddProject from "./ModalAddProject";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [modalAddProject, setModalAddProject] = useState(false);
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const data = await checkConnectionNeed(router);
      if (data) {
        setUsername(data);
      }
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`,
          {
            method: "GET",
            credentials: "include",
          },
        );
        const data = await response.json();
        data.result ? setProjects(data.projects) : alert(data.error);
      } catch (error) {
        console.error("Error", error);
        alert("Error to get projects.");
      }
    })();
  }, []);

  const logout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/logout`,
        {
          method: "POST",
          credentials: "include",
        },
      );
      if (response.ok) {
        router.replace("/");
      }
    } catch (error) {
      console.error("Error", error);
      alert("Server error");
    }
  };

  const onClose = () => {
    setModalAddProject(false);
  };

  const handleAddProject = async (projectData) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projectData),
        },
      );

      const data = await response.json();

      if (data.result) {
        console.log("data", data);
        setProjects([...projects, data.project]);
      } else {
        alert(`Erreur : ${data.error}`);
      }
    } catch (error) {
      console.error("Error :", error);
      alert("Error when creating project.");
    }
  };

  const handlePatchProject = async (projectData) => {
    try {
      alert("Feature creation ongoing, try later.");
    } catch (error) {
      console.error("Error :", error);
      alert("Error when modifying project.");
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${projectId}`,
        {
          method: "DELETE",
          credentials: "include",
        },
      );

      const data = await response.json();
      data.result
        ? setProjects((elem) => elem.filter((proj) => proj._id !== projectId))
        : alert(data.error);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error while deleting ressources.");
    }
  };

  const projectsList = projects?.map((data, i) => (
    <ProjectCard
      key={`${data.title}-${i}`}
      _id={data._id}
      title={data.title}
      sportTeam={data.sportTeam}
      slug={data.slug}
      kickOffDate={data.kickOff}
      feasiDate={data.feasiOk}
      creaDate={data.creaOk}
      selecDate={data.selectionOk}
      shipDate={data.shipmentOk}
      indus={data.industrialisation}
      kickOffIndusDate={data.kickOffIndus}
      goIndusDate={data.goIndus}
      trialRunDate={data.trialRun}
      pilotRunDate={data.pilotRun}
      goProdDate={data.goProd}
      handlePatchProject={handlePatchProject}
      handleDeleteProject={handleDeleteProject}
    />
  ));

  return (
    <div className={styles.content}>
      <Head>
        <title>MyCockpit - Dashboard </title>
      </Head>
      <Header login={false} username={username} logout={logout} />
      <main className={styles.main}>
        <div className={styles.titlePage}>
          <p className={styles.title}>FOLLOW MY PROJECTS</p>
        </div>
        <div className={styles.section}>
          <FontAwesomeIcon
            icon={faPlus}
            className={styles.icon}
            onClick={() => setModalAddProject(true)}
          />
          <div className={styles.projectSection}>{projectsList}</div>
        </div>
      </main>
      <Footer />
      {modalAddProject && (
        <ModalAddProject
          onClose={onClose}
          handleAddProject={handleAddProject}
        />
      )}
    </div>
  );
}
