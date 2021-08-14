import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor, ] = useState('')
  const [error, setError] = useState(false)
  // const [random,setRandom] = useState('')
  const [list, setList] = useState(new Values('#238aba').all(10))

  const randomColor = (e) =>{
    e.preventDefault()
    try {
    let randomColoring = '#' + Math.floor(Math.random() * 16777215).toString(16)
    let colorz =new Values(randomColoring).all(10)
    setList(colorz)
    }
    catch(error){
      setError(true)
      console.log(error)
    }
  }

 

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>cooler colors</h3>
        <form onSubmit={randomColor}>
          <input
            hidden={true}
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='type hex code'
            className={`${error ? 'error' : null}`}
          />
          <button className="btn-random" type='submit'>
            Generate
          </button>

        </form>
        </section>
      <section className='container'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='hex code'
            className={`${error ? 'error' : null}`}
          />
          <button className="btn" type='submit'>
            submit
          </button>
        </form>
        </section>
        {/* <h5>click on the colors to copy</h5> */}

       
        {/* <h5>click on the colors to copy</h5> */}


      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App