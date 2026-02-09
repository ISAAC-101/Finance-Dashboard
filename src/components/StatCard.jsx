export function StatCard({ title, amount, bgColor, icon }) {
    return (
        <div className={`relative overflow-hidden p-5 rounded-xl text-white ${bgColor} shadow-md`}>


            {/* Stepped growth line – bottom right */}
            <div className="absolute bottom-4 right-4 flex items-end gap-3 opacity-70">
                <div className="w-6 h-4 border-t-2 border-r-2 border-white"></div>
                <div className="w-6 h-7 border-t-2 border-r-2 border-white"></div>
                <div className="w-6 h-10 border-t-2 border-r-2 border-white"></div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-between gap-3">
                    <div className="text-3xl opacity-90">
                        {icon}
                    </div>
                    <p className="text-m opacity-80">{title}</p>

                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mt-1">{amount}</h2>
            </div>

        </div>
    );
}