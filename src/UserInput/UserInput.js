import React from 'react';

const userinput = (props) => {
    const inputStyle = {
        backgroundColor: '#da7b93',
        color: 'white',
        font: 'inherit',
        border: '1px solid #2e151b',
        padding: '6px'
      }

      const inputDivStyle = {
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          paddingTop: '3px',
      }
    return (
            <div style={inputDivStyle}>
           <input 
            type='text' 
            value={props.username} 
            onChange={props.change}
            style={inputStyle}/>
        </div>
       
    )       
}

export default userinput;