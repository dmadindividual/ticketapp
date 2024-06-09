import { faFire } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const PriorityDisplay = ({priority}) => {
  return (
    <div>
        <FontAwesomeIcon icon={faFire} className={`pr-1  ${priority > 0 ? "text-red-400" : "text-gray-400"}`} />
        <FontAwesomeIcon icon={faFire} className={`pr-1  ${priority > 0 ? "text-red-400" : "text-gray-400"}`} />
        <FontAwesomeIcon icon={faFire} className={`pr-1  ${priority > 0 ? "text-red-400" : "text-gray-400"}`} />
        <FontAwesomeIcon icon={faFire} className={`pr-1  ${priority > 0 ? "text-red-400" : "text-gray-400"}`} />
        <FontAwesomeIcon icon={faFire} className={`pr-1  ${priority > 0 ? "text-red-400" : "text-gray-400"}`} />
    </div>
  )
}

export default PriorityDisplay