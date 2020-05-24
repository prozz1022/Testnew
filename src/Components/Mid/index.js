import React, { Component } from 'react';
import ContentMid from "../ContentMid"
class Mid extends Component {
    
    render() {
        const list = this.props.listOders;
        const result = list.filter((item)=>{
            if(item.status === 1) return true;
        })
        return (
            <>
            
                <div className="mid-2">
                    <div className="mid-trai">
                        <div className="top-mid">
                        <h3>ĐƠN HÀNG CHỜ</h3>
                        </div>
                        
                        {result.map((item,index) => (
                             <ContentMid item={item} key={index} index={index} handleOkOrder = {this.props.handleOkOrder}
                             handleDone = {this.props.handleDone}  handleDelay = {this.props.handleDelay} />
                        ))}
                    </div>
                    
                 </div>
          
                    
    </>
        );
    }
}

export default Mid;