import  React, { Component } from 'react';

 

class Calculator extends Component{

	constructor(props){
		super(props)
		this.state = {
			display:'0',
			display2:'0',
			type:'+',
			result:'',
			hasNumberBeenEntered:false,
		}

	}
	numberClick = (x) =>{
		if(this.state.hasNumberBeenEntered === false){
			this.setState({ 
				display:x,
				hasNumberBeenEntered:true,
			})
		}else{
			this.setState({ 
				display2:x, 
			})
		}
	}
	calculate = () => {

		//const result = function parseInt(this.state.display )
		this.setState({
			result:0
		})
	}
	clearEntry = () =>{
		this.setState({
			display:'0',
			display2:'0',
			hasNumberBeenEntered:false
		})
	}
	updateOperator = (x) => { 
		switch(x){
			case '+':
				this.setState({type:'+'});
				break;
			case 'x':
				this.setState({type:'x'});
				break;
			case'/': 
				this.setState({type:'/'});
				break;
		}
	}


	getDisplayValue = (x) =>{
 		return x;
 	}
 	render(){
		return(
    		<div className="Calculator">
	   			<div className="Display">
	   				{this.state.display}
	    		</div>
	    		<div clasName="Operator">
	    			{this.state.type}
	    		</div>
	    		<div className="Display">
	   				{this.state.display2}
	    		</div>
	    		<div className="Output">
	    			{this.state.result}
	    		</div>

	    		<div className="numbers">
	    			<div>
		    			<button className="1" onClick={()=>{this.numberClick(1)}}>1</button>
		    			<button className="2" onClick={()=>{this.numberClick(2)}}>2 </button>
		    			<button className="3" onClick={()=>{this.numberClick(3)}}>3</button>
		    		</div>
		    		<div>
	    			<button className="4" onClick={()=>{this.numberClick(4)}}>4 </button>
	    			<button className="5" onClick={()=>{this.numberClick(5)}}>5 </button>
	    			<button className="6" onClick={()=>{this.numberClick(6)}}>6 </button>
	    			</div>
	    			<div>
	    			<button className="7" onClick={()=>{this.numberClick(7)}}>7 </button>
	    			<button className="8" onClick={()=>{this.numberClick(8)}}>8 </button>
	    			<button className="9" onClick={()=>{this.numberClick(9)}}>9 </button>
	    			</div>
	    			<button className="0" onClick={()=>{this.numberClick(0)}}>0 </button>

	    			<button className="x" onClick={()=>{this.updateOperator('x')}}>x </button>
	    			<button className="+" onClick={()=>{this.updateOperator('+')}}>+ </button>
	    			<button className="/" onClick={()=>{this.updateOperator('/')}}>/ </button>
	    			<button className="x" onClick={()=>{this.updateOperator('x')}}>= </button>
	    			<button className="CE"  onClick={this.clearEntry}> CE </button>

	    		</div> 
     
   			 </div>
		)
	}
}

export default Calculator