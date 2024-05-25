
import {Layout, Menu} from "antd";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";

const {Sider} = Layout;



const NavigateSiderComponent = () => {
    return (
        <Sider width={200} theme={"dark"} style={{
            // background: colorBgContainer ,
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 800,
            paddingTop: 63
        }}>
            <Menu
                theme={"dark"}
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined/>,
                        label: 'nav 1',
                    },
                    {
                        key: '2',
                        icon: <LaptopOutlined/>,
                        label: 'nav 2',
                    },
                    {
                        key: '3',
                        icon: <NotificationOutlined/>,
                        label: 'nav 3',
                    },

                ]}
            />
        </Sider>
    );
};

export default NavigateSiderComponent;