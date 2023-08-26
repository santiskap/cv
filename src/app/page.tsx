
import {Navegacion} from "@/app/componentes/navbar";
import {ColumnaIzquierda} from "@/app/componentes/left";
import {Inicio} from "@/app/componentes/right";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between w-full">
      <div>
          <Navegacion></Navegacion>
          <main className="flex">
              <ColumnaIzquierda></ColumnaIzquierda>
              <Inicio></Inicio>
          </main>
      </div>
    </main>
  )
}
