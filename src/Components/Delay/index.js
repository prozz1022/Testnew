import React, { Component } from 'react';
import ContentMid from "../ContentMid"
class Delay extends Component {
    render() {
        const list = this.props.listOders;
        const result = list.filter((item)=>{
            if(item.status === 3) return true;
        })
        return (
        <div className="mid-phai"> 
            <div className="top-mid">
            <h3>DELAY/CANCEL</h3>
            </div>
            {result.map((item,index) => (
                             <ContentMid item={item} key={index} index={index} handleOkOrder = {this.props.handleOkOrder}
                             handleDone = {this.props.handleDone}  handleDelay = {this.props.handleDelay} />
                        ))}
        
        </div>
        );
    }
}

export default Delay;