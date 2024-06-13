import { useState } from "react";
import { GPTMessage, UserMessage } from "../components/chat-bubbles";
import { TextMessageBox } from "../components/chat-input-boxes";
import { TypingLoader } from "../components/loaders";

// Type message for ******* chat
interface Message {
  text: string;
  isGPT: boolean;
}

export function ChatTemplate() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);
    setMessages([...messages, { text: text, isGPT: false }]);
    // TODO: useCase();
    setIsLoading(false);
    // TODO: Cambiar isGPT a true
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GPTMessage text="¡Hola, estoy encantado de poder ayudarte a corregir tu ortografía. ¿Tienes algún texto específico en el que necesitas ayuda o hay algo particular sobre ortografía que te gustaría aprender o revisar?" />

          {messages.map((message, index) =>
            message.isGPT ? (
              <GPTMessage
                key={`message-list-gpt-${index}`}
                text="MENSAJE PROVENIENTE DE LA API DE OPEN IA"
              />
            ) : (
              <UserMessage
                key={`message-list-user-${index}`}
                text={message.text}
              />
            )
          )}

          {isLoading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader className="fade-in" />
            </div>
          )}
        </div>
      </div>
      <TextMessageBox
        onSendMessage={(message) => handlePost(message)}
        placeholder="Envía un mensaje a ChatGPT"
        disableCorrections
      />
    </div>
  );
}
