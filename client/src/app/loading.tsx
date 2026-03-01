export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#090909]">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="w-16 h-16 border-4 border-[#6200EE]/30 border-t-[#D1FE4E] rounded-full animate-spin"></div>
                <p className="text-white font-poppins text-lg animate-pulse">Yükleniyor...</p>
            </div>
        </div>
    );
}
