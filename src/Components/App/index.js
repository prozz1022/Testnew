import React, { Component } from 'react';
import Home from "../Home";
import styled from 'styled-components';
import Delay from "../Delay";
import Done from "../Done";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const listOders = [
    {id:1, nameUser:"Phong", ad:"812-LLQ", sdt:"012931238",price:120,status: 2},
    {id:2, nameUser:"Phuong", ad:"111-LPQ", sdt:"0144334",price:220,status: 3},
    {id:3, nameUser:"Hau", ad:"44-OLA", sdt:"12313",price:320,status: 2},
    {id:4, nameUser:"Huy", ad:"44-OLA", sdt:"12313",price:320,status: 1} 
    // 1: chờ 2: hoàn thành 3: delay
]

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
           listOders: [...listOders]
        }
        
    }
    handleDone = (item) =>{
        
        let order = this.state.listOders;
        order = order.map((order) => {
            if(order===item) order.status = 2;
            return order;
        });
        this.setState({
            listOders: [...order]
        });
        
    }
    handleDelay = (item) =>{
        let order = this.state.listOders;
        order = order.map((order) => {
            if(order===item) order.status = 3;
            return order;
        });
        this.setState({
            listOders: [...order]
        });
        console.log(this.state)
        
    }
    remove = (item) =>{
        let order = this.state.listOders;
        let index = order.indexOf(item);
        order.splice(index,1)
        this.setState({
            listOders: [...order]
        });
    }
    addOrderItem = (name,price,phone,ad)=>{
        let value = {id:this.state.listOders+1, nameUser:name, ad:ad, sdt:phone,price:price,status: 1}
        this.setState({
            listOders:[
                ...this.state.listOders,
                value
            ]
        })
    }
    render() {
        
        const ColorBtn = {
            color:"black"
        }
        const {listOders} = this.state;
        return (
                <BoxShip>
                    <Router>
                
                <Switch>
                <Route exact path="/" > 
                        <Home listOders = {listOders} addOrderItem ={this.addOrderItem}  handleDone={this.handleDone} handleDelay={this.handleDelay}/>

                    </Route>
                    <Route path="/done"> 
                        <Done listOders = {listOders} remove = {this.remove}/>

                    </Route>
                   <Route path="/delay"> 
                        <Delay  listOders = {listOders} handleDone={this.handleDone}  />

                    </Route>
                </Switch>
                <div className="bot">
                    <button><Link to="/" style= {ColorBtn}>   ĐƠN HÀNG CHỜ</Link></button>
                    <button><Link to="/done" style= {ColorBtn}>ĐƠN HÀNG ĐÃ HOẢN THÀNH</Link></button>
                    <button><Link to="/delay" style= {ColorBtn}>ĐƠN HÀNG DELAY/CANCEL</Link></button>
                    
                </div>
            </Router>
            

                </BoxShip>
        );
    }
}
export default App;
const BoxShip = styled.div `
    width: 450px;
	height: 830px;
	border: 2px solid grey;
	border-radius: 10px;
	margin: 0 auto;
`;