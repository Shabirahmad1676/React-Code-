import React from 'react'
import {createPortal} from 'react-dom'


const PopupContent = ({copied}) => {
 
  return  (
    <div>
      {
        copied && (
          <div className='popup' style={{position: 'absolute', backgroundColor:'crimson', top: '20px' , right: '46%', color:'white', fontSize:'22px',textAlign:'center',padding:'12px',borderRadius:'12px'}}>Copied to Clipboard!📋</div>
        )
        
      }
    </div>
  )
}

export default PopupContent