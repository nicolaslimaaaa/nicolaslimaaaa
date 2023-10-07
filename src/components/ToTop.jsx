import { AiOutlineArrowUp } from "react-icons/ai";
import { scrollToTop } from "../utils/scrollToTop";

const ToTop = () => {
  return (
    <div
      onClick={scrollToTop}
      className="md:hidden h-8 w-8 bg-menu-color fixed right-4 bottom-4 flex justify-center items-center rounded-full font-bold text-text-color bg-main-color"
    >
      <AiOutlineArrowUp />
    </div>
  )
}

export default ToTop