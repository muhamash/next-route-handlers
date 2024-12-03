import { dataSet } from "@/data/peoples";
import { redirect } from "next/navigation";

export async function GET (_request, context)
{
    const peopleId = context.params.id;
    const findPeople = dataSet?.find( data => data.id === parseInt( peopleId ) );

    if ( !findPeople )
    {
        redirect( '/api/people' );
    }
    const people = dataSet?.find( data => data.id === parseInt( peopleId ) );

    return Response.json( people );
}

export async function PATCH (request, context)
{
    const people = await request.json();
    const peopleId = context.params.id;
    const peopleIndex = dataSet?.findIndex( data => data.id === parseInt( peopleId ) );

    dataSet[ peopleIndex ].name = people.name;
    dataSet[ peopleIndex ].age = people.age;
    dataSet[ peopleIndex ].role= people.role;
    

    return Response.json( people );
}

export async function DELETE(request, context) {
    try {
        const peopleId = context.params.id;
        if (!peopleId) {
            return new Response("ID is required", { status: 400 });
        }

        // Find the index of the data to delete
        const peopleIndex = dataSet.findIndex(data => data.id === parseInt(peopleId));

        // Handle non-existent ID
        if (peopleIndex === -1) {
            return new Response("Data not found", { status: 404 });
        }

        // Remove the data and return the deleted data
        const [deletedData] = dataSet.splice(peopleIndex, 1);

        return Response.json(deletedData, { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
    }
}