import { useState, useEffect, useContext } from "react"

import "./ProjectsList.css"
import LikeBlack from "../../assets/iconLikeBlack.svg"
import Like from "../../assets/iconLike.svg"
import Button from "../Button/Button"

// UTILS
import { getApiData } from "../../services/apiServices"
import { AppContext } from "../../contexts/AppContext"

const ProjectsList = () => {
    const appContext = useContext(AppContext)
    const [favProjects, setFavProjects] = useState([]);
    const [projects, setProjects] = useState([]);

    const handleSaveProject = (id) => {
            setFavProjects((prevFavProjects) => {
                if (prevFavProjects.includes(id)) {
                    const filterArray = prevFavProjects.filter((projectId) => projectId !== id);
                    sessionStorage.setItem("favProjects", JSON.stringify(filterArray));
                    return prevFavProjects.filter((projectId) => projectId !== id);
                } else {
                    sessionStorage.setItem("favProjects", JSON.stringify([...prevFavProjects, id]));
                    return [...prevFavProjects, id];
                }
            })
        }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData("projects")
                setProjects(projectsResponse)
            } catch {
                setProjects([])
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem("favProjects"));
        if (savedFavProjects) {
            setFavProjects(savedFavProjects);
        }
    }, [])

    return (
        <div className="projects-section">
            <div className="projects-hero">
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>
            <div className="projects-grid">
                {
                    projects ?
                    projects.map((projects) => (
                        <div 
                            key={projects.id}
                            className="project-card d-flex jc-center al-center fd-column"
                        >
                            <div 
                                className="thumb tertiary-background"
                                style={ { backgroundImage: `url(${projects.thumb})` } }
                            ></div>
                            <h3>{ projects.title }</h3>
                            <p>{ projects.subtitle }</p>
                            <Button buttonStyle="unstyled" onClick={() => handleSaveProject(projects.id)}>
                                <img src={favProjects.includes(projects.id) ? LikeBlack : Like} alt="Like icon"/>
                            </Button>
                        </div>
                    )) : null
                } 
            </div>
        </div>
    )
}

export default ProjectsList