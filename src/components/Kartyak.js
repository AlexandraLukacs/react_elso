import Kartya from "./Kartya";

export default function Kartyak(props){
    function kattKez(adat){
        console.log()
        props.kattKez(adat)
    }
    return(
        <>
        {props.lista.map((elem, index)=>{
              return <Kartya obj={elem} key={index} kattKez={kattKez} />;
        })}
        </>
    )
}