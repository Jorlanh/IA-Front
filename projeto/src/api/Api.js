const BASE_URL = 'http://localhost:8080';

export const sendMessage = async (message) => {
  try {
    const response = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: message }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.response; // Assuming HelenaResponse has a 'response' field
  } catch (error) {
    console.error('Error sending message:', error);
    return 'Desculpe, houve um erro ao processar sua solicitação.';
  }
};