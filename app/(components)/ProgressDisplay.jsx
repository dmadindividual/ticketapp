

const ProgressDisplay = ({progress}) => {
  return (
    <div className="w-full  bg-gray-200 rounded-full h-2.5">
        <div className="h-2.5 bg-blue-600 rounded-full " style={{width: `${progress}%`}}>

        </div>
       
    </div>
  )
}

export default ProgressDisplay
