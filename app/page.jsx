import TicketCard from "./(components)/TicketCard";




const getTicket = async () => {
  try {
    const res = await fetch("http://localhost:7717/api/Ticket", {
      cache: "no-store"
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return { tickets: data }; // Ensure it returns an object with 'tickets'
  } catch (error) {
    console.log("Failed to get tickets", error);
    return { tickets: [] }; // Return an empty array on failure
  }
};

const Dashboard = async () => {
  const { tickets } = await getTicket();
  
  if (!tickets || tickets.length === 0) {
    return <div>Failed to load tickets.</div>;
  }

  const uniqueTickets = [...new Set(tickets?.map(({ category }) => category))];
  
  return (
    <div className="p-5">
      <div>
        {tickets && uniqueTickets?.map((UniqueCategory, index)=>(
          <div key={index} className="mb-4">
            <h2>{UniqueCategory}</h2>
            <div className='lg:grid grid-cols-2 xl:grid-cols-4'>
              {tickets.filter((ticket)=> ticket.category === UniqueCategory).map((filteredTicket, index)=>(
                <TicketCard key={index} ticket={filteredTicket}  id={index}/>
              ))}
            </div>
          </div>
        ))}
      
      </div>
    </div>
  );
};

export default Dashboard;
