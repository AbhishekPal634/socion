import { cn } from "@/lib/utils";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({ items, desktopClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
    </>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "flex mx-auto md:flex h-16 gap-4 items-end justify-center bg-gray-50 bg-opacity-10 backdrop-blur backdrop-filter dark:bg-neutral-900 dark:bg-opacity-10 dark:backdrop-blur dark:backdrop-filter border border-gray-100 dark:border-neutral-800 shadow-lg px-4 pb-3 w-full",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};
function IconContainer({ title, icon, href }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-12 h-12 aspect-square dark:bg-neutral-800 flex items-center justify-center relative mx-2 sm:mx-12"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 2 }}
              exit={{ opacity: 0, y: 1 }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
      </motion.div>
    </Link>
  );
}
