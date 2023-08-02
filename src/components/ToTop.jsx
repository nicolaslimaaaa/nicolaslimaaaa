import { AiOutlineArrowUp } from "react-icons/ai";

const ToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

  return (
    <div
      onClick={scrollToTop}
      className="md:hidden h-8 w-8 bg-menu-color fixed right-4 bottom-4 flex justify-center items-center rounded-full font-bold text-text-color"
    >
      <AiOutlineArrowUp />
    </div>
  )
}

export default ToTop