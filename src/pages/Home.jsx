import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import ProjectsList from "../components/ProjectsList/ProjectsList"

const Home = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Hero />
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}

export default Home