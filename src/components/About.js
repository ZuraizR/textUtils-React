import React from 'react'

import './About.css'

function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#202327',
    backgroundColor: props.mode === 'dark' ? '#202327' : 'white',
    border: '2px solid',
    borderColor: props.mode === 'dark' ? 'white' : '#181b1f',
  }

  return (
    <div className='container mt-4 my-1 py-2 rounded'>
      <h1
        className='py-2'
        style={{
          color: props.mode === 'dark' ? 'white' : '#181b1f',
        }}
      >
        About Us
      </h1>
      <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className={`accordion-button ${
                props.mode === 'dark' ? 'light' : 'dark'
              }`}
              style={myStyle}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body' style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className='accordion-item' style={myStyle}>
          <h2 className='accordion-header'>
            <button
              className={`accordion-button ${
                props.mode === 'dark' ? 'light' : 'dark'
              }`}
              style={myStyle}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body' style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className='accordion-item' style={myStyle}>
          <h2 className='accordion-header'>
            <button
              className={`accordion-button ${
                props.mode === 'light' ? 'dark' : 'light'
              }`}
              style={myStyle}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body' style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About