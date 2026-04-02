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

// Fake data
// const projects = [
//   {
//     _id: "123456",
//     title: "Trot cool",
//     sport: "Freestyle",
//     slug: "trot_cool",
//     kickOff: "2023-10-12",
//     feasiOk: "2023-02-01",
//     creaOk: "2022-10-01",
//     selectionOk: "2023-10-15",
//     shipmentOk: "2023-10-19",
//     industrialisation: true,
//     kickOffIndus: "2023-11-01",
//     goIndus: "2024-10-01",
//     trialRun: "2023-12-01",
//     pilotRun: "2023-10-08",
//     goProd: "2023-08-01",
//     status: "late",
//   },
//   {
//     _id: "512436",
//     title: "chaise bien",
//     sport: "camping",
//     slug: "chaise_bien",
//     kickOff: "2023-10-12",
//     feasiOk: "2023-02-01",
//     creaOk: "2022-10-01",
//     selectionOk: "2023-10-15",
//     shipmentOk: "2023-10-19",
//     industrialisation: false,
//     kickOffIndus: null,
//     goIndus: null,
//     trialRun: null,
//     pilotRun: null,
//     goProd: null,
//     status: "late",
//   },
// ];

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [modalAddProject, setModalAddProject] = useState(false);
  const [username, setUsername] = useState("");
  const [flag, setFlag] = useState(true);
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
  }, [flag]);

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
        setFlag(!flag);
      }
    } catch (error) {
      console.error("Error", error);
      alert("Server error");
    }
  };

  const handleAddProject = async (projectData) => {
    try {
      console.log("test", projectData);
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

  const projectsList = projects?.map((data, i) => (
    <ProjectCard
      key={`${data.title}-${i}`}
      id={data._id}
      title={data.title}
      sport={data.sport}
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
          onClose={() => setModalAddProject(false)}
          handleAddProject={handleAddProject}
        />
      )}
    </div>
  );
}
