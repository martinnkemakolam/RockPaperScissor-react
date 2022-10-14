import Paper from "./svgObj/paper"
import Rock from "./svgObj/rock"
import Scissor from "./svgObj/scissor"

function Body({objClick}) {
    return(
      <>
      <div className="gameBody">
      <div className="opt">
        <svg className="gameTriangle" width="313" height="278" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" stroke-width="15" fill="none" opacity=".2" d="M156.5 262 300 8H13z"/>
      </svg>
      <div className={['obj', 'scissor'].join(' ')}>
        <Scissor objClick={()=>objClick(<Scissor/>, 'scissor')}/>
      </div>
      <div className={['obj', 'rock'].join(' ')}>
        <Rock objClick={()=>objClick(<Rock/>, 'rock')}/>
      </div>
      <div className={['obj', 'paper'].join(' ')}>
        <Paper objClick={()=>objClick(<Paper/>, 'paper')}/>
      </div>
      </div>
      </div>
      </>
    )    
}
export default Body
