import styles from "../styles/Kpi.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { checkConnectionNeed } from "../modules/checkConnectioNeed";

export default function Kpi() {
  const [projects, setProjects] = useState([]);
  const [modalAddProject, setModalAddProject] = useState(false);
  const [modalModifyProject, setModalModifyProject] = useState(false);
  const [projectDataPatch, setProjectDataPatch] = useState({});
  const [username, setUsername] = useState("");
  const [team, setTeam] = useState("");
  const [leader, setLeader] = useState(false);
  const [flag, setFlag] = useState(false);
  const [statusFilter, setStatusFilter] = useState("status");
  const [sportFilter, setSportFilter] = useState("sport");
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const data = await checkConnectionNeed(router);
      if (data) {
        setUsername(data.username);
        setTeam(data.team);
        setLeader(data.leader);
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
        setProjects([...projects, data.project]);
      } else {
        alert(`Error : ${data.error}`);
      }
    } catch (error) {
      console.error("Error :", error);
      alert("Error when creating project.");
    }
  };

  const openModalModify = (projectData) => {
    setProjectDataPatch(projectData);
    setModalModifyProject(true);
  };

  const handlePatchProject = async (projectData) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${projectData.id}`,
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projectData),
        },
      );

      const data = await response.json();

      if (data.result) {
        setProjects((projects) =>
          projects.map((proj) =>
            proj.id === data.project.id ? data.project : proj,
          ),
        );
      } else {
        alert(`Error : ${data.error}`);
      }
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
        ? setProjects((elem) => elem.filter((proj) => proj.id !== projectId))
        : alert(data.error);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error while deleting ressources.");
    }
  };

  const changeRole = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/role`,
        {
          method: "PATCH",
          credentials: "include",
        },
      );

      const data = await response.json();
      data.result ? setFlag(!flag) : alert(data.error);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error while modifying role.");
    }
  };

  const filteredProjects = projects.filter((project) => {
    const checkStatus =
      statusFilter === "status" || project.status === statusFilter;
    const checkSport =
      sportFilter === "sport" || project.sportTeam === sportFilter;
    return checkStatus && checkSport;
  });

  return (
    <div className={styles.content}>
      <Head>
        <title>MyCockpit - KPI </title>
      </Head>
      <Header login={false} username={username} logout={logout} />
      <main className={styles.main}>
        <div className={styles.titlePage}>
          <p className={styles.title}>KPI</p>
        </div>
        <div className={styles.section}>
          <div className={styles.info}>
            <p className={styles.infoText}>My team : {team}</p>
            <p className={styles.infoText}>
              My role : {leader ? "Leader" : "Teammate"}
            </p>
          </div>

          <div className={styles.kpiSection}>Under construction...</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
