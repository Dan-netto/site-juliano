import React from 'react';
import { FileText, Calculator, Briefcase, Building2, Phone } from "lucide-react";

/**
 * Nota Técnica:
 * Para evitar erros de resolução de módulos em ambientes de visualização,
 * os componentes de suporte (ContactForm, WhatsAppButton) foram integrados
 * diretamente neste arquivo principal.
 */

const ContactForm = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Nome completo</label>
            <input type="text" className="w-full p-4 border border-gray-300 rounded-none focus:outline-none focus:border-gray-800 bg-white" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-wide">E-mail</label>
            <input type="email" className="w-full p-4 border border-gray-300 rounded-none focus:outline-none focus:border-gray-800 bg-white" />
          </div>
        </div>
        <div className="text-left">
          <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Telefone</label>
          <input type="tel" className="w-full p-4 border border-gray-300 rounded-none focus:outline-none focus:border-gray-800 bg-white" />
        </div>
        <div className="text-left">
          <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Mensagem</label>
          <textarea rows={5} className="w-full p-4 border border-gray-300 rounded-none focus:outline-none focus:border-gray-800 bg-gray-50 resize-none"></textarea>
        </div>
        <button type="submit" className="w-full bg-gray-800 text-white hover:bg-black text-lg font-bold py-5 rounded-none transition-all uppercase tracking-widest">
          Enviar Solicitação
        </button>
      </form>
    </div>
  );
};

export default function Home() {
  const services = [
    { icon: FileText, title: "Laudos Técnicos de Engenharia" },
    { icon: Building2, title: "Consultoria em Obras de Condomínio" },
    { icon: Calculator, title: "Financiamento de Construções" },
    { icon: Briefcase, title: "Gestão de Empreendimentos" },
    { icon: Calculator, title: "Elaboração e Gestão de Orçamento" },
    { icon: Building2, title: "Projetos Estruturais e Arquitetônicos" }
  ];

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
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
      <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-250px * ${clients.length})); }
          }
          .animate-infinite-scroll {
            display: flex;
            width: max-content;
            animation: scroll 45s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
          html { scroll-behavior: smooth; }
        `}} />

      {/* HEADER */}
      <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-6">
          <a href="#" className="transition-transform hover:scale-105">
            <img
              src="/images/logo.png"
              alt="Logo Novais de Souza"
              className="h-24 md:h-32 w-auto"
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/300x120?text=NOVAIS+DE+SOUZA" }}
            />
          </a>

          <div className="flex items-center space-x-8">
            <nav className="hidden lg:flex space-x-8 text-sm font-bold uppercase tracking-widest">
              <a href="#sobre" className="hover:text-gray-500 transition-colors">Sobre</a>
              <a href="#servicos" className="hover:text-gray-500 transition-colors">Serviços</a>
              <a href="#clientes" className="hover:text-gray-500 transition-colors">Clientes</a>
            </nav>

            <a href="#orcamento">
              <button className="bg-gray-800 text-white hover:bg-black h-12 px-6 text-sm rounded-none font-bold uppercase tracking-tighter transition-all">
                Solicite Orçamento
              </button>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-white">
          <div className="container mx-auto text-center space-y-10">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase leading-tight">NOVAIS DE SOUZA</h1>
                <hr className="w-48 border-t-2 border-gray-300 my-6" />
                <h2 className="text-lg font-bold tracking-[0.4em] uppercase mb-12 text-gray-400">SERVIÇOS DE ENGENHARIA</h2>
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-normal text-gray-800 max-w-6xl leading-[1.15] mb-8">
                    Excelência em Engenharia <br className="hidden md:block" /> Civil, Projetos e <br className="hidden md:block" /> Consultoria Técnica
                </h3>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 italic">Soluções técnicas seguras e eficientes para obras e empreendimentos</p>
            </div>

            <a href="#orcamento">
              <button className="bg-gray-800 text-white hover:bg-black px-12 py-5 text-lg rounded-none font-bold uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg">
                Solicite um orçamento
              </button>
            </a>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-32 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl space-y-8">
            <h2 className="text-4xl font-bold mb-10 border-l-8 border-gray-800 pl-6 uppercase tracking-wider">Sobre a Empresa</h2>
            <p className="text-xl leading-relaxed text-gray-700">
              Consultoria eficiente para atender as diversas demandas da construção civil. 
              Nossa missão é a praticidade da Engenharia visando o resultado do cliente.
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              Experiência comprovada em grandes construções como o <strong>Centro de Convenções de Salvador</strong>, 
              o <strong>Colégio Bernoulli</strong>, o <strong>Alphaville Guarajuba</strong> e o <strong>Centro 
              Médico na Escola Bahiana de Medicina</strong>.
            </p>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="py-32 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold uppercase tracking-widest inline-block border-b-4 border-gray-800 pb-4">Nossos Serviços</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service, i) => (
                <div key={i} className="group p-10 border border-gray-100 rounded-none bg-white text-center transition-all hover:border-gray-800 hover:shadow-2xl">
                  <service.icon className="h-14 w-14 mx-auto mb-8 text-gray-300 group-hover:text-gray-800 transition-colors duration-500" />
                  <h3 className="text-xl font-bold uppercase tracking-tight leading-snug">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTES - CARROSSEL INFINITO ATUALIZADO */}
        <section id="clientes" className="py-32 px-4 bg-gray-50 overflow-hidden border-y border-gray-200">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-20 uppercase tracking-widest">Empresas que Confiam</h2>
            
            <div className="relative flex overflow-x-hidden group">
              {/* Gradientes laterais para suavizar a entrada/saída */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

              <div className="animate-infinite-scroll flex gap-12 items-center">
                {/* Lista duplicada para efeito infinito contínuo */}
                {[...clients, ...clients].map((src, i) => (
                  <div key={i} className="flex-none w-[250px] bg-white border border-gray-100 p-8 flex items-center justify-center h-40 shadow-sm transition-all hover:shadow-md hover:border-gray-300">
                    <img 
                      src={src} 
                      alt="Cliente Novais de Souza" 
                      className="max-h-20 max-w-full object-contain filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                      onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-xs font-bold uppercase text-gray-300">Parceiro Estratégico</span>' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ORÇAMENTO */}
        <section id="orcamento" className="py-32 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 uppercase tracking-widest">Solicite Orçamento</h2>
            <p className="text-lg text-gray-500 italic">
                Responda o formulário abaixo e retornaremos com uma proposta técnica detalhada.
            </p>
          </div>
          <ContactForm />
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-400 py-20 px-4 border-t border-gray-800">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-gray-800 pb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white uppercase tracking-[0.2em]">Novais de Souza</h3>
                <p className="text-sm leading-relaxed">Engenharia Civil com foco em resultados técnicos e viabilidade econômica.</p>
              </div>
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-white uppercase tracking-widest">Escritório</h3>
                <p className="text-sm leading-relaxed">
                  Rua Professor Rômulo Almeida, 52 <br />
                  Edifício Lafayette Velos <br />
                  Acupe de Brotas <br />
                  Salvador, Bahia
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-white uppercase tracking-widest">Contato Direto</h3>
                <div className="text-sm space-y-3">
                  <p className="flex items-center hover:text-white transition-colors">
                    <span className="mr-3">📞</span> (71) 99198-8849
                  </p>
                  <p className="flex items-center hover:text-white transition-colors">
                    <span className="mr-3">✉️</span> julianosouza.engcivil@gmail.com
                  </p>
                  <p className="mt-8 pt-6 border-t border-gray-800 font-mono text-xs">CNPJ: 45.379.119/0001-55</p>
                </div>
              </div>
            </div>
            <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs uppercase tracking-widest">© 2025 Novais de Souza Engenharia.</p>
              <div className="flex space-x-6 text-xs uppercase tracking-tighter">
                <a href="#" className="hover:text-white">Privacidade</a>
                <a href="#" className="hover:text-white">Termos</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* WHATSAPP FLOAT */}
      <a 
        href="https://wa.me/5571991988849" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center group"
      >
        <Phone className="w-7 h-7 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
          Fale Conosco
        </span>
      </a>
    </div>
  );
}