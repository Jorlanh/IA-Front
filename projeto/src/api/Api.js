// Use a variável de ambiente REACT_APP_API_URL que será configurada no Render.
// Para desenvolvimento local, ele usará o valor do seu arquivo .env.development ou o fallback.
const BASE_URL = process.env.REACT_APP_API_URL || 'https://ia-helena.onrender.com';

export const sendMessage = async (message) => {
  try {
    const response = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error('A resposta da rede não foi boa');
    }

    const data = await response.json();
    return data.responseText;
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    return 'Desculpe, houve um erro ao processar sua solicitação.';
  }
};