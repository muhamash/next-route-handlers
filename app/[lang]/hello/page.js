import { getDictionary } from "../dictionary/dictionary";

export default async function HelloPage ( { params } )
{
    const dict = await getDictionary(params.lang)
    return (
        <div className="h-screen items-center justify-center text-xl flex flex-col gap-5">
            <p className="text-slate-500 text-2xl font-semibold">{ dict.hello}</p>
        </div>
    );
};
