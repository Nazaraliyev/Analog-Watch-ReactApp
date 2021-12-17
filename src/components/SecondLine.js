import React from 'react'

function SecondLine({Deg}) {

    let border;
    if(Deg % 30 === 0){
        border = 5;
    }else{
        border = 1;
    }
    return (
        <div className='second' style={{transform : `rotate(${Deg}deg)`}}> 
        <div className='line' style = {{borderWidth : `${border}px`}}></div>
        </div>
    )
}

export default SecondLine
