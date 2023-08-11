import React from "react"

export default function Home() {
  return (
   <div className="flex-initial flex-row grid gap-5">
    <h1 className="text-4xl font-bold">Manipulação de Farmacia</h1>
      <p className="text-lg">   
      Bem-vindo ao nosso site de Manipulação Farmacêutica! Aqui, unimos a ciência e a personalização para atender às suas necessidades de saúde de maneira única. <br/> Navegue por nossa ampla gama de serviços personalizados, desde formulações sob medida até orientações especializadas, tudo respaldado pela expertise dos nossos farmacêuticos. <br/> Descubra uma abordagem exclusiva para o seu bem-estar no mundo da manipulação farmacêutica
      </p>
      <button className="border-2 border-black rounded-md p-1">Conheça nossos Produtos!</button>
      <button className="border-2 border-black rounded-md p-1">Pesar os Produtos!</button>
    </div>
  )
}
