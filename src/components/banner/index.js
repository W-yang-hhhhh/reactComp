import React, { Component } from 'react'
import propTypes from 'prop-types'
import './index.css'

export default class banner extends Component{
  
    static propTypes = {
        data:propTypes.arrayOf(propTypes.string),
        width:propTypes.number,
        height:propTypes.number,
    }
    constructor(props){
        super(props)
        this.state ={
            content:[],
            btn:[],
            index:0,
            left:0,
        }
        this.init();
    }
    init(){
 
        if(this.props.data.length!==0){
          
            this.props.data.forEach((item,index)=>{
          this.state.content.push(  <img className="content" width={this.props.width} height={this.props.height} key={index} src={item} />)
          this.state.btn.push(<i className={this.state.index==index ? 'active':''} data-id={index} key={index} onClick={()=>{this.changePageandbtn(index)}}></i>)
        })
        }else{
            this.state.content.push(<div>FIRST PIC</div>)
            this.state.content.push(<div>SECOND PIC</div>)
            this.state.content.push(<div>THIRD PIC</div>)
        }

       
    }
    changePageandbtn(num){
        console.log(num)
        if(num>this.props.data.length-1){
            num = 0;
        }else if(num<0){
            num = this.props.data.length-1
        }
        this.setState({
            index:num,
            left:-num*this.props.width
        })
    }
    


    render(){
      
        return (
            <div className="container" style={{width:this.props.width,height:this.props.height}}>
                <ul className="contents" style={{height:this.props.height,left:this.state.left}}>
                    {this.state.content}
                </ul>
                <span className="btn left" onClick={()=>{this.changePageandbtn(--this.state.index)}}>＜</span>
                <span className="btn right" onClick={()=>{this.changePageandbtn(++this.state.index)}}>＞</span>
                <div className="bottom_btn" >
                     {this.state.btn}
              
                </div>
            </div>
        )
    }
}



banner.defaultProps = {
    data:[],
    width:550,
    height:300,
}