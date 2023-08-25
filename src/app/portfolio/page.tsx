import {Navegacion} from "@/app/componentes/navbar";
import {ColumnaIzquierda} from "@/app/componentes/left";
import ImageModal from "@/app/componentes/portfolio";

export default function Portfolio() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div>
                <Navegacion></Navegacion>
                <main className="flex bg-amber-50">
                    <ColumnaIzquierda></ColumnaIzquierda>
                    <ImageModal></ImageModal>
                </main>
            </div>
        </main>
    );
}