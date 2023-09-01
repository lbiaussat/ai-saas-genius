"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a8824440-43a9-4a0e-841b-7fd3b823481d");
  }, []);
  return null;
};
export default CrispChat;
