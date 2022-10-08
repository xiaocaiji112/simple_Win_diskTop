interface IDispatch{
    on:(name:string,fn:Function)=>void
    emit:(name:string,...args:Array<any>)=>void
}

type List = {
[key:string]:Array<Function>
}
class Dispatch implements IDispatch{
    list:List
    constructor(){
        this.list = {}
    }
    on(name:string,fn:Function){
        const callback = this.list[name] ?? []
        callback.push(fn)
        this.list[name] = callback
    }
    emit(name:string,...args:Array<any>){
        const fns = this.list[name]
        if(fns){
            fns.forEach(fn =>{
                fn.apply(this,args)
            })
        }else{
            console.log('error')
        }
    }
}
export default new Dispatch()