import React from 'react'


export default function Alerts(props) {
    const capital=(text)=>{
        const a=text.toLowerCase();
        return a.slice(0,1).toUpperCase()+a.slice(1);

    }



  return (

    <div style={{height:"80px"}}>


   {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capital(props.alert.text)}</strong> 
</div>}
</div>
  )
}
