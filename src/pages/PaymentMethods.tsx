import React from "react";

const PaymentMethods = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Métodos de Pagamento
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Formas de Pagamento Aceitas
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Oferecemos diversas opções de pagamento para sua conveniência:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Cartão de Crédito
                </h3>
                <p className="text-gray-600">
                  Aceitamos as principais bandeiras:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Visa</li>
                  <li>Mastercard</li>
                  <li>American Express</li>
                  <li>Elo</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  PIX
                </h3>
                <p className="text-gray-600">
                  Pagamento instantâneo com confirmação na hora.
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Transferência imediata</li>
                  <li>Sem taxas adicionais</li>
                  <li>Disponível 24/7</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Boleto Bancário
                </h3>
                <p className="text-gray-600">
                  Pagamento através de boleto bancário.
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Vencimento em 3 dias úteis</li>
                  <li>Processamento em até 2 dias úteis</li>
                  <li>Pode ser pago em qualquer banco</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Transferência Bancária
                </h3>
                <p className="text-gray-600">
                  Transferência direta para nossa conta.
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>TED/DOC</li>
                  <li>Processamento em até 24h</li>
                  <li>Principais bancos aceitos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Informações Importantes
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <ul className="space-y-3 text-gray-600">
              <li>• Todas as transações são processadas com segurança</li>
              <li>• Os preços são exibidos em Reais (BRL)</li>
              <li>• Pagamentos internacionais podem estar sujeitos a taxas adicionais</li>
              <li>• Em caso de dúvidas, entre em contato com nosso suporte</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentMethods;
