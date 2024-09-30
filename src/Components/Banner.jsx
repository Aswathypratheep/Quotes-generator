import React, { useEffect, useState } from 'react'
import './Banner.css'

function Banner() {
  const [quotes, setQuotes] = useState(0)
  const fetchdata = async () => {
    const result = await fetch('https://dummyjson.com/quotes')
    result.json().then((res) => {
      const finaldata = res.quotes
      setQuotes(finaldata)
    })
  }
  useEffect(() => {
    fetchdata()
  }, [])

  const [index, setIndex] = useState(0)
  const handleNext = () => {
    const randome = Math.floor(Math.random() * quotes.length)
    setIndex(randome)

  }

  const handlePrevious = ()=>{
    setIndex(index > 0?index-1: 0)
  }

  return (
      <div className='banner_img'>
        <div>
              <button className='btn' onClick={handlePrevious}><i class="fa-solid fa-angle-left"></i></button>
        </div>

        <div className='box'>
              <div className='quotes'>
                <p>
                  " {
                    quotes ? quotes[index].quote :
                      <p>nothing to display</p>
                  }"
                </p>
                <div className='author'>
                  {quotes ? quotes[index].author :
                    <p>AUTHOR NAME</p>
                  }
                </div>
              </div>
        </div>

        <div>
               <button className='btn' onClick={handleNext}><i class="fa-solid fa-angle-right"></i></button>
        </div>
      </div>
  )
}

export default Banner
