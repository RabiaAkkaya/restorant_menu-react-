import { sepeteEkle } from "./Functions";
function Card(props)
{
    return(
   
    <li >
        
        <div className="mx-5 my-2 p-2" style={{ border:"solid 1px ",borderRadius:"10px", width:"300px",height:"300px"}}>
        <img style={{ width:"100%",height:"50%"}} src={props.foto} />
            <p id="urun_baslik" style={{fontFamily:"monospace", fontSize:"30px"}}>{props.urun}</p>
            <p id="fiyat" style={{fontFamily:"monospace", fontSize:"20px"}} >{props.fiyat}</p>
         <button className="button btn btn-dark" type="button" onClick={()=>sepeteEkle(props.urun,props.fiyat)} >Sipariş Et</button>         

    </div>
    </li>
    
    );

}
export default Card;