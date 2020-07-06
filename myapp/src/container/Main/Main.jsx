import React, { Component } from 'react'
import './main.css'

class Main extends Component {
    
    render() {
        return (
            <div className="main">
                <div className="back">
                    <img src="https://cube.elemecdn.com/4/15/dc61aa143da8a091296c4dca67b9asvg.svg" className="backImg"></img>
                    <div className="backHeader"> 
                        <ul className="header">
                            <li className="headerContent">开放平台</li>
                            <li className="headerContent">企业订餐</li>
                            <li className="headerContent">
                                <img src={require("../../image/phone.png")} className="headerPho"></img>
                                <div>手机端</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main