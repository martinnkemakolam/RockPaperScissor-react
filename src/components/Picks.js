import React from "react"
import Result from "./Result"
class Picks extends React.Component{
constructor({resultDisplayer, Component, housePick, className, reset}){
    super()
    this.resultDisplayer = resultDisplayer
    this.reset = reset
    this.className = className
    this.housePick = housePick
    this.Component = Component
    this.text = ''
}
state={
    visible: false,
    win: ''
}
makeVisible=()=>{
  let value;
    setTimeout(()=>{
        switch (this.className) {
            case 'rock':
              if (this.housePick['className'] === 'scissor') {
                this.text = this.resultDisplayer('true')
                value = 'user'
              }else if(this.housePick['className'] === 'paper'){
                this.text = this.resultDisplayer('false')
                value = 'comp'
              }else{
                 this.text = this.resultDisplayer('something else')
                 value = ''
              }
              break;
            case 'paper':
              if (this.housePick['className'] === 'rock') {
                this.text = this.resultDisplayer('true')
                value = 'user'
              }else if(this.housePick['className'] === 'scissor'){
                this.text = this.resultDisplayer('false')
                value = 'comp'
              }else{
                this.text = this.resultDisplayer('still a loss')
                value = ''
              }
              break;
            case 'scissor':
              if (this.housePick['className'] === 'paper') {
                this.text = this.resultDisplayer('true')
                value = 'user'
                }else if(this.housePick['className'] === 'rock'){
                  this.text = this.resultDisplayer('false')
                  value = 'comp'
                }else{
                  this.text = this.resultDisplayer('a loss to')
                  value = ''
                }
                break;
          }
    this.setState({
        visible: true,
        win: value
    })
    }, 1500)
}
componentDidMount=()=>{
    this.makeVisible()
}
render(){
    return(
        <>
        <div className="pick">
            <div className="yourPick">
                <p>YOU PICKED</p>
                <div className={['obj', this.className,  this.state.win === 'user'? 'winner': '' ,'holder'].join(' ')}>
                    {this.Component}
                </div>
            </div>
            { this.state.visible? <Result result={this.text} func={this.reset}/>: null}
            <div className="housePick">
                <p>THE HOUSE PICK</p>
                <div className={['obj', this.state.visible ? this.housePick['className'] : '', 'holder', this.state.win === 'comp'? 'winner' :'', this.state.visible ? '':'default' ].join(' ')}>
                    {this.state.visible ? this.housePick['obj']: null}
                </div>
            </div>
        </div>
    </>
    )
}
}


export default Picks 