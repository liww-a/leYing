'use strict'
import React from 'react'
import {Link} from 'react-router'


class Index extends React.Component{
  constructor(props){
    super(props)
    this.state={
          currentTab:'index'
    }
  }
changeTab(type){
  this.setState({
      currentTab:type
  })
}

setTabBars(){
  let tabBars = [
    {
      title:'首页',
      icon: '&#xe6bb;',
      iconLight: '',
      type: 'index'
    },
    {
      title:'热的',
      icon: '&#xe66a;',
      iconLight: '',
      type: 'hot'
    },
    {
      title:'VIP',
      icon: '&#xe616;',
      iconLight: '',
      type: 'vip'
    },
    {
      title:'直播',
      icon: '&#xe6f0;',
      iconLight: '',
      type: 'live'
    },
    {
      title:'我的',
      icon: '&#xe6b7;',
      iconLight: '',
      type: 'my'
    }
  ]
  return tabBars.map((item,index)=>{
    return (
      <Link to={item.type}>
        <li onClick={this.changeTab.bind(this,item.type)} className={this.state.currentTab==item.type ?'active':''} >
            <i className="yo-ico" dangerouslySetInnerHTML={{__html:item.icon}}></i>
            <b>{item.title}</b>
        </li>
      </Link>

    )
  })
}
  render(){
    return(
      <div className="m-index">
        
        <section>
            {this.props.children}
        </section>
        <nav>
            <ul>
                {this.setTabBars()}
            </ul>
        </nav>
      </div>
    )
  }
}
export default Index
