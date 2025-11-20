"use client"; // <--- ADICIONADO PARA TORNAR ESTE UM CLIENT COMPONENT

import React from 'react';

// O componente ContactForm, usando tags HTML nativas e Tailwind
export const ContactForm = () => {
    // Função para lidar com o envio do formulário (simplesmente previne o recarregamento da página)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você adicionaria a lógica real de envio (e.g., para um email service ou API)
        console.log("Formulário de orçamento submetido!");
        // OBSERVAÇÃO: Usei alert() no código anterior apenas para demonstração. 
        // Em um ambiente real, você deve usar um modal ou mensagem na tela.
        alert("Sua solicitação foi enviada! Entraremos em contato em breve."); 
    };

    return (
        <div className="container mx-auto max-w-4xl">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* CAMPOS NOME COMPLETO E E-MAIL (2 COLUNAS) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Nome Completo */}
                    <div>
                        <label htmlFor="nome" className="block text-base font-medium mb-1">Nome completo</label>
                        <input 
                            id="nome" 
                            type="text"
                            placeholder="" 
                            className="w-full px-4 py-3 border border-gray-300 bg-white shadow-sm focus:border-gray-500 focus:ring-gray-500 text-base" 
                            required
                        />
                    </div>
                    {/* E-mail */}
                    <div>
                        <label htmlFor="email" className="block text-base font-medium mb-1">E-mail</label>
                        <input 
                            id="email" 
                            type="email"
                            placeholder="" 
                            className="w-full px-4 py-3 border border-gray-300 bg-white shadow-sm focus:border-gray-500 focus:ring-gray-500 text-base" 
                            required
                        />
                    </div>
                </div>

                {/* CAMPO TELEFONE (1 COLUNA) */}
                <div>
                    <label htmlFor="telefone" className="block text-base font-medium mb-1">Telefone</label>
                    <input 
                        id="telefone" 
                        type="tel" 
                        placeholder="" 
                        className="w-full px-4 py-3 border border-gray-300 bg-white shadow-sm focus:border-gray-500 focus:ring-gray-500 text-base" 
                        required
                    />
                </div>

                {/* CAMPO MENSAGEM (1 COLUNA) */}
                <div>
                    <label htmlFor="mensagem" className="block text-base font-medium mb-1">Mensagem</label>
                    <textarea 
                        id="mensagem" 
                        placeholder="Descreva seu projeto ou necessidade..." 
                        rows={5} 
                        className="w-full px-4 py-3 border border-gray-300 bg-gray-50 shadow-sm focus:border-gray-500 focus:ring-gray-500 text-base resize-none" 
                        required
                    />
                </div>

                {/* BOTÃO ENVIAR SOLICITAÇÃO (Estilo da imagem) */}
                <button
                    type="submit" 
                    className="w-full bg-gray-800 text-white hover:bg-gray-700 text-lg font-bold py-4 rounded-none transition-colors"
                >
                    Enviar Solicitação
                </button>
            </form>
        </div>
    );
};