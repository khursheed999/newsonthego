import { useContext} from "react";
import { FaBars } from "react-icons/fa";
import { data } from "../../DataStore/data";
import ContextStore from "../ContextStore/ContextStore";
export default function NavBar() {
    const {setCategory,category,setCountry}=useContext(ContextStore);
    function changeCategory(cat){
       setCategory(cat);
    }
    function handleSelectChange(e){
      setCountry(e.target.value);
    }
    // const filteredCountry=data.filter(cty=>{return cty.code===country})
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand text-white fs-3" href="#">NewsApp</a>
      <select className="drop-down-menu border" onChange={handleSelectChange}>
               {data.map(cntry=>(
              <option
              key={cntry.id}
               value={cntry.code} className="option">{cntry.country}</option>

               ))}             
            </select>
      <button className="navbar-toggler  shadow-lg " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white fs-3">
            <FaBars/>
        </span>
      </button>
      <div className="navbar-tabs collapse navbar-collapse " id="navbarNavAltMarkup">
        <div className="navbar-nav  bg-primary  w-100 justify-content-evenly  fs-4 ">
          <a className={`nav-link ${category==='general'?"active-link":""}`} onClick={()=>changeCategory('general')}>General</a>
          <a className={`nav-link ${category==='business'?"active-link":""}`} onClick={()=>changeCategory('business')}>Business</a>
          <a className={`nav-link ${category==='health'?"active-link":""}`} onClick={()=>changeCategory('health')}>Health</a>

          <a className={`nav-link ${category==='science'?"active-link":""}`} onClick={()=>changeCategory('science')}>Science</a>

          <a className={`nav-link ${category==='sports'?"active-link":""}`} onClick={()=>changeCategory('sports')}>Sports</a>

                  <a className={`nav-link ${category==='technology'?"active-link":""}`} onClick={()=>changeCategory('technology')}>Technology</a>

                  <a className={`nav-link ${category==='entertainment'?"active-link":""}`} onClick={()=>changeCategory('entertainment')}>Entertainment</a>

        </div>
      </div>
     
    </div>
  </nav>
  )
}
