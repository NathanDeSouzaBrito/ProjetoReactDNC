import { useState, useEffect, useContext } from "react"

import "./ProjectsList.css"
import LikeBlack from "../../assets/iconLikeBlack.svg"
import Like from "../../assets/iconLike.svg"

// UTILS
import { getApiData } from "../../services/apiServices"
import { AppContext } from "../../contexts/AppContext"

const ProjectsList = () => {
    const appContext = useContext(AppContext)

    const [projects, setProjects] = useState([]);

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
                            <img src={Like} alt="Like icon"/>
                        </div>
                    )) : null
                } 
            </div>
        </div>
    )
}

export default ProjectsList