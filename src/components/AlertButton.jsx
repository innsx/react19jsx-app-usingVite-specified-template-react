// import React from 'react'

function AlertButton({ message, children }) {
  return (
        <button className="btn" onClick={() => alert(message)}>
      {children}
    </button>
  )
}

export default AlertButton