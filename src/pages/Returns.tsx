import React from "react";

const Returns = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Política de Trocas e Devoluções
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Prazo para Trocas e Devoluções
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
            <p className="text-gray-600">
              Você tem até 7 (sete) dias corridos, a contar da data de recebimento, para solicitar a devolução do produto em caso de:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
              <li>Arrependimento da compra</li>
              <li>Produto com defeito/danificado</li>
              <li>Produto em desacordo com o pedido</li>
              <li>Produto incompleto</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Como Solicitar uma Troca ou Devolução
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
            <ol className="list-decimal list-inside text-gray-600 space-y-4">
              <li>Entre em contato com nosso atendimento através do e-mail: support@store.com</li>
              <li>Informe o número do pedido e o motivo da devolução</li>
              <li>Aguarde as instruções para envio do produto</li>
              <li>Embale o produto adequadamente na embalagem original</li>
              <li>Envie o produto conforme as instruções fornecidas</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Condições para Troca e Devolução
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
            <p className="text-gray-600">
              Para que a troca ou devolução seja aceita, é necessário que:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
              <li>O produto esteja em sua embalagem original</li>
              <li>Todos os acessórios e manuais estejam inclusos</li>
              <li>O produto não apresente sinais de uso</li>
              <li>A nota fiscal esteja incluída no envio</li>
              <li>O produto não tenha sido personalizado</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Reembolso
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
            <p className="text-gray-600">
              Após recebermos o produto e confirmarmos que está tudo em ordem, o reembolso será processado da seguinte forma:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
              <li>Cartão de crédito: Em até 2 faturas subsequentes</li>
              <li>PIX ou Boleto: Em até 10 dias úteis na mesma conta de origem</li>
              <li>O valor do frete não será reembolsado em casos de arrependimento</li>
              <li>Em caso de defeito, o frete de retorno será por nossa conta</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Observações Importantes
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
            <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
              <li>A troca está sujeita à disponibilidade de estoque</li>
              <li>Produtos em promoção seguem as mesmas regras</li>
              <li>Custos de envio em caso de arrependimento são por conta do cliente</li>
              <li>Em caso de dúvidas, entre em contato com nosso suporte</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Returns;
