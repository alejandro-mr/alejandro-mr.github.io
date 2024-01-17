import { useState } from 'preact/hooks';
const hamburgerStyle = {
  common:
    'h-0.5 bg-gradient-to-r from-party-punch from-55% to-sun-dried-tomato',
};

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="select-none grid items-center justify-self-end h-6">
      <button
        className="lg:hidden grid h-3 gap-y-1 w-6"
        onClick={() => setOpen((open) => !open)}
      >
        <div className={hamburgerStyle.common}></div>
        <div className={hamburgerStyle.common}></div>
        <div className={hamburgerStyle.common}></div>
      </button>
      <div
        className={`bg-slate-50 drop-shadow-[0_-2px_3px_rgba(150,79,76,0.2)] text-sun-dried-tomato text-center font-semibold rounded-t-lg mx-1 fixed bottom-0 left-0 right-0 z-10 h-0 transition-all ${!open ? 'h-0 pt-0' : 'h-1/3'}`}
      >
        <div
          className={`select-none cursor-pointer relative grid content-center -top-5 mx-auto rounded-full bg-gradient-to-b to-slate-50 via-pristine from-peach-puree drop-shadow-[0_2px_3px_rgba(150,79,76,0.2)] h-10 w-10 text-xl text-sun-dried-tomato ${!open && 'hidden'}`}
          onClick={() => setOpen((open) => !open)}
        >
          &#x2715;
        </div>
        <ul>
          <li className="py-4">
            <a href="/#hero" onClick={() => setOpen((open) => !open)}>
              About me
            </a>
          </li>
          <li className="py-4">
            <a href="/blog" onClick={() => setOpen((open) => !open)}>
              Blog
            </a>
          </li>
          <li className="py-4">
            <a href="#contact" onClick={() => setOpen((open) => !open)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
