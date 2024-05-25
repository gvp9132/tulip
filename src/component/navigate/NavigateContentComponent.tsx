
import {Layout} from "antd";
import UserComponent from "@/component/admin/user/UserComponent.tsx";

const {Content} = Layout;

const NavigateContentComponent = () => {
    return (
        <Layout style={{
            marginTop: "64px" ,
            zIndex:800,
            marginLeft: "205px" ,
            width: "100%" ,
            overflowX: "hidden" ,
            backgroundColor: "#333"
        }}>
            <Content
                style={{
                    width: "100%" ,
                    paddingTop: 15  ,
                    overflowX: "hidden" ,
                    minHeight: 600,
                }}
            >
                <UserComponent/>
            </Content>
        </Layout>
    );
};

export default NavigateContentComponent;