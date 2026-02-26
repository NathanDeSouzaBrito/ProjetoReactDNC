import { useEffect, useState, useContext } from "react"
import "./ContactForm.css"

import { AppContext } from "../../contexts/AppContext"

import Button from "../Button/Button"

const ContactForm = () => {
    const appContext = useContext(AppContext)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isFormValid, setIsFormValid] = useState(false)
    const [formSubmitLoading, setFormSubmitLoading] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (isFormValid) {
            setFormSubmitLoading(true)
            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...formData,
                        access_key: "84b027ae-9f01-4fd6-8856-98d37998019c"
                    })
                })

                if (response.ok) {
                    setFormSubmitted(true)
                } else {
                    console.error("Error submitting form:", response.statusText)
                }
            } catch (error) {
                console.error("Error submitting form:", error)
            } finally {
                setFormSubmitLoading(false)
            }
        }
    }

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        }

        const isValid = formData.name.trim() && 
        formData.email.trim() && 
        isValidEmail(formData.email) && 
        formData.message.trim()

        setIsFormValid(isValid)
    }, [formData])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div className="contact-form d-flex fd-column al-center">
            <h2>{appContext.languages[appContext.language].contact.title}</h2>
            <form onSubmit={handleSubmit}>
                <div className="d-flex form-group">
                    <input
                        className="form-input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder={appContext.languages[appContext.language].contact.pl1}
                        onChange={handleChange}
                    />
                    <input
                        className="form-input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder={appContext.languages[appContext.language].contact.pl2}
                        onChange={handleChange}
                    />
                </div>
                <div className="d-flex form-group">
                    <textarea
                        className="form-input"
                        id="message"
                        name="message"
                        placeholder={appContext.languages[appContext.language].contact.pl3}
                        onChange={handleChange}
                        rows="4"
                    ></textarea>
                </div>
                <div className="al-center d-flex jc-end form-group">
                    {formSubmitted && <p>{appContext.languages[appContext.language].contact.successMsg}</p>}
                    <Button type="submit" buttonStyle="secondary" disabled={!isFormValid || formSubmitLoading}>
                        {appContext.languages[appContext.language].general.send}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm