import { Phone } from 'lucide-react';
import { FaPaw } from 'react-icons/fa';

function Header() {
  return (
    <div className="absolute w-[90vw] z-50 flex items-end justify-between -translate-x-1/2 left-1/2 font-mono text-sm">
      <div className="text-2xl">
        <FaPaw />
      </div>

      <div className="w-fit px-8 py-2 hover:cursor-pointer border border-black border-t-0 rounded-b-2xl">
        contact
      </div>
    </div>
  );
}

export default Header;
