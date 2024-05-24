//@ts-ignore
import quotes from 'inspirational-quotes';


export const Quote = () => {
    const quote=quotes.getQuote();
    const text=quote.text;
    const authorArr=quote.author.split(", ");
    return <div className="bg-slate-200 h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="max-w-lg">
                <div className="text-3xl font-bold">
                    {text}
                </div>
                <div className="max-w-md text-xl font-semibold text-left mt-4">
                    {authorArr[0]}
                </div>
                <div className="max-w-md text-sm font-light text-slate-400">
                    {authorArr[1]}
                </div>
            </div>
        </div>
        
    </div>
}