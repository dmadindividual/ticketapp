"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"


const TicketForm = () => {
    const router = useRouter()

    const startTicketData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "computer"

    }
    const [form , setForm] = useState(startTicketData)

    const handleChange = (e)=>{
        const value  = e.target.value
        const name = e.target.name

        setForm((prev)=>({
            ...prev,
            [name]: value,
            
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await fetch("http://localhost:7717/api/Ticket", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
              "Content-Type": "application/json"
            }
          });
      
          if (!res.ok) {
            throw new Error("Failed to create Ticket");
          }
      
          // Optionally, you can redirect the user to another page after successful form submission
          router.refresh()
          router.push('/'); // Replace '/success' with the desired route
        } catch (error) {
          console.error("Error creating ticket:", error);
          // Handle the error, display a message to the user, etc.
        }
      };
      
    

    
  return (
    <div className="flex justify-center">
        <form className="mt-2 p-4 flex flex-col w-1/2 gap-4 " method="post" onSubmit={handleSubmit}>
           
            <h3>Create Ticket</h3>
         
            <div className="flex flex-col gap-8 w-1/2">
            <label>Title</label>
            <input className="text-black outline-none" id="title" name="title" type="text" onChange={handleChange} required={true} value={form.title}/>
            </div>

            <div className="flex flex-col gap-8 w-1/2">
            <label>Description</label>
            <textarea className="text-black outline-none " id="description" name="description"  rows="5"  onChange={handleChange} required={true} value={form.description}/>
            </div>
       
            <div className="flex flex-col gap-8 w-1/2">
            <label>Category</label>
            <select name="category" id="category" onChange={handleChange} required={true} value={form.category} className="text-black outline-none ">
                <option value="Laptop">Laptop</option>
                <option value="Mass Comm">Mass comm</option>
                <option value="Libray and Information Science">LIS</option>
                <option value="CSC">CSC</option>
            </select>
            </div>
            <div className="flex flex-col gap-8 w-1/2">
                <div>
            <label>Priority</label>
            <input className="text-black outline-none " id="priority-1" name="priority"  type="radio" value={1}  onChange={handleChange} required={true} checked={form.priority == 1}/>
            <label>1</label>

            <input className="text-black outline-none " id="priority-2" name="priority"  type="radio" value={2}  onChange={handleChange} required={true} checked={form.priority == 2}/>
            <label>2</label>

            <input className="text-black outline-none " id="priority-3" name="priority"  type="radio" value={3}  onChange={handleChange} required={true} checked={form.priority == 3}/>
            <label>3</label>

            <input className="text-black outline-none " id="priority-4" name="priority"  type="radio" value={4}  onChange={handleChange} required={true} checked={form.priority == 4}/>
            <label>4</label>

            <input className="text-black outline-none " id="priority-5" name="priority"  type="radio" value={5}  onChange={handleChange} required={true} checked={form.priority == 5}/>
            <label>5</label>

     
            </div>
            </div>
            <label>Progress</label>
            <input type="range" id="progress" name="progress" value={form.progress} min="0" max="100" onChange={handleChange}/>

            <label>Status</label>
            <select  className="text-black outline-none"  name="status" value={form.status} onChange={handleChange} >
                <option value="not started">Not started</option>
                <option value=" started"> started</option>
                <option value="done">Done</option>

            </select>
            <input type="submit" className="btn" value="Create Ticket"/>
        </form>

      
    </div>
  )
}

export default TicketForm
