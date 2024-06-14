import { Paperclip, Send } from "lucide-react";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

interface Props {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  disableCorrections?: boolean;
  acceptedFiles: string;
}

export function TextMessageBoxFile({
  onSendMessage,
  placeholder,
  disableCorrections,
  acceptedFiles,
}: Props) {
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null | undefined>(
    null
  );
  const inputFileRef = useRef<HTMLInputElement>(null);

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
      <div className="mr-3">
        <button
          type="button"
          className="flex justify-center items-center text-gray-400"
          onClick={() => inputFileRef.current?.click()}
        >
          <Paperclip size={20} />
        </button>

        <input
          type="file"
          className=""
          accept={acceptedFiles}
          onChange={(event) => setSelectedFile(event.target.files?.item(0))}
          ref={inputFileRef}
          hidden
        />
      </div>
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
        <button
          className="btn-primary flex items-center gap-2"
          disabled={!selectedFile}
        >
          {!selectedFile ? (
            <span className="mr">Enviar</span>
          ) : (
            <span className="mr">
              Enviar {selectedFile.name.substring(0, 10)}...
            </span>
          )}
          <Send size={17} />
        </button>
      </div>
    </form>
  );
}
