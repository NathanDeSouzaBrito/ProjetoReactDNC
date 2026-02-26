import "./LoadingSpinner.css"
import Loading from "../../assets/loading.gif"

const LoadingSpinner = () => {
    return (
        <div className="d-flex al-center jc-center loading-overlay-container">
            <img src={Loading} alt="Loading..." height="80px"/>
        </div>
    )
}

export default LoadingSpinner