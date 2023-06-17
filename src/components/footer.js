import React,{Component} from "react";

//we don;t need to use props argument in case of class based component

class Footer extends Component{
    //for adding constructor we need to call super
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
        return(
            <footer>
                {this.props.text}
            </footer>
        )
    }
}
export default Footer;