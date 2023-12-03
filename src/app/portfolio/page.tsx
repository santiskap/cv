import ImageModal from "@/app/componentes/portfolio";
import Componentes from "@/app/componentes/Componentes";

export default function Portfolio() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div>
                <main className="container">
                    <div>
                        <ImageModal></ImageModal>
                    </div>

                </main>
            </div>
        </main>
    );
}