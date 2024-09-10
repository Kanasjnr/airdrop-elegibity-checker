import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import Airdrop from "./components/Airdrop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <Airdrop />
    </ChakraProvider>
  </StrictMode>
);
