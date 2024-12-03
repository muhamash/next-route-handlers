 import { dataSet } from "@/data/peoples";

export async function GET ()
{
    return Response.json( dataSet );
}

export async function POST (request)
{
    const people = await request.json();
    const newPeople = {
        id: Date.now(),
        name: people.name,
        age: people.age,
        role: people.role
    };

    dataSet.push( newPeople );
    return Response.json( JSON.stringify( newPeople ), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    })
    
}