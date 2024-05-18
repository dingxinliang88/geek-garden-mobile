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

export type ListParams = {
  channel_id: string;
  timestamp: string;
};

type ListItem = {
  art_id: string;
  title: string;
  aut_id: string;
  comm_count: number;
  pubdate: string;
  aut_name: string;
  is_top: number;
  cover: {
    type: number;
    images: string[];
  };
};

export type ListRes = {
  results: ListItem[];
  pre_timestamp: string;
};

/**
 * @param params channel_id, timestamp
 * @returns 文章列表
 */
export function fetchList(params: ListParams) {
  return http.request<ResType<ListRes>>({
    url: "/articles",
    params,
  });
}
