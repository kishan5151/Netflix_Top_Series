const Chack=(props)=>{
    return(
        <div className="parti">
            <input type="radio"
              value={props.value}
              name="series"
              onChange={props.selected}
            />
             <label>{props.media}</label>
        </div>
    )
}

export default Chack;