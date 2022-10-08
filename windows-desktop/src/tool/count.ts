
type C = {
     count:number,
     add:()=>void
}

class Count implements C{
    count:number
    constructor(){
        this.count = 0
    }

    add(){
        this.count = this.count + 1
    }
}
export default new Count()
