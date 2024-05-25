import {LoginData, LoginResult} from "@/type/Login";
import JsonResult from "@/http/JsonResult";
import {getLoginResult} from "@/storage/LocalStorageHandler.ts";

/**
 * 全局请求处理器
 */
export default class RequestHandler{
    private static BASE_URL = "http://localhost:9527";

    /**
     * 发送get请求
     * @param url 请求地址
     */
    public static async get<T>(url: string): Promise<JsonResult<T>>{
        return await fetch(this.BASE_URL + url, {
            method: "GET",
            headers: this.getHeaders()
        })
            .then(this.handlerResponse)
            .catch(this.handlerError);
    }

    /**
     * 用户登录方法
     * @param data 登录数据
     */
    public static async login(data: LoginData): Promise<JsonResult<LoginResult>>{
        return await fetch(this.BASE_URL + "/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: `username=${data.username}&password=${data.password}`
        }).then(res => res.json())
            .catch((err: any) => {
                console.log("用户登录错误", err);
            });

    }

    /**
     * 处理请求成功的response对象
     */
    public static async handlerResponse(response: Response){
        return response.json();
    }

    /**
     * 处理请求失败的操作
     */
    public static async handlerError(error: any){
        error.msg;
    }

    /**
     * 获取请求头
     */
    public static getHeaders(): Headers{
        const headers = new Headers();
        headers.set("Content-Type", "application/json");
        headers.set("Authorization", getLoginResult().token);
        return headers;
    }
}