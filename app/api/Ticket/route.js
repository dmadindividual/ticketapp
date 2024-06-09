import Ticket from "../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req){
    console.log("baki")
    try {
        const body = await req.json()
        const TicketData = body.formData

        await Ticket.create(TicketData)
        return NextResponse({message: "Ticket Created"}, {status: 201})
        
    } catch (error) {
        return NextResponse({message: "Error"}, error, {status: 500})
    }
}

export async function GET(){
    try {
        const tickets = await Tickets.find()
        return NextResponse.json({tickets}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Error"}, error, {status: 500})
        
    }
}


