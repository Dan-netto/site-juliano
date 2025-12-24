import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form" // Importação atualizada
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button" // Mantido, mas não é usado na ContactForm
import { FileText, Calculator, Briefcase, Building2 } from "lucide-react"
import Link from "next/link"
import React from 'react'; // Adicionado para uso potencial de hooks ou FC

export default function Home() {
  const services = [
    { icon: FileText, title: "Laudos Técnicos de Engenharia" },
    { icon: Building2, title: "Consultoria em Obras de Condomínio" },
    { icon: Calculator, title: "Financiamento de Construções" },
    { icon: Briefcase, title: "Gestão de Empreendimentos" },
    { icon: Calculator, title: "Elaboração e Gestão de Orçamento" },
    { icon: Building2, title: "Projetos Estruturais e Arquitetônicos" }
  ]

  const clients = [
    "/images/clientes/bahiana.png",
    "/images/clientes/barreiras.png",
    "/images/clientes/bernoulli.png",
    "/images/clientes/chez_bernard.png",
    "/images/clientes/civil.png",
    "/images/clientes/la_felicita.png",
    "/images/clientes/mrv.png",
    "/images/clientes/Naia.png",
    "/images/clientes/pinheiros.png",
    "/images/clientes/politeama.png",
    "/images/clientes/rio_parana.png",
    "/images/clientes/roltek.png",
    "/images/clientes/tecnorem.png",
    "/images/clientes/voltz.png"
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-250px * ${clients.length})); }
          }
          .animate-infinite-scroll {
            display: flex;
            width: max-content;
            animation: scroll 40s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
          html { scroll-behavior: smooth; }
        `}} />

      {/* HEADER AJUSTADO COM LOGO E FONTE COURIER NEW */}
      <header className="w-full border-b bg-white" style={{ fontFamily: "Courier New" }}>
        {/* CONTAINER DO HEADER */}
        <div className="max-w-6xl mx-auto flex items-center justify-between p-6">
          {/* LOGO (Imagem no canto superior esquerdo, h-28 solicitado) */}
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Logo Novais de Souza"
              className="h-32 w-auto" // Aumentado para h-28
            />
          </Link>

          {/* CONTEÚDO DO LADO DIREITO (Texto "Novais de Souza", Navegação e Botão) */}
          <div className="flex items-center space-x-6">

            {/* NAVEGAÇÃO */}
            <nav className="hidden sm:flex space-x-6 text-sm">
              <Link href="#sobre" className="hover:text-gray-600 transition-colors">
                Sobre
              </Link>
              <Link href="#servicos" className="hover:text-gray-600 transition-colors">
                Serviços
              </Link>
              <Link href="#clientes" className="hover:text-gray-600 transition-colors">
                Clientes
              </Link>
            </nav>

            {/* BOTÃO DE ORÇAMENTO */}
            <Link href="#orcamento">
              <button 
                className="bg-gray-800 text-white hover:bg-gray-700 h-10 px-4 py-2 text-sm rounded-none font-bold" 
              >
                Solicite Orçamento
              </button>
            </Link>
          </div>
        </div>
      </header>

      <WhatsAppButton />

      {/* FONTE COURIER NEW APLICADA EM TODO O CONTEÚDO PRINCIPAL */}
      <main className="min-h-screen" style={{ fontFamily: "Courier New" }}>
        {/* HERO - Replicando o texto centralizado da NOVA imagem */}
        <section className="min-h-[70vh] flex items-center justify-center px-4 pb-10 pt-4">
          <div className="container mx-auto text-center space-y-8 fade-in-up">
            <div className="flex flex-col items-center justify-center text-center">
                {/* Textos que estavam antes, agora centralizados e REDUZIDOS */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase max-w-4xl mx-auto leading-tight text-balance">
                    NOVAIS DE SOUZA
                </h1>
                <hr className="w-32 border-t-2 border-gray-400 my-4" />
                <h2 className="text-base font-bold tracking-widest uppercase mb-10">
                    SERVIÇOS DE ENGENHARIA
                </h2>

                {/* NOVO TEXTO DA IMAGEM ATUALIZADA */}
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-800 max-w-5xl mx-auto leading-tight mb-6">
                    Excelência em Engenharia <br /> Civil, Projetos e <br /> Consultoria Técnica
                </h3>
                <p className="text-lg text-gray-600 mb-10">
                    Soluções técnicas seguras e eficientes para obras e empreendimentos
                </p>
            </div>

            <Link href="#orcamento">
              <button 
                className="bg-gray-800 text-white hover:bg-gray-700 h-12 px-8 py-3 text-base rounded-none font-bold transition-colors" // Botão com estilo da nova imagem
              >
                Solicite um orçamento
              </button>
            </Link>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl space-y-6">
            <h2 className="text-4xl font-bold mb-6">Sobre a Empresa</h2>

            <p className="text-lg leading-relaxed">
              Consultoria eficiente para atender as diversas demandas da construção civil. 
              Nossa missão é a praticidade da Engenharia visando o resultado do cliente.
            </p>

            <p className="leading-relaxed">
              Experiência em grandes construções como o Centro de Convenções de Salvador, 
              o Colégio Bernoulli - Caminho das Árvores, o Alphaville Guarajuba e o Centro 
              Médico na Escola Bahiana de Medicina.
            </p>

            <p className="leading-relaxed">
              Networking para conseguir a melhor solução para seu projeto.
            </p>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-14">Nossos Serviços</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="p-6 border rounded-lg shadow-sm bg-white text-center transition-shadow hover:shadow-lg"
                >
                  <service.icon className="h-10 w-10 mx-auto mb-4 text-gray-700" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTES - CARROSSEL INFINITO ATUALIZADO */}
        <section id="clientes" className="py-24 px-4 bg-gray-50 overflow-hidden border-y border-gray-200">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-14">Clientes</h2>
            
            <div className="relative flex overflow-x-hidden group">
              {/* Overlay suave nas bordas para o carrossel */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

              <div className="animate-infinite-scroll flex gap-8 items-center">
                {/* Renderiza a lista duas vezes para o loop infinito */}
                {[...clients, ...clients].map((src, i) => (
                  <div key={i} className="flex-none w-[220px] bg-white rounded-none border border-gray-200 p-6 flex items-center justify-center h-32 hover:border-gray-400 transition-colors">
                    <img 
                      src={src} 
                      alt={`Cliente ${i}`} 
                      className="max-h-16 max-w-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                      onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-xs text-gray-400 uppercase font-bold text-center">Empresa Parceira</span>' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ORÇAMENTO (Atualizado com novo layout de texto e ContactForm) */}
        <section id="orcamento" className="py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
                Solicite Orçamento
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
                Entre em contato conosco e receba um orçamento personalizado para seu projeto
            </p>
          </div>

          {/* O NOVO COMPONENTE CONTACTFORM É CHAMADO AQUI */}
          <ContactForm />
        </section>

        {/* FOOTER - NOVO LAYOUT COM TRÊS COLUNAS */}
        <footer className="bg-gray-100 py-16 px-4" style={{ fontFamily: "Courier New" }}>
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b pb-12 border-gray-300">
              {/* Coluna 1: Novais de Souza */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold mb-2">Novais de Souza</h3>
                <p className="text-sm">Serviços de Engenharia</p>
              </div>

              {/* Coluna 2: Endereço */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold mb-2">Endereço</h3>
                <p className="text-sm leading-relaxed">
                  Rua Professor Rômulo Almeida, 52 <br />
                  Edif. Lafayette Velos <br />
                  Acuipe de Brotas <br />
                  Salvador, BA
                </p>
              </div>

              {/* Coluna 3: Contato */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold mb-2">Contato</h3>
                <div className="text-sm space-y-1">
                  <p className="flex items-center">
                    <span className="mr-2">📞</span> (71) 99198-8849
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">✉️</span> julianosouza.engcivil@gmail.com
                  </p>
                  <p className="mt-4">
                    CNPJ: 45.379.119/0001-55
                  </p>
                </div>
              </div>
            </div>

            {/* Direitos Autorais */}
            <div className="pt-6">
              <p className="text-center text-sm">
                © 2025 Novais de Souza Serviços de Engenharia. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}