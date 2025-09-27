import './Projects.css'
import './About.css'

function Projects(){
    
    return(
    <div id="page" className='Projects-page'>
        <h1 className="text">Featured Projects</h1>
        <div id="project-container">
            <div className='project-card'>
                <p id="card-heading"> Resume Builder</p>
                <p id="card-desc">A webapp to create & modify resumes</p>
                <img id="card-img" src="\projects\Resume_Builder.png"/>

            </div>
            <div className='project-card'>
                <p id="card-heading"> Resume Builder</p>
                <p id="card-desc">A webapp to create & modify a resume</p>
                <img id="card-img" src="\projects\Resume_Builder.png"/>

            </div>
            <div className='project-card'>
                <p id="card-heading"> Resume Builder</p>
                <p id="card-desc">A webapp to create & modify a resume</p>
                <img id="card-img" src="\projects\Resume_Builder.png"/>

            </div>
            <div className='project-card'>
                <p id="card-heading"> Resume Builder</p>
                <p id="card-desc">A webapp to create & modify a resume</p>
                <img id="card-img" src="\projects\Resume_Builder.png"/>

            </div>
            
        </div>
    </div>
    )
}

export default Projects
