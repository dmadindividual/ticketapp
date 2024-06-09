// This marks the file as a Client Component
"use client"; 

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation"; // Correct import statement for useRouter

const DeleteBlock = ({ id }) => { // Accept the ticket ID as a prop
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:7717/api/Ticket/${id}`, {
        method: 'DELETE'
      });

  if(res.ok){
    router.refresh()
  }

  
    } catch (error) {
      console.error("Error deleting ticket:", error);
    }
  };

  return (
    <FontAwesomeIcon 
      icon={faX} 
      className="text-red-400 hover:cursor-pointer hover:text-red-200" 
      onClick={handleDelete} // Call handleDelete with the ticket ID when clicked
    />
  );
};

export default DeleteBlock;
