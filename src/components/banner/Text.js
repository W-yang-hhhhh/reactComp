import Banner from './index.js'

import React, { Component } from 'react'

export default class TextBanner extends Component{
    constructor(){
        super();
        this.state={
            data:[
                'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2961974070,137066290&fm=26&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2594671789,2155354930&fm=11&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3214252751,1722479737&fm=11&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3859417927,1640776349&fm=11&gp=0.jpg'

            ]}
    }
    


    render(){
        return (
            <Banner  {...this.state} />
        )
    }
}