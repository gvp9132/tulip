import Log from "@/log/Log";

/**
 * 日志工厂, 用于创建日志对象
 */
export default class LogFactory {


    /**
     * 获取日志对象
     * @param target 日志对象名称
     */
    public static getLogger(target: string): Log {
        return new Log(target);
    }
}