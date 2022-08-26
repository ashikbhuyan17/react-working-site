import React, { useReducer, useState } from 'react';



const UseReducer3 = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'INCREASE':
                return {
                    ...state,
                    count: state.count + 1
                }
            case 'DECREASE':
                return {
                    ...state,
                    count: state.count - 1
                }
            default:
                return state
        }
    }
    const [userInput, setUserInput] = useState("")
    // const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div style={{ margin: "50px" }}>
            <input type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <br /><br />
            <p>{state.count}</p><br />
            <button
                style={{ border: "1px solid black", marginRight: '15px', padding: '10px' }} type='submit'
                // onClick={() => setCount(prev => prev + 1)}
                onClick={() => dispatch({ type: "INCREASE" })}
            >
                +
            </button>
            <button
                style={{ border: "1px solid black", marginRight: '15px', padding: '10px' }} type='submit'
                // onClick={() => setCount(prev => prev - 1)}
                onClick={() => dispatch({ type: "DECREASE" })}
            >
                -
            </button>


        </div>
    );
};

export default UseReducer3;