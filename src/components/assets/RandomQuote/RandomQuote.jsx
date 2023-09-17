import React, { useState } from 'react'
import './RandomQuote.css'
import './footer.css'
import twitter_icon from '../twitter.png'
import reload from '../reload.png'
import Footer from './Footer'



export const RandomQuote = () => {

    let quotes = [];

    async function loadquotes(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const random = () => {

          const select = quotes[Math.floor(Math.random() * quotes.length)];
          setQuote(select);
    }

    const twitter= () =>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text}%0A%0A-${quote.author.split(',')[0]}`);
    }

    const [quote,setQuote] = useState(
        {
            text : "let there be chaos",
            author: "bugsyy"
            
        }
    );

    loadquotes();

  return (
    <div className='quotezy'>
        <div className="q"><b>Q</b>uotezy
        </div>
        <div className='container'>
        <div className='quote'>
        {/* <img src={panda}></img> */}
        {quote.text}
        </div>
        
        <div>
            <div className="line"></div>
            <div className="bottom">
                <div className="author">
                    - {quote.author.split(',')[0]}
                </div>
                <div className="icon">
                    <img src={reload} onClick={()=>{random()}} alt="" />
                    <img src={twitter_icon} onClick={()=>{twitter()}} alt="" />
                </div>
            </div>
        </div>
       
    </div>
    <Footer />
    </div>
  )
}
