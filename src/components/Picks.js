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
    visible: false
}
makeVisible=()=>{
    setTimeout(()=>{
        switch (this.className) {
            case 'rock':
              if (this.housePick['className'] === 'scissor') {
                this.text = this.resultDisplayer('true')
              }else if(this.housePick['className'] === 'paper'){
                this.text = this.resultDisplayer('false')
              }else{
                 this.text = this.resultDisplayer('something else')
              }
              break;
            case 'paper':
              if (this.housePick['className'] === 'rock') {
                this.text = this.resultDisplayer('true')
              }else if(this.housePick['className'] === 'scissor'){
                this.text = this.resultDisplayer('false')
              }else{
                this.text = this.resultDisplayer('still a loss')
              }
              break;
            case 'scissor':
              if (this.housePick['className'] === 'paper') {
                this.text = this.resultDisplayer('true')
                }else if(this.housePick['className'] === 'rock'){
                  this.text = this.resultDisplayer('false')
                }else{
                  this.text = this.resultDisplayer('a loss to')
                }
                break;
          }
    this.setState({
        visible: true
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
                <div className={['obj', this.className, 'holder'].join(' ')}>
                    {this.Component}
                </div>
            </div>
            { this.state.visible? <Result result={this.text} func={this.reset}/>: null}
            <div className="housePick">
                <p>THE HOUSE PICK</p>
                <div className={['obj', this.state.visible ? this.housePick['className'] : '', 'holder', this.state.visible? 'winner' :'default'].join(' ')}>
                    {this.state.visible ? this.housePick['obj']: null}
                </div>
            </div>
        </div>
    </>
    )
}
}


export default Picks 