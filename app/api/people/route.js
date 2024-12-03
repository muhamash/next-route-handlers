import { dataSet } from "@/data/peoples";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    if (query) {
        const filteredPeople = dataSet?.filter(data => 
            data.name.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredPeople.length === 0) {
            return Response.json({ message: "No data found" }, { status: 404 });
        }

        return Response.json(filteredPeople);
    }

    return Response.json(dataSet);
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