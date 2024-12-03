import { getDictionary } from "../dictionary/dictionary";

export default async function ContactPage ( { params } )
{
  const dict = await getDictionary( params.lang );
  
  return (
    <div className="h-screen items-center justify-center text-xl flex flex-col gap-5">
      <p>Contact</p>
      <p className="text-slate-500 text-2xl font-semibold">{params.lang}</p>
      <p>internationalization : { dict.contact }</p>
      <p>{ dict.contact }</p>
    </div>
  )
}
