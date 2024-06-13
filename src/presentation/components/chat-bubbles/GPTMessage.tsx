import Markdown from "react-markdown";

interface Props {
  text: string;
}

export function GPTMessage({ text }: Props) {
  return (
    <div className="col-start-1 col-end-9 p-3 rounded-lg">
      <div className="flex flex-row items-start">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600 flex-shrink-0">
          G
        </div>
        <div className="relative ml-3 text-sm pb-2 px-4 rounded-xl">
          <Markdown>{text}</Markdown>
        </div>
      </div>
    </div>
  );
}
