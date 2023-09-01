"use client";

import { useEffect, useState } from "react";
import ProModal from "./pro-modal";

export const ModalProvider = () => {
  const [mounted, isMounted] = useState(false);

  useEffect(() => {
    isMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ProModal />
    </>
  );
};
