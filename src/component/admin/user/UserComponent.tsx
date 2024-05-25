import {Button, Card, Divider, Space} from "antd";
import LogFactory from "@/log/LogFactory.ts";
import RequestHandler from "@/http/RequestHandler.ts";

const log = LogFactory.getLogger("UserComponent");
const UserComponent = () => {



    const testConnect = async () => {
        log.debug("测试连接");
        const res = await RequestHandler.get("/test/auth");
        log.debug("测试连接结果", res);
    }

    const rootHello = async () => {
        const res = await RequestHandler.get<string>("/test/connect");
        log.debug("请求[/root/hello]结果", res);
    }

    const getUser = () => {
        RequestHandler.get("/manager/user")
            .then(res => {
                log.debug("获取用户列表信息", res);
            });
    }

    const roleList = () => {
        RequestHandler.get("/manager/role/list")
            .then(res => {
                log.debug("获取角色列表信息", res);
            });
    }

    const flushRolePathCache = () => {
        RequestHandler.get("/root/cache/clear/role-path")
            .then(res => {
                log.debug("清空角色路径缓存", res);
            });
    }

    return (
        <Card title={"用户列表"}>
         <Space>
             <Button type={"primary"} onClick={testConnect}> 测试连接 </Button>
             <Button type={"primary"} onClick={rootHello}> 请求[/test/connect] </Button>
             <Button type={"primary"} onClick={getUser}> 请求[/manager/user] </Button>
             <Button type={"primary"} onClick={roleList}> 请求[/manager/role/list] </Button>
         </Space>
            <Divider/>
            <Space>
                <Button type={"primary"} danger onClick={flushRolePathCache}>清空角色路径缓存</Button>
            </Space>

        </Card>
    );
};

export default UserComponent;