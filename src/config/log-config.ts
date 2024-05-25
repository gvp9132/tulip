import {LogConfigType} from "@/log/LogConfigType";
/**
 * 日志打印配置
 */
const LogConfig: LogConfigType = {
    isEnableTrace: false,
    isEnableDebug: true,
    isEnableInfo: true,
    isEnableWarn: true,
    isEnableError: true,
    isEnableRequest: true,
    isEnableRedux: true,
    isEnableDefault: true,
};


export default LogConfig;