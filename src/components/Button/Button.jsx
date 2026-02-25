import iconArrow from "../../assets/iconArrow.svg"
import "./Button.css"


const Button = ({ arrow, buttonStyle, loading, children, ...props }) => {
    return (
        <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={iconArrow} alt="ícone de seta" />}
        </button>
    )
}

export default Button