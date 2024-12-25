import { useState } from "react";

let id = 0;
const genId = () => ++id;

export function useId() {
  const [uid] = useState(() => String(genId()));
  return uid;
}