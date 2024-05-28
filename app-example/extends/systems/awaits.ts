export default class Awaits {
    static async awaitFunc(func: Function, timeout: number = 30000) {
        const currentTimestamp = new Date().getTime()
        while(true) {
            if (currentTimestamp + timeout < (new Date().getTime())) {
                throw new Error('timeout')
            }
            await func()
            await this.sleep()
        }
    }
    static async sleep(time: number = 500) {
        return new Promise(resolve => setTimeout(resolve, time))
    }
}