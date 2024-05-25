
import {Badge, Flex, Layout, Space} from "antd";
// import {getLoginResult} from "@/storage/LocalStorageHandler.ts";
const { Header} = Layout;

import "./NavigateHeader.sass";
import {useEffect, useState} from "react";
import RequestHandler from "@/http/RequestHandler.ts";
import LogFactory from "@/log/LogFactory.ts";
import {Link} from "react-router-dom";

const log = LogFactory.getLogger("NavigateHeaderComponent");

const NavigateHeaderComponent = () => {
    // const login = getLoginResult();

    const [ status, setStatus ] = useState<boolean>(false);

    const loop = () => {
        RequestHandler.get<boolean>("/test/connect")
            .then(res => {
                log.debug("测试网关状态: ", res.data);
                if (res.data && res.success){
                    setStatus(true)
                }else {
                    setStatus(false);
                }
            });
    }

    useEffect(() => {
        loop();
        // const lid = setInterval(loop,1000 * 5);
        // return () => {
        //     clearInterval(lid);
        // }
    }, []);



    return (
        <Header
            style={{
                padding: "0 5px",
                display: 'flex',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 900,
                width: '100%',
            }}>
                <div className="tulip-logo">
                    <img className={"logo-image"} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" height="32" width="32"
                         alt="logo"/>
                    <h2 className={"logo-title"}>Tulip</h2>
                </div>
                <Flex style={{width: "100%" }} justify={"space-between"}>
                    <Space>
                        <Link to={"/login"}>用户登录</Link>
                    </Space>
                    <Flex>
                        <span style={{ padding: "0 5px" }}>网关状态</span>
                        <Badge status={ status ? "success" : "default" } text={ status ? "已连接" : "已断开" } />
                    </Flex>
                    <Space>3</Space>
                </Flex>

            {/*<Flex justify={"space-between"}>*/}
            {/*    <Flex>*/}
            {/*        <Space>*/}
            {/*            <Link to={"/login"}>用户登录</Link>*/}
            {/*            <Link style={{color: "#7a3b4b"}} to={"/logout"}>退出登录</Link>*/}
            {/*        </Space>*/}
            {/*        <Space>*/}
            {/*            <div> 用户过期: {login.expireTime.toString()} </div>*/}
            {/*        </Space>*/}
            {/*    </Flex>*/}

            {/*    <Flex >*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(75,210,47,1)" height={30}>*/}
            {/*            <path*/}
            {/*                d="M8.68637 4.00008L11.293 1.39348C11.6835 1.00295 12.3167 1.00295 12.7072 1.39348L15.3138 4.00008H19.0001C19.5524 4.00008 20.0001 4.4478 20.0001 5.00008V8.68637L22.6067 11.293C22.9972 11.6835 22.9972 12.3167 22.6067 12.7072L20.0001 15.3138V19.0001C20.0001 19.5524 19.5524 20.0001 19.0001 20.0001H15.3138L12.7072 22.6067C12.3167 22.9972 11.6835 22.9972 11.293 22.6067L8.68637 20.0001H5.00008C4.4478 20.0001 4.00008 19.5524 4.00008 19.0001V15.3138L1.39348 12.7072C1.00295 12.3167 1.00295 11.6835 1.39348 11.293L4.00008 8.68637V5.00008C4.00008 4.4478 4.4478 4.00008 5.00008 4.00008H8.68637ZM6.00008 6.00008V9.5148L3.5148 12.0001L6.00008 14.4854V18.0001H9.5148L12.0001 20.4854L14.4854 18.0001H18.0001V14.4854L20.4854 12.0001L18.0001 9.5148V6.00008H14.4854L12.0001 3.5148L9.5148 6.00008H6.00008ZM12.0001 16.0001C9.79094 16.0001 8.00008 14.2092 8.00008 12.0001C8.00008 9.79094 9.79094 8.00008 12.0001 8.00008C14.2092 8.00008 16.0001 9.79094 16.0001 12.0001C16.0001 14.2092 14.2092 16.0001 12.0001 16.0001ZM12.0001 14.0001C13.1047 14.0001 14.0001 13.1047 14.0001 12.0001C14.0001 10.8955 13.1047 10.0001 12.0001 10.0001C10.8955 10.0001 10.0001 10.8955 10.0001 12.0001C10.0001 13.1047 10.8955 14.0001 12.0001 14.0001Z"></path>*/}
            {/*        </svg>*/}
            {/*    </Flex>*/}
            {/*</Flex>*/}

        </Header>
    );
};

export default NavigateHeaderComponent;