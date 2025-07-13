// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-2 futuristic-font tracking-wider">zac</h3>
                <p className="text-white drop-shadow-sm">Creative Developer & AI Enthusiast</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-white mb-2 drop-shadow-sm">Ready to build something amazing?</p>
                <p className="text-white/90 text-sm drop-shadow-sm">
                  &copy; {new Date().getFullYear()} Zac&apos;s Portfolio. Crafted with passion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  