import { http } from "@/utils/request";
import { ResType } from "./base";

export type ChannelItem = {
  id: number;
  name: string;
};

type ChannelRes = {
  channels: ChannelItem[];
};

/**
 * 请求频道列表
 * @returns channels
 */
export function fetchChannels() {
  return http.request<ResType<ChannelRes>>({
    url: "/channels",
  });
}
