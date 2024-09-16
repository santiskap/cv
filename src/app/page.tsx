
import {Experiencia} from "@/app/componentes/experiencia";
import {Edu} from "@/app/componentes/edu";
import Skills from "@/app/componentes/Skills";
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between w-full">
      <div className="container m-auto">
          <ChakraProvider>
              <Skills></Skills>
          
          <div className="flex flex-row mt-10 sm:flex-wrap">

              <div className="basis-1/2 sm:basis-full">
                <Edu></Edu>
            </div>
              <div className="basis-1/2 sm:basis-full">
                  <Experiencia></Experiencia>
              </div>
          </div>
          </ChakraProvider>
      </div>
    </main>
  )
}
