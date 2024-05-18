import { Tabs } from "antd-mobile";
import "./style.css";
import { useTabs } from "@/hooks/useTabs";
import HomeList from "./components/HomeList";

const Home = () => {
  const { channels } = useTabs();

  return (
    <div className="tab-container">
      <Tabs defaultActiveKey={"0"}>
        {channels.map((item) => (
          <Tabs.Tab title={item.name} key={item.id}>
            <div className="list-container">
              {/* List 列表 */}
              <HomeList channelId={"" + item.id} />
            </div>
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Home;
