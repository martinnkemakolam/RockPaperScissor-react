import "./style.css"
import Body from "./components/body";
import Rule from "./components/Rule";
import Scoreboard from "./components/Scoreboard";
import React from "react";
import Picks from "./components/Picks";
import RuleBtn from "./components/ruleBtn";
import Rock from "./components/svgObj/rock";
import Paper from "./components/svgObj/paper";
import Scissor from "./components/svgObj/scissor";
class App extends React.Component{
  state ={
    check: false,
    value: localStorage.getItem('value') || 0,
    clicked: false,
  } 
  reset=()=>{
    this.obj = null
    this.className = null
    this.housePick = null
    this.setState(
      {
        clicked: false
      }
    )
  }
  toggleRules=()=>{
    let check = this.state.check
    this.setState({
      check: !check
    })
  }
  resultDisplayer=(win)=>{
    if (win === 'true') {
      let newValue = this.state.value 
      newValue++
      this.setState({
        value: newValue
      }, localStorage.setItem('value', newValue))
      return 'YOU WIN'
    }else if(win === 'false'){
      return 'YOU LOSE'
    }else{
      return 'DRAW'
    }
  }
  obj = null
  className = null
  housePick = null
  objClick=(arg,className)=>{
    this.housePick = this.generateHousePick()
    this.className = className
    this.obj = arg
    this.setState({
      clicked: !this.state.clicked
    })
  }

  generateHousePick=()=>{
    return [{'obj': <Rock/>, 'className': 'rock'}, {'obj': <Paper/>, 'className': 'paper'}, {'obj':<Scissor/>, 'className': 'scissor'}].sort(()=> Math.random() - 0.5)[0]
  }
  render(){
    return (
      <>
      <Scoreboard score={this.state.value}/>
      {this.state.clicked ? <Picks resultDisplayer={this.resultDisplayer} className={this.className} Component={this.obj} housePick={this.housePick} reset={this.reset}/> : <Body objClick={this.objClick}/>}
      <Rule func={this.toggleRules} check={this.state.check}/>
      <RuleBtn clicked={this.toggleRules}/>
      </>
    );
  }
}

export default App;
 