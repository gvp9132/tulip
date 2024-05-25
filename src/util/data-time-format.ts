/**
 * 格式化时间日期: yyyy-MM-dd HH:mm:ss
 * @param date 需要格式化的时间
 */
export const dateTimeFormat = (date: Date): string => {
    return dateFormat(date) + " " + timeFormat(date);
};
/**
 * 格式化时间: HH:mm:ss
 * @param date 需要格式化的时间
 */
export const timeFormat = (date: Date): string => {
    let hours: string | number = date.getHours();
    let minutes: string | number = date.getMinutes();
    let seconds: string | number = date.getSeconds();
    hours < 10 && (hours = "0" + hours);
    minutes < 10 && (minutes = "0" + minutes);
    seconds < 10 && (seconds = "0" + seconds);
    return hours + ":" + minutes + ":" + seconds;
};
/**
 * 格式化日期: yyyy-MM-dd
 * @param date 需要格式化的时间
 */
export const dateFormat = (date: Date): string => {
    let year = date.getFullYear();
    let month: string | number = date.getMonth() + 1;
    let day: string | number = date.getDate();
    month < 10 && (month = "0" + month);
    day < 10 && (day = "0" + day);
    return year + "-" + month + "-" + day;
};
/**
 * 格式化时间日期: yyyy-MM-dd HH:mm:ss.SSS
 * @param date
 */
export const dateTimeFormatMillisecond = (date: Date): string => {
    let year: number = date.getFullYear();
    let month: number = date.getMonth() + 1;
    let day: number = date.getDate();
    let hour: number = date.getHours();
    let minute: number = date.getMinutes();
    let second: number = date.getSeconds();
    let millisecond: number = date.getMilliseconds();
    return year
        + "-" + String(month).padStart(2, "0")
        + "-" + String(day).padStart(2, "0")
        + " "
        + String(hour).padStart(2, "0")
        + ":" + String(minute).padStart(2, "0")
        + ":" + String(second).padStart(2, "0")
        + "." + String(millisecond).padStart(3, "0");
};
