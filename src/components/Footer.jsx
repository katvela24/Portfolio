import { FaGithub, FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Footer = () => {
    return (
        <section className="card" id="footer">

            {/* TODO:finish styling */}
            {/* <h2 >Contact Me</h2> */}


            <div className="contactlinks" id="h2">

                <a href="tel:+1 201-776-9254"><FaPhone/>Phone</a>
                <a href="mailto: katvela@gmail.com"><MdEmail/>Email</a>
                <a href="https://github.com/katvela24/Katherine-Portfolio.git"><FaGithub/>GitHub </a>

            </div>

        </section>

    )
}

export default Footer