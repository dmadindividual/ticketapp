import TicketForm from '@/app/(components)/TicketForm';
import React from 'react';

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:7717/api/Ticket/${id}`, {
      cache: "no-store"
    });

    if (!res.ok) {
      throw new Error("Failed to get Ticket");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id !== 'new';
  let updateTicket = {};

  if (EDITMODE) {
    updateTicket = await getTicketById(params.id);
  }

  return (
    <div>
      <TicketForm ticket={updateTicket} />
    </div>
  );
}

export default TicketPage;
