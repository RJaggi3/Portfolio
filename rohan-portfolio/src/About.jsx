import './About.css'
import IconBtn from './IconBtn'

function About(){
    
    return(
    <div id="about">
        <p id="text">Hello, I'm Rohan Jaggi</p>

        <IconBtn text="Linkedln" icon="\icons\linkedin_icon.svg" ref="https://www.linkedin.com/in/rohan-jaggi-bba884247/"/>
        <IconBtn text="Github" ref="https://github.com/RJaggi3" icon="\icons\github_icon.svg"/> 
        <IconBtn text="Email" ref="mailto:rohanjaggi3@gmail.com" icon="\public\icons\mail_icon.svg"/> 

    </div>
    )
}

export default About