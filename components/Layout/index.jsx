import { motion } from "framer-motion";

const Layout = ({ children }) => (
  <motion.div
    initial={{ x: 0, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 0, opacity: 0 }}
    transition={{
      duration: .5
    }}
  >
    {children}
  </motion.div>
);
export default Layout;
