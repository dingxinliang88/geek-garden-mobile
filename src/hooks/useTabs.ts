import { ChannelItem, fetchChannels } from "@/apis/list";
import { useEffect, useState } from "react";

function useTabs() {
  const [channels, setChannels] = useState<ChannelItem[]>([]);

  useEffect(() => {
    const getChnanels = async () => {
      try {
        const res = await fetchChannels();
        setChannels(res.data.data.channels);
      } catch (error) {
        throw new Error("fetch channel error");
      }
    };
    getChnanels();
  }, []);

  return {
    channels,
  };
}

export { useTabs };
