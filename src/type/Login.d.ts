/**
 * 用户登录数据类型
 */
export type LoginData = {
    username: string,
    password: string
}

/**
 * 用户登录返回结果
 */
export type LoginResult = {
    username: string,
    token: string,
    tokenId: string,
    createTime: string,
    expireTime: Date,
    expired: boolean,
}