import { headers } from "next/headers";

export async function GET ( request )
{
    // const requestHeaders = new Headers( request.headers );
    const headerList = headers();
    console.log( headerList.get("Authorization") );

    return new Response("profile api");
}