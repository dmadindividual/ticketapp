import Link from "next/link"
import DeleteBlock from "./DeleteBlock"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"

const TicketCard = ({ticket}) => {

  const FormatTimeStamp = (timestamp)=>{
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    const date = new Date(timestamp);
    const formmatedDate = date.toLocaleString("en-US", options);
    return formmatedDate;
  
  }

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority}/>
        <div className="ml-auto">
        <DeleteBlock id={ticket._id}/>
        </div>
        </div>
        <Link href={`/Ticketpage/${ticket._id}`} style={{display: "contents"}}>
      <h4>{ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2"/>
      <p className="whitespace-pre-wrap">{ticket.description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1"> {FormatTimeStamp(ticket.createdAt)}</p>
        <ProgressDisplay progress={ticket.progress}/>
        </div>

      </div>
  <div className="ml-auto flex items-end">
        <StatusDisplay status={ticket.status}/>
        </div>
        </Link>
    </div>
  )
}

export default TicketCard  