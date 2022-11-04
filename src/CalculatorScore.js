import React, { useState } from 'react'

function CalculatorScore (){
    const [num1, setNum1] = useState (0)
    const [num2, setNum2] = useState (0)  
    const [num3, setNum3] = useState (0)  
    const [average, setAverage] = useState (0)
    const [name, setName] = useState ('')  
    const [string, setString] = useState ('')


    let calculateAverage = (event) => {
        event.preventDefault();
        if (num1 === 0 || num2 === 0 || num3 === 0 ) {
            alert  ("Enter a valid score")
        } else {
            let average = parseInt((parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3)
            setAverage(average)
            
 
            if (average < 75) {
                setString('You Failed')
              } else if (average >= 75) {
                setString('You Passed')
              } 
            }
          }


    return (
        <div className="App">
            <form onSubmit={calculateAverage}>
                        <label>Name</label>
                        <input type="text" name="full_name" value = {name} onChange= {(e) => setName(e.target.value)}/>
                        <label>First Score</label>
                        <input type="number" name="num_1" value = {num1} onChange={(e) => setNum1(e.target.value)} min="0" max="99"/>  
                        <label> Second Score</label>
                        <input type="number" name="num_2" value = {num2} onChange={(e) => setNum2(e.target.value)} min="0" max="99"/>
                        <label> Third Score</label>
                        <input type="number" name="num_3" value = {num3} onChange={(e) => setNum3(e.target.value)} min="0" max="99"/>
                        <button type='submit'>Submit</button>   
            </form>
                    <p>Your average is: {average}</p>
                    <p>{string}</p>
        </div>
      )
    }


    
export default CalculatorScore;