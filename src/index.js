import { createRoot } from "react-dom/client";

const root=createRoot(document.getElementById("root"));

function Chocolates() //compnent  //component name always uppercase //provide reusability

{
    const randomnumber=Math.floor(Math.random() *10)  //random function
    return <h4>Munch{randomnumber}</h4>
}

const Choco=()=>

    {  //arrow function
    const randomnumber=Math.floor(Math.random() *10)
     return <h4>Chocochips</h4>
}

const Chocolate=(props)=>

 {  
   return(
     <>
     <h4>{props.name} - {props.emogi}</h4>
    <hr></hr>
     </>)
}

const Cake=({name,emogi})=>{
      return(
        <>
        <h4>{name}-{emogi}</h4>
       <hr></hr>
        </>)
   }

root.render
(
<>
<h4>-----------------All chocolates-------------------</h4>
<Chocolates/>{/* callling component */}
<Chocolates/>
<Chocolates/>

<h4>****************All chocos**************</h4>
<Choco/>  
<h4>__________________All cadburry______________</h4>
<Chocolate name="Dairy Milk"  emogi="🥛"/>
<Chocolate name="Kitkat"  emogi="🍫"/>
<Chocolate name="5 start" emogi="🍭"/>

<h4>!!!!!!!!!!!!!!!! All cakes !!!!!!!!!!!!!!!!</h4>
<Cake name="Ice cake" emogi="🎂"/>
<Cake name="Pinapple cake" emogi="🍰"/>
</>
);