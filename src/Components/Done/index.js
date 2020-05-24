import React, { Component } from 'react';
import ContentMid from '../ContentMid';

class Done extends Component {
    render() {
        const list = this.props.listOders;
        const result = list.filter((item)=>{
            if(item.status === 2) return true;
        })
        return (
            <>
            <div className="mid-phai"> 
        <div className="top-mid">
          <h3>ĐƠN HÀNG ĐÃ HOÀN THÀNH</h3>
        </div>
        {result.map((item,index) => (
            <ContentMid item={item} key={index} index={index} remove = {this.props.remove}/>
        ))}
        
        </div>
        </>
        );
    }
}

export default Done;