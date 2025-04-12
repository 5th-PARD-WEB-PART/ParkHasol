export default function Tail(){
return(
    <main className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-8 tet-gray-900">
            Tailwind 반응형 실습
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg grid-cols-4 gap-6">
            {[1,2,3,4,5].map((_, index)=> (
                <div
                    key={index}
                    className="
                    p-5 rounded-2xl shadow-md hover:shadow-lg transition
                    bg-blue-100
                    sm:bg-green-100
                    md:bg-yellow-100
                    lg:bg-purple-100
                    xl:bg-red-100
                    " >
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Card {index+1}</h2>
                    <p className="text-gray-700">This card changes color by screen size!</p>
                    </div>
            ))}
        </div>
    </main>
    );
}