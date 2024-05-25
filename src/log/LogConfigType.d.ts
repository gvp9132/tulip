/**
 * 日志配置类型
 */
export type LogConfigType = {

    /**
     * 是否启用trace日志打印
     */
    isEnableTrace: boolean;
    /**
     * 是否启用debug日志打印
     */
    isEnableDebug: boolean;
    /**
     * 是否启用info日志打印
     */
    isEnableInfo: boolean;
    /**
     * 是否启用warn警告日志打印
     */
    isEnableWarn: boolean;
    /**
     * 是否启用error错误日志打印
     */
    isEnableError: boolean;
    /**
     * 是否启用request请求日志打印
     */
    isEnableRequest: boolean;
    /**
     * 是否启用redux日志打印
     */
    isEnableRedux: boolean;
    /**
     * 是否启用默认日志打印
     */
    isEnableDefault: boolean;
}