// components/SplitLayerNavbar.tsx

const SplitLayerNavbar: React.FC = () => {
  return (
    <header className="bg-white">
      {/* Top Layer */}
      <div className="w-full h-[132px]flex items-center justify-between px-6 py-2  border-gray-200">
        <nav className=" border-b border-opacity-10 border-[#000000] h-[70px] font-[ClashDisplay] text-[24px] font-normal text-center pt-[16px] px[690px]  ">Avion</nav>
        </div>
{/* 
      {/* Bottom Layer */}
      <nav className="bg-white">
        <ul className="flex justify-center text-gray-800 ">
          <li className="px-4 py-3 hover:bg-gray-200">
            <h1 className="font-[ClashDisplay]">Plant pots</h1>
          </li>
          <li className="px-4 py-3 hover:bg-gray-200">
          <h1 className="font-[ClashDisplay]">Ceramics</h1>
          </li>
          <li className="px-4 py-3 hover:bg-gray-200">
            <h1 className="font-[ClashDisplay]">Tables</h1>
          </li>
          <li className="px-4 py-3 hover:bg-gray-200">
          <h1 className="font-[ClashDisplay]">Chairs</h1>
          </li>
          <li className="px-4 py-3 hover:bg-gray-200">
          <h1 className="font-[ClashDisplay]">Crockery</h1>
          </li><li className="px-4 py-3 hover:bg-gray-200">
          <h1 className="font-[ClashDisplay]">Tableware</h1>
          </li><li className="px-4 py-3 hover:bg-gray-200">
          <h1 className="font-[ClashDisplay]">Cutlery</h1>
          </li>
        </ul>
      </nav>
    </header>
  );
}; 

export default SplitLayerNavbar;
