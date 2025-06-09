function IconBtn(props){

    return(
        <a href={props.ref} target="_blank">
            <button>
                <img src={props.icon}/>
                {props.text}
            </button>
        </a>
    )
}

export default IconBtn;