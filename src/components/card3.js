
function Card3(props){
  return(

    <div className="card mb-3"
  >
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={props.im} className="card-img" alt="..."width={"50%"}  />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <p className="card-text"><small className="text-muted">{props.low}</small></p>
      </div>
    </div>
  </div>
</div>
    )
}
export default Card3;