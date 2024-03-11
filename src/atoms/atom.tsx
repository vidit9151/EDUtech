import { atom } from "recoil";

export const hamburgerOpenAtom = atom({ key: "hamburgerAtom", default: false });
export const emailContactAtom = atom({
  key: "emailContactAtom",
  default: "",
});
export const queryContactAtom = atom({
  key: "queryContactAtom",
  default: "",
});
