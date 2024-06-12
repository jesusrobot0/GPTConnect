import { GPTMessage, UserMessage } from "../../components/chat-bubbles";
import { TextMessageBox } from "../../components/chat-input-boxes";
import { TypingLoader } from "../../components/loaders";

export function OrthographyPage() {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GPTMessage text="¡Hola, estoy encantado de poder ayudarte a corregir tu ortografía. ¿Tienes algún texto específico en el que necesitas ayuda o hay algo particular sobre ortografía que te gustaría aprender o revisar?" />
          <UserMessage text="Callá puta" />
          <TypingLoader className="fade-in" />
        </div>
      </div>
      <TextMessageBox
        onSendMessage={(message) => console.log(message)}
        placeholder="Envía un mensaje a ChatGPT"
        disableCorrections
      />
    </div>
  );
}
