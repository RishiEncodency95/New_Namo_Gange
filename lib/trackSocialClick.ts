
import fetchClient from "./fetchClient";

export const trackSocialClick = async (iconName: string) => {
  try {
    // const ipRes = await axios.get("https://api.ipify.org?format=json");
    // const ipAddress = ipRes.data.ip;

    await fetchClient.post("/click-analytics/create", {
      iconName,
      // ipAddress,
    });
    
    console.log(`Tracked click: ${iconName}`);
  } catch (error) {
    console.error("Failed to track social click:", error);
  }
};
