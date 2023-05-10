import React from 'react'

function Form() {
  return (
    <div className="form-section">
        <div className="form-wrapper">
            <div className="form-container">
                <h2>Find best market Stocks for Trading</h2>
                <div className="input-box">
                    <input type="text" name="" id="" placeholder="commodity, mutual fund, IPO" />
                    <button>Search</button>
                </div>
            </div>
            <div className="main-cloud">
                <div className="rec rec1"></div>
                <div className="rec rec2"></div>
                <div className="rec rec3"></div>
                <div className="rec rec4"></div>
                <div className="rec rec5"></div>
            </div>
        </div>
    </div>
  )
}

export default Form
