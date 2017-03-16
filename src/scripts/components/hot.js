'use strict'
import React from 'react'
import {Link} from 'react-router'


class Hot extends React.Component{
  constructor(props){
    super(props)
    this.state={
      hotData:[]
    }
  }
creatList(){
  let that = this
  fetch('/mock/mock.json')//接口格式是后端给的
  .then(response=>response.json())
  .then(res=>{
    console.log(res);//拿到了数据，遍历数据动态生成节点

    let data= res.subjects.map((item,index)=>{
      return(
        <div>
            <i><img src={item.images.large}/></i>
            <p>
              <b>{item.title}{item.rating.average}</b>
              <b>{item.original_title}</b>
              <b>{item.directors[0].name}</b>
            </p>
        </div>
      )
    })
    that.setState({
      hotData:data
    })
  })

}
componentDidMount(){
  this.creatList.call(this)
}

  render(){
    return(
      <div className="m-hot">
          <header>正在热映</header>
          <div className="listBox">
            {this.state.hotData}
          </div>
      </div>
    )
  }


}
export default Hot
