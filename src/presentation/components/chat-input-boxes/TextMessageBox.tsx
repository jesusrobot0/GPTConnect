import { Send } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  disableCorrections?: boolean;
}

export function TextMessageBox({
  onSendMessage,
  placeholder,
  disableCorrections,
}: Props) {
  const [message, setMessage] = useState("");

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim().length === 0) return;
    onSendMessage(message);
    setMessage("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="w-full h-16 px-4 flex flex-row items-center rounded-xl bg-white"
    >
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            autoFocus
            name="messages"
            className="w-full h-10 pl-4 flex text-gray-800 border rounded-xl focus:outline-none focus:border-blue-600"
            placeholder={placeholder}
            autoComplete={disableCorrections ? "off" : "on"}
            autoCorrect={disableCorrections ? "off" : "on"}
            value={message}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="ml-4">
        <button className="btn-primary flex items-center gap-2">
          <span className="mr">Enviar</span>
          <Send size={17} />
        </button>
      </div>
    </form>
  );
}
