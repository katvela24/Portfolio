const Projects = () => {
    return (
        <section className="card" id="projects">
            <h2> Collaborative Projects</h2>

            <p className="projects">

                Welcome to my ever-growing coding and technical portfolio page! Checkout these collaborative projects using the latest technology.
            </p>

            <h3>Hike to Learn</h3>
            <p>
                A playful and innovative online platform where the thrill of hiking meets the joy of learning, all in the comfort of your own home or classroom.<br>
                </br>Imagine a website that transforms your screen into a vibrant trail, guiding you through lush landscapes of knowledge with every click.
            </p>
            <br></br>

            <div className="projects-grid item3">
                <img src="./assets/hiketolearn.png" alt="A flashcards website" />
                <div className="project-content">


                </div>

            </div>

            <br></br>
            <br></br>

            <h3>Radio Repertoire</h3>
            <p>
                Our team was tasked with creating an interactive online application that satisfies the below acceptance criteria:

                Uses at least two server-side APIs,<br>
                </br>uses client-side storage to store persistent data,uses at least one modal,uses a CSS framework<br>
                </br> other than Bootstrap (we picked Materialize).
                Is interactive (accepts and responds to user input).
            </p>


            <div className="projects-grid item3">
                <a href="https://github.com/katvela24/radio_repertoire">

                    <img src="./assets/radiorep.png" alt="A radio browser" />
                    <div className="project-content">


                    </div>

                </a>

            </div>

            <br></br>
                <br></br>

            <h3>Search Engine Optimization (SEO) Refactoring Exercise</h3>
            <p>
                
            </p>

            <div className="projects-grid-wrapper">
                <div className="projects-grid item1">
                    <a href="https://katvela24.github.io/Refracting-exercises-with-HTML-CSS/">
                        {/* <img src="./Assets/Images/digital-marketing-meeting.jpg" alt="Horiseon" /> */}
                        <div className="project-content">

                        </div>
                    </a>

                </div>

                <br></br>
                <br></br>

                <h3>JavaScript Password Generator</h3>
                <p>
                    
                </p>

                <div className="projects-grid item2">
                    {/* <img src="./Assets/Images/JS.jpeg" alt="JavaScript" /> */}
                    <div className="project-content">

                    </div>

                </div>

                <br></br>
                <br></br>

                <h3>Future Project: (TBD)</h3>
                <p>

                </p>

                <div className="projects-grid item4">
                    {/* <img src="" alt="California" /> */}
                    <div className="project-content">


                    </div>

                    <br></br>
                    <br></br>

                </div>

                <h3>Future Project: (TBD)</h3>
                <p>

                </p>

                <div className="projects-grid item5">
                    {/* <img src="" /> */}
                    <div className="project-content">

                    </div>


                </div>

            </div>

        </section>

    )
}

export default Projects