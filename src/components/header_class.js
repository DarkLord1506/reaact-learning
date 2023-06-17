import React,{Component} from "react"



class Header extends Component{

    state = {
        title: 'The keywords are: ',
        keywords: '',
        count: 0
    }
    
    inputChange = (event) =>{
        this.setState({
            keywords: event.target.value
        })
    }

    addOne(){
        this.setState(
            {count: this.state.count +1}
        )
    }
    addOneNewWay(){
        this.setState((state,props)=>({
            count: state.count + 1
        }))
    }
    
    


    render(){
        console.log(this.state)
        return (
            <>
            <header> 
                <div className="logo" onClick={()=>{console.log('I was clicked')}}>Logo</div>
                <input onChange={(e)=>this.inputChange(e)}/>
                <br/>
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
                <div>{this.state.count}</div>
                <button onClick={()=>this.addOneNewWay()}>Add One</button>
            </header>
            </>
        )
    }
}

class Header2 extends Component{

    state = {
        title: 'The keywords are: ',
        keywords: '',
        count: 0,
        active: 'active'
    }  
    inputChange = (event) =>{
        const value = event.target.value === ''? false: event.target.value;
        this.setState({
            active:value,
            keywords: event.target.value
        })
    }
    changeColor(){
        this.setState({
            active: this.state.active === 'active' ? 'not-active': 'active'
        })
    }


    render(){
        return (
            <>
            {/* <header style={{background:`${this.state.active ? 'red':'blue'}`}}></header> */}
            <header className={this.state.active}> 
                <div className="logo" onClick={()=>{console.log('I was clicked')}}>Daily News</div>
                <input onChange={(e)=>this.inputChange(e)}/>

                <button onClick={()=>this.changeColor()}>Change it</button>
            </header>
            </>
        )
    }
}

export default Header2