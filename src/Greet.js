import React, { Component } from 'react'
class greet extends React.Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
   sls(){this.setState({
        count:this.state.count+1
    
       },()=>console.log(this.state.count))}
inc(){
    this.setState((prev)=>({
        count:prev.count+1
    
    }))
}
incFive(){
    this.inc()
    this.inc()
    this.inc()
    this.inc()
    this.inc()
}
        dec(){this.setState({
            count:this.state.count-1
        
            },()=>console.log(this.state.count))}
render(){
    return(<div> <h1>count--!{this.state.count}</h1>
    <button onClick={()=>{this.sls ()}}>Increment</button>
    <button onClick={()=>{this.dec()}}>decrement</button>
    <button onClick={()=>{this.incFive()}}> fiveIncrement</button></div>)
}


}
export default greet