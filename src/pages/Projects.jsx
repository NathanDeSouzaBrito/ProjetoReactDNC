import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import ProjectsList from "../components/ProjectsList/ProjectsList"

const Projects = () => {
    return (
        <>
            <Header />
            <Banner title="Projects" image="imgProjects.png"/>
            <div className="container">
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}

export default Projects