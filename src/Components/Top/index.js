import React from 'react';
import styled from 'styled-components';

class Top extends React.Component {
    constructor(){
        super();
        this.name = React.createRef();
        this.price = React.createRef();
        this.phone = React.createRef();
        this.ad = React.createRef();
    }
    addOrder = ()=>{
        let name = this.name.current.value;
        let price = this.price.current.value;
        let phone = this.phone.current.value;
        let ad = this.ad.current.value;
        this.props.addOrderItem(name,price,phone,ad)
    }
    render() {
        return (
            <>
                <H2>Quản lý giao hàng</H2>
                <div className="mid-1">
                    <input type="text" ref = {this.name} placeholder="TÊN, ĐỊA CHỈ NHẬN" />
                    <input type="text" ref = {this.price} placeholder="SỐ TIỀN" />
                    <input type="text" ref = {this.phone} placeholder="Phone" />
                    <input type="text" ref = {this.ad} placeholder="Ad" />
                    <button onClick = {this.addOrder}>THÊM</button>
                </div>
            </>
        );
    }
}

export default Top;
const H2 = styled.h2 `
height: 50px;
margin:0;
border-radius:10px;
padding-top:12px;
width: 100%;
background-color: pink;
text-align:center;
`;