import {create} from "zustand";
import {device} from "./currentDevice";

const storeDevice = create<Store>((set) => ({
  device: device,
  setDevice: (device) => set({ device }),
}));

export default storeDevice;
