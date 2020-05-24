import React, { Component } from 'react';
import {FaCheck,FaSpinner,FaTrash} from "react-icons/fa"
class ContentMid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item : []
        }
    }
    componentDidMount(){

        this.setState({
            item: [{...this.props.item}]
        })
    }
    clickOrder = () => {
        this.props.handleDone(this.props.item)
    }
    removeOrder=()=>{
        this.props.remove(this.props.item)
    }
    delayOrder  = () => {
        this.props.handleDelay(this.props.item)
    }
    render() {
        
        // console.log(this.props.item );
        const item = this.props.item;
        
        return (
            <>
            
                {item.status === 1 && 
                    <>
                        <div className="mid-mid-trai">
                        <div className="name">{item.nameUser} {item.ad} {item.sdt} {item.price + "K"}</div>
                        <div className="iconbox">
                        <div className="icon" onClick = {this.clickOrder} ><FaCheck /></div>
                        <div className="icon" onClick = {this.delayOrder}> <FaSpinner/></div>
                        </div>
                        </div>
                    </>
                }
                {item.status === 2 && 
                    <>
                        <div className="mid-mid-trai">
                            <div className="name">{item.nameUser} {item.ad} {item.sdt} {item.price + "K"}</div>
                            <div className="iconbox">
                        <div className="icon"><FaTrash onClick = {this.removeOrder} /></div>
                            </div>
                        </div>
                    </>
                }
                {item.status === 3 && 
                    <>
                        <div className="mid-mid-trai">
                            <div className="name">{item.nameUser} {item.ad} {item.sdt} {item.price + "K"}</div>
                            <div className="iconbox">
                        <div className="icon"><FaCheck onClick = {this.clickOrder} /></div>
                            </div>
                        </div>
                    </>
                }

      
        </>
        );
    }
}

export default ContentMid;