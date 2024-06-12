import { NavLink } from "react-router-dom";

interface Props {
  option: {
    to: string;
    icon: JSX.Element;
    title: string;
    description: string;
    component: JSX.Element;
  };
}

export function SidebarMenuitem({ option }: Props) {
  return (
    <NavLink
      to={option.to}
      className={({ isActive }) =>
        isActive
          ? "p-2 flex justify-center items-center bg-gray-800 rounded-md transition-colors"
          : "p-2 flex justify-center items-center hover:bg-gray-800 rounded-md transition-colors"
      }
    >
      <span className="mr-4 text-2xl text-blue-600">{option.icon}</span>
      <div className="flex flex-col flex-grow">
        <span className="text-white text-lg font-semibold">{option.title}</span>
        <span className="text-gray-400 text-sm">{option.description}</span>
      </div>
    </NavLink>
  );
}
