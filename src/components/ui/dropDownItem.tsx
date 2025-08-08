import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DropdownItem({ item }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-2 py-1 rounded hover:bg-muted"
      >
        <div className="flex items-center gap-2 text-sm">
          <item.icon className="w-4 h-4" />
          <span className="font-normal">{item.title}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="ml-6 mt-1 flex flex-col gap-1">
          {item.children.map((child) => (
            <p
              key={child.title}
              className="text-sm cursor-pointer py-1 px-2 rounded hover:bg-muted"
              onClick={() => navigate(child.url)}
            >
              {child.title}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
