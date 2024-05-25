/**
 * 全局请求响应对象包装
 */
type JsonResult<T> = {
    /** 响应状态码 */
    code: number,
    /** 响应成功表示,如果值为true,表示有响应数据 */
    success: boolean,
    /** 响应提示信息*/
    message: string,
    /** 响应的真实数据 */
    data: T,
    /** 响应时间戳 */
    timestamp: string
}

export default JsonResult;