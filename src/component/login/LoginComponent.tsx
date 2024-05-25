import {App, Button, Checkbox, Form, Input} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import "./LoginComponent.sass";
import RequestHandler from "@/http/RequestHandler.ts";
import {LoginData} from "@/type/Login";
import LogFactory from "@/log/LogFactory.ts";
import {saveLoginResult} from "@/storage/LocalStorageHandler.ts";
import {useNavigate} from "react-router-dom";
// import RequestHandler from "@/http/RequestHandler.ts";

const log = LogFactory.getLogger("LoginComponent");

const LoginComponent = () => {


    const { message } = App.useApp();
    const navigate = useNavigate();
    const onFinish = async (values: LoginData) => {
        log.debug("用户登录表单", values);
        const res = await RequestHandler.login(values);
        log.debug("用户登录数据", res);
        if (res.success){
            saveLoginResult(res.data);
            message.success("登录成功");
            navigate("/nav");
        }
    };
    // RequestHandler.get();
    return (
        <div style={{backgroundColor: "#020202"}}>
            <video src={"http://localhost/bg.mp4"} autoPlay loop muted className="bg-video"/>
            <Form
                name="user_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                wrapperCol={{ span: 24 }}
                layout={"horizontal"}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginComponent;