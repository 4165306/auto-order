
export default class System {

    static async sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    static async waitForVariable(var1: any, var2: any ) {
        while(var1 !== var2) {
            this.sleep(1000)
        }
    }
    
    static async waitForFunc(func: () => boolean | Promise<boolean>) {
        while(await func()) {
           await this.sleep(1000)
        }
    }
}