const CustomLink = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="group relative inline-block text-slate-800 font-medium cursor-pointer"
    >
      {children}
      {/* Notare 'left-1/2' e '-translate-x-1/2' per centrare l'inizio */}
      <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-rose-500 transition-all duration-300 ease-out group-hover:w-full"></span>
    </a>
  );
};
export default CustomLink;