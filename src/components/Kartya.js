import "../css/Kartya.css"

export default function Kartya(props){
    function kattKez(){
        console.log(props.obj)
        props.kattKez(props.obj)
    }
    return(
        <div className="card">
            <h3>{props.obj.cim}</h3>
            <p>{props.obj.leiras}</p>
            <button onClick={()=>{kattKez()}}>Kiválaszt</button>
        </div>
    );
}