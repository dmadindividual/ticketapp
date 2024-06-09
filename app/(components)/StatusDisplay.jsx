import React from 'react'

const StatusDisplay = ({status}) => {
  const getColor = (status) => {
    if (status.toLowerCase() === 'done') {
      return 'bg-green-200';
    } else if (status.toLowerCase() === 'not started') { // Ensure consistency in case handling
      return 'bg-yellow-200';
    } else {
      return 'bg-red-200';
    }
  };
  return (
    <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(status)}` }>
      {status}
    </span>
  )
}

export default StatusDisplay
