function Card(props){
    return(

<div className="card">
                <img src={props.im} className="card-img-top" alt="..." width={"50%"} />
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">
                    {props.body}
                  </p>
                </div>
                <div className="card-footer border-0"
                style={{"backgroundColor":"white"}}
                 >
                  <button  className="">{props.footer}</button>
                </div>
              </div>
    )}
    export default Card