import { atom } from "recoil";

export const playerRangeState = atom({
  key: "playerRangeState",
  default: 0
});

export const volumeRangeState = atom({
  key: "volumeRangeState",
  default: 50
});

export const isPlayingState = atom({
  key: "isPlayingState",
  default: false
});
