import React, { useState, useEffect, useRef } from 'react';
import { sendMessage } from '../api/Api';

function HelenaChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'HELENA',
      text: 'Olá! Eu sou Helena, uma inteligência artificial especialista em avaliação psicopedagógica.<br><br>Eu atuo com base em regras de avaliação psicopedagógica, levando em consideração indícios de dislexia, dificuldade com leitura, interpretação de texto, escrita, raciocínio lógico e matemática básica. Em que posso te ajudar hoje?',
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  const quickResponses = [
    {
      label: '📝 Analisar Texto de Aluno',
      response:
        'Excelente! Por favor, cole o texto do aluno na caixa de digitação abaixo para que eu possa iniciar a análise.',
    },
    {
      label: 'ℹ️ Sobre o Sistema',
      response:
        'Eu sou uma ferramenta de triagem para apoiar o trabalho pedagógico. Analiso textos para encontrar padrões de dificuldades de aprendizagem, mas não forneço diagnósticos definitivos.',
    },
    {
      label: '❓ Tipos de Dificuldades',
      response:
        'Posso identificar indícios de Dislexia, Discalculia, dificuldades de interpretação, problemas na expressão escrita, déficit de atenção, entre outros.',
    },
  ];

  const addMessage = (text, sender) => {
    setMessages((msgs) => [
      ...msgs,
      { id: msgs.length + 1, sender, text },
    ]);
  };

  const handleQuickAction = async (label, response) => {
    addMessage(label, 'user');
    setIsTyping(true);
    const apiResponse = await sendMessage(response);
    addMessage(apiResponse, 'HELENA');
    setIsTyping(false);
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userInput = input.trim();
    addMessage(userInput, 'user');
    setInput('');
    setIsTyping(true);
    const apiResponse = await sendMessage(userInput);
    addMessage(apiResponse, 'HELENA');
    setIsTyping(false);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-50"
        aria-label="Abrir/Fechar Chat com HELENA"
      >
        <img
          src="/assets/helenaIA.png"
          alt="Ícone da assistente virtual HELENA"
          width={40}
          height={40}
          className="rounded-full flex-shrink-0"
          loading="lazy"
          onError={(e) => {
            console.error('Erro ao carregar helenaIA.png:', e.target.src);
            e.target.src = '/helenaIA.png'; // Tente a raiz do public/
            e.target.onerror = null; // Evita loop infinito
          }}
          />
        <span className="text-sm font-semibold">assistente HELENA</span>
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div
          id="chat-container"
          className="fixed bottom-20 right-6 w-full max-w-md h-[600px] bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden z-50"
          role="region"
          aria-label="Chatbot HELENA - Assistente Psicopedagógica"
        >
          <header
            id="chat-header"
            className="bg-gradient-to-r from-[#005f73] to-[#023e8a] text-white p-4 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src="/assets/helenaIA.png"
                alt="Ícone da assistente virtual HELENA"
                width={40}
                height={40}
                className="rounded-full flex-shrink-0"
                loading="lazy"
                onError={(e) => {
                    console.error('Erro ao carregar helenaIA.png:', e.target.src);
                    e.target.src = '/helenaIA.png'; // Tente a raiz do public/
                    e.target.onerror = null; // Evita loop infinito
                }}
          />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none select-none">
                  HELENA
                </span>
                <span className="text-sm opacity-90 select-none">
                  Assistente Psicopedagógica
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Fechar chat"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </header>

          <main
            id="chat-messages"
            className="flex-grow p-5 overflow-y-auto flex flex-col gap-4"
          >
            {messages.map(({ id, sender, text }) => (
              <div
                key={id}
                className={
                  'message max-w-[85%] flex items-start gap-3 ' +
                  (sender === 'HELENA' ? 'self-start' : 'self-end flex-row-reverse')
                }
                role="article"
                aria-label={sender === 'HELENA' ? 'Mensagem da HELENA' : 'Sua mensagem'}
              >
                {sender === 'HELENA' && (
                  <img
                    className="avatar w-9 h-9 rounded-full flex-shrink-0"
                    src="https://i.imgur.com/2b7a0sQ.png"
                    alt="Avatar da HELENA"
                    loading="lazy"
                  />
                )}
                <div
                  className={
                    'text-bubble p-3 rounded-[18px] text-sm leading-relaxed whitespace-pre-wrap break-words ' +
                    (sender === 'HELENA'
                      ? 'bg-gray-200 text-gray-800'
                      : 'bg-blue-200 text-gray-900')
                  }
                  dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }}
                />
              </div>
            ))}
            {isTyping && (
              <div className="self-start flex items-center gap-3">
                <img
                  className="avatar w-9 h-9 rounded-full"
                  src="https://i.imgur.com/2b7a0sQ.png"
                  alt="Avatar da HELENA"
                />
                <div className="text-bubble bg-gray-200 text-gray-800 p-3 rounded-[18px]">
                  Digitando...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </main>

          <div
            id="quick-actions"
            className="flex flex-wrap gap-2 p-4 border-t border-gray-200"
          >
            {quickResponses.map(({ label, response }) => (
              <button
                key={label}
                className="action-button bg-gray-100 border border-gray-300 text-[#0077b6] px-4 py-2 rounded-full text-xs font-semibold transition-colors hover:bg-blue-50 hover:border-blue-200"
                onClick={() => handleQuickAction(label, response)}
                type="button"
                aria-label={label}
              >
                {label}
              </button>
            ))}
          </div>

          <footer
            id="chat-input-area"
            className="flex p-5 border-t border-gray-200 gap-3"
          >
            <input
              type="text"
              id="user-input"
              placeholder="Digite sua pergunta..."
              className="flex-grow border border-gray-300 rounded-full px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSend();
                }
              }}
              aria-label="Campo para digitar sua pergunta"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              id="send-button"
              onClick={handleSend}
              className="bg-[#0077b6] hover:bg-[#023e8a] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl leading-none"
              aria-label="Enviar mensagem"
              type="button"
            >
              ➤
            </button>
          </footer>
        </div>
      )}
    </>
  );
}

export default HelenaChat;