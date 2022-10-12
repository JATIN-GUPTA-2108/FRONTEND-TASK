import Group1 from "./components/group1";
import Group2 from "./components/group2";
import Group3 from "./components/group3";
import Navbar from "./components/navbar";
import Group4 from "./components/group4";
function App() {
  return (
    <div style={{"backgroundColor":"#D3D3D3 "}} >
      <Navbar />
      <div className="mt-4 ml-lg-5 ">
      <b>

      Welcome Back  , Harshita!
      </b>
      <br />
      How are we Edvolving today?
      </div>
      <div className=" ml-lg-5 mt-4 p-3" >
        <div className="row justify-content-start">
          <div className="col-md-7 col-md-push-7 mr-lg-4 pb-4"style={{"backgroundColor":"white"}}>
<div className="mt-4 mb-4">

          <b>Your upcoming experiences</b>
</div>
           <Group1 />
          </div>
          <div className="col-md-4 col-md-pull-4 mb-3 h-50 mt-4 pb-5 pt-4"style={{"backgroundColor":"white" , "paddingBottom":"0px"}}>
<div className="mt-2">

          <b>Your Stats</b>
</div>

           <Group2 />
          </div>
          
        </div>
      </div>
      <div className="ml-lg-5 p-3">
        <div className="row justify-content-start">
          <div className="col-md-7 col-md-push-7 mt-5 mr-lg-4 mb-5 "
          style={{"backgroundColor":"white"}} 
          >
          <div  className="mt-3 mb-3"  >
          <b>Your upcoming classes of course </b>
          </div>
            


            <Group3 />
          </div>
          <div className="col-md-4 col-md-push-4 pt-4 mb-5 pb-5"
          style={{"backgroundColor":"white"}}
          >
          <div  className="mb-3"  >

          <b>New mentors on Edvolve</b>
</div>
           <Group4 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
