import logConfig from "@/config/log-config";
import { dateTimeFormatMillisecond as format } from "@/util/data-time-format";

export default class Log {
    /**
     * 日志打印对象
     * @private 日志目标,方法或者组件的名字
     */
    private readonly target: string;
    constructor(target: string) {
        this.target = target + ":";
    }
    /**
     * 打印trace日志
     * @param msg 打印日志的说明
     * @param data 打印日志的附加数据
     */
    trace(msg: string, ...data: any[]): void {
        logConfig.isEnableTrace &&
            // eslint-disable-next-line no-console
            console.trace("%c" + format(new Date()) + " [TRACE] " + this.target, "color: #DC143C", msg, ...data);
    }

    /**
     * 打印debug日志
     * @param msg 打印日志的说明
     * @param data 打印日志的附加数据
     */
    debug(msg: string, ...data: any[]): void {
        logConfig.isEnableDebug &&
            // eslint-disable-next-line no-console
            console.debug("%c" + format(new Date()) + " [DEBUG] " + this.target, "color: #20B2AA", msg, ...data);
    }

    /**
     * 打印info日志
     * @param msg 打印日志的说明
     * @param data 打印日志的附加数据
     */
    info(msg: string, ...data: any[]): void {
        logConfig.isEnableInfo &&
            // eslint-disable-next-line no-console
            console.debug("%c" + format(new Date()) + " [INFO] " + this.target, "color: #228B22", msg, ...data);
    }
    /**
     * 打印网络请求日志
     * @param msg 打印日志的说明
     * @param data 打印日志的附加数据
     */
        request(msg: string, ...data: any[]): void {
            logConfig.isEnableRequest &&
                // eslint-disable-next-line no-console
                console.debug("%c" + format(new Date()) + " [REQUEST] " + this.target, "color: #76e", msg, ...data);
        }
    /**
    * 打印warn日志
    * @param msg 打印日志的说明
    * @param data 打印日志的附加数据
    */
    warn(msg: string, ...data: any[]): void {
        logConfig.isEnableWarn &&
            // eslint-disable-next-line no-console
            console.warn(format(new Date()), "[WARN]", this.target, msg, ...data);
    }

    /**
     * 打印error日志
     * @param msg 打印日志的说明
     * @param data 打印日志的附加数据
     */
    error(msg: string, ...data: any[]): void {
        logConfig.isEnableError &&
            // eslint-disable-next-line no-console
            console.error(format(new Date()), "[ERROR]", this.target, msg, ...data);
    }
}