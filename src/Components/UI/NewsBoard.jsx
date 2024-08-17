import { useContext } from "react"
import ContextStore from "../ContextStore/ContextStore"
import Card from "./Card";
export default function NewsBoard() {
  const {article}=useContext(ContextStore);
  console.log(article);
  return (
    <div className=" news-board container-fluid ">

      {article? 
       <div>
    {
      article.map((item,index)=>(<Card
        key={index}
        title={item.title}
        description={item.description}
        url={item.url}
        imgUrl={item.urlToImage}/>))

    }
       </div>
       :
       <div className="spinner-border m-5" role="status">
       <span className="visually-hidden">Loading...</span>
     </div>
    }
  </div>



    
    
  
  )
}
