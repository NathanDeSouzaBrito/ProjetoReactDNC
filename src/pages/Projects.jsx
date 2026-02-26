import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import ProjectsList from "../components/ProjectsList/ProjectsList"

import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

const Projects = () => {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.projects} image="imgProjects.png"/>
            <div className="container">
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}

export default Projects