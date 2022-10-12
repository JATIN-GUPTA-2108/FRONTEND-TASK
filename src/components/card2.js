function Card2(props){
    return(
        <div className="card mt-4  "
        style={{"backgroundColor":"D3D3D3"}}
        
        >


          <h5 className="card-title mx-auto">{props.title}</h5>

        <div className="card-body"

        >
          <small className="">{props.footer}</small>
        </div>
      </div>
    )
}
export default Card2