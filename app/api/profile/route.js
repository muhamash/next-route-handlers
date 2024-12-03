import { cookies, headers } from "next/headers";

export async function GET ( request )
{
    // const requestHeaders = new Headers( request.headers );
    const headerList = headers();
    console.log( headerList.get("Authorization") );

    cookies().set( "valueTwo", "second cookie" );

    console.log( request.cookies.get( "valueOne" ) );
     console.log( cookies().get( "valueTwo" ), cookies() );

    return new Response( "profile api", {
        headers: {
            "set-Cookie" : "valueOne=testing!!!"
        }
    });
}