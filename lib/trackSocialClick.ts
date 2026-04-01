import axios from "axios";
import axiosClient from "./axiosClient";

export const trackSocialClick = async (iconName: string) => {
  try {
    // const ipRes = await axios.get("https://api.ipify.org?format=json");
    // const ipAddress = ipRes.data.ip;

    await axiosClient.post("/click-analytics/create", {
      iconName,
      // ipAddress,
    });
    
    console.log(`Tracked click: ${iconName}`);
  } catch (error) {
    console.error("Failed to track social click:", error);
  }
};
