import { Send } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface Option {
  id: string;
  text: string;
}

interface Props {
  onSendMessage: (message: string, selectedOption: string) => void;
  placeholder?: string;
  disableCorrections?: boolean;
  options: Option[];
}

export function TextMessageBoxSelect({
  onSendMessage,
  placeholder,
  disableCorrections,
  options,
}: Props) {
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim().length === 0) return;
    onSendMessage(message, selectedOption);
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
        <div className="w-full flex">
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

          <select
            name="select"
            className="w-2/5 h-10 ml-5 pl-4 border rounded-xl text-gray-800 focus:outline-none focus:border-blue-500"
            value={selectedOption}
            onChange={(event) => setSelectedOption(event.target.value)}
          >
            <option>Seleccione una opción</option>
            {options.map(({ id, text }) => (
              <option key={id} value={id}>
                {text}
              </option>
            ))}
          </select>
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
