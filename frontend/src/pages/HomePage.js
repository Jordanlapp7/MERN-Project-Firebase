function HomePage () {
    return (
        <>
            <h2>Web Dev Portfolio</h2>
            <article>
                <p>
                My academic path began at Carnegie Mellon University with an undergraduate degree in biological science and a focus on computer science.
                During my tenure at the university, I had the opportunity to enroll in a number of world-class computer science courses; 
                This exposure inspired me to fully pursue the field of computer science.
                </p>
                <p>
                After completing my degree in biology, I enrolled in a second degree at Oregon State University for computer science, with the objective of bolstering the foundational skills I had developed at Carnegie Mellon. 
                Currently, I am actively seeking internship opportunities for the summer of 2024, excited to apply my knowledge and skills in a practical setting and to continue advancing in my professional journey.
                </p>
            </article>
            <p>
                A handful of technologies were utilized in the creation of this website:
            </p>
            <ul>
                <li>
                    MongoDB is used as the primary database to store and manage the application's data. 
                    It is not available on this build due to incompatibility with Firebase, but the source code is still available on the <a href="https://github.com/Jordanlapp7/MERN-project-firebase" target="_blank" rel="noopener noreferrer">Github repo</a>.
                </li>
                <li>
                    Express.js is the backend framework for the application. 
                    It handles requests and responses between the front end and the MongoDB database.
                </li>
                <li>
                    React is the front end framework that allows for a responsive user interface. 
                    This website is an SPA, where page transitions appear seamless to the user without the need for full-page reloads.
                </li>
                <li>
                    Node.js is the runtime environment.
                    It enables server logic in JavaScript and allows for a cohesive development experience between the front and back ends.
                </li>
            </ul>
        </>
    )
}

export default HomePage