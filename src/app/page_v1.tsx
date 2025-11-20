import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { FileText, Calculator, Briefcase, Building2 } from "lucide-react"
import Link from "next/link"

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
      {/* TOP LOGO AJUSTADO */}
      <header className="w-full border-b bg-white">
        {/* CONTAINER DO HEADER */}
        <div className="max-w-6xl mx-auto flex items-center justify-between p-6">
          {/* LOGO (Texto para simular o estilo da imagem) */}
          <Link href="/" className="text-xl font-serif font-bold tracking-wider">
            Novais de Souza
          </Link>

          {/* NAVEGAÇÃO E BOTÃO DE ORÇAMENTO */}
          <div className="flex items-center space-x-6">
            <nav className="hidden sm:flex space-x-6 text-sm">
              <Link href="#sobre" className="hover:text-primary transition-colors">
                Sobre
              </Link>
              <Link href="#servicos" className="hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link href="#clientes" className="hover:text-primary transition-colors">
                Clientes
              </Link>
            </nav>
            <Link href="#orcamento">
              <Button 
                variant="default" 
                className="bg-gray-800 text-white hover:bg-gray-700 h-10 px-4 py-2 text-sm rounded-none" // Estilo para simular o botão da imagem
              >
                Solicite Orçamento
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <WhatsAppButton />

      <main className="min-h-screen" style={{ fontFamily: "Courier New" }}>
        {/* HERO */}
        <section className="min-h-[70vh] flex items-center justify-center px-4 pb-10 pt-4">
          <div className="container mx-auto text-center space-y-8 fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight text-balance">
              Excelência em Engenharia Civil, Projetos e Consultoria Técnica
            </h1>

            <p className="text-lg max-w-2xl mx-auto leading-relaxed">
              Soluções técnicas seguras e eficientes para obras e empreendimentos
            </p>

            <Link href="#orcamento">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                Solicite um orçamento
              </Button>
            </Link>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-20 px-4 bg-card">
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
                  className="p-6 border rounded-lg shadow-sm bg-white text-center"
                >
                  <service.icon className="h-10 w-10 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTES */}
        <section id="clientes" className="py-24 px-4 bg-secondary">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-14">Clientes</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {clients.map((src, i) => (
                <div
                  key={i}
                  className="bg-white rounded border p-4 flex items-center justify-center"
                >
                  <img src={src} className="max-h-20 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ORÇAMENTO */}
        <section id="orcamento" className="py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Solicite Orçamento</h2>
            <p className="text-lg leading-relaxed">
              Entre em contato e receba um orçamento personalizado
            </p>
          </div>

          <ContactForm />
        </section>

        {/* FOOTER */}
        <footer className="bg-secondary py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            <p className="text-center text-sm">
              © 2025 Novais de Souza Serviços de Engenharia — Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
