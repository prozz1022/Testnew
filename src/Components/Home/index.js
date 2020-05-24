import React, { Component } from 'react';
import Top from "../Top";
import Mid from "../Mid";
class Home extends Component {
    
    render() {
        
       
        return (
            
            <>
                <Top addOrderItem ={this.props.addOrderItem}/>
                <Mid listOders = {this.props.listOders} handleOkOrder = {this.props.handleOkOrder}
                handleDone = {this.props.handleDone}  handleDelay = {this.props.handleDelay}
                />
                
            </>
        );
    }
}

export default Home;