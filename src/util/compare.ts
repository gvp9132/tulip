import BaseEntity from "type/entity";

/**
 * 比较两个对象的差异,如果没有差异反回null,如果存在差异返回差异对象 <br/>
 * 比较对象以source为基准,如果target对象的属性值与source对象的属性值不同,则最终反回差异对象中的属性值为target对象的属性值<br/>
 * 此方法用于更新对象时候确定对象是否有变化<br/>
 * 此方法只作为对象的浅层比较,不会比较对象的属性值的对象<br/>
 * 对象必须继承BaseEntity,否则无法进行比较<br/>
 * 比较过程不会修改参数对象的属性值<br/>
 * @param source 源对象(一般为修改前对象,对象id的属性必须有值)
 * @param target 需要进行比较的对象(一般为修改之后的对象)
 * @returns T|null 差异对象或者null,如果返回差异对象自动注入id属性
 */
export const compareObject= <T extends BaseEntity> (source: T, target: T): Partial<T> | null => {
    // 获取需要比较对象的全局属性名
    const keys = Object.keys(target);
    let diff = false;
    let result: Partial<T> = {};
    keys.forEach( k => {
        if(target[k as keyof T] !== source[k as keyof T]){
            // 属性值不相等
            diff = true;
            result[k as keyof T] = target[k as keyof T];
        }
    });
    if (diff){
        result.id = source.id;
        return result;
    }
    return null;
};

/**
 * 数组比较对象
 */
interface CompareObject<T> {
    /**
     * id需要更新的数据编号
     */
    id?: number,
    /**
     * 差异添加的数据
     */
    addNodes: T[],
    /**
     * 差异删除的数据
     */
    deleteNodes: T[],
}
/**
 * 比较两个数组的差异,如果没有差异返回null,如果存在差异返回差异对象 <br/>
 * 比较数据的时候以source为基础,如果target中存在source中没有的数据,则将target中的数据添加到差异对象add中<br/>
 * @param source 源数组,初始的数组
 * @param target 目标数组,需要进行比较的数组
 * @param id 需要更新的数据编号
 * @returns CompareObject<T> | null 如果数据存在差异返回差异对象,否则返回null
 */
export const compareArray = <T> (source: T[], target: T[], id?: number): CompareObject<T> | null => {
    let diff = false;
    let res: CompareObject<T> = {addNodes: [], deleteNodes: [], id: id};
    source.forEach( s => {
        if(!target.includes(s)){
            // source中的的s在target中不存在,将s添加的差异对象del中
            res.deleteNodes.push(s);
            diff = true;
        }
    });
    target.forEach( s => {
       if (!source.includes(s)){
           // target中的s在source中不存在,将s添加到差异对象add中
           res.addNodes.push(s);
           diff = true;
       }
    });
    return diff ? res : null;
};