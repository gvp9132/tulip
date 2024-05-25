import {LoginResult} from "@/type/Login";

/**
 * 本地存储处理类
 */
export default class LocalStorageHandler{

}

/**
 * 保存用户登录结果
 * @param login 用户登录信息
 */
export const saveLoginResult = (login: LoginResult) => {
    window.localStorage.setItem("login-user", JSON.stringify(login));
}
/**
 * 获取用户登录结果
 */
export const getLoginResult = (): LoginResult => {
    const preStr = window.localStorage.getItem("login-user");
    if (preStr === null) {
        return {} as LoginResult
    }
    return JSON.parse(preStr);
}