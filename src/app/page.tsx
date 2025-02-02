
import {Experiencia} from "@/app/componentes/experiencia";
import Skills from "@/app/componentes/Skills";
import { ChakraProvider } from '@chakra-ui/react'
import { Edu2 } from "./componentes/Edu2";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between w-full">
      <div className="container m-auto">
          <ChakraProvider>
              <Skills></Skills>
          
          <div className="mt-10">

              <div className="">
                <Edu2></Edu2>
            </div>
              <div className="">
                  <Experiencia></Experiencia>
              </div>
          </div>
          </ChakraProvider>
      </div>
    </main>
  )
}
