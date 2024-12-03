import { NextResponse } from 'next/server';
 
// This function can be marked `async` if using `await` inside
export function middleware ( request )
{
    console.log( 'middleware' );
    // console.log( request.url );
    // if ( request.url.includes( "dashboard" ) )
    // {
    //     return NextResponse.redirect(new URL('/ ', request.url))
    // }
    // return NextResponse.next()
    // return NextResponse.json( {
    //     hello: "i am happy"
    // })
  return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard', '/about']
}