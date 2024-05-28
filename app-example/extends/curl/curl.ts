import axios from 'axios'
export default class Curl {

    
    public static async exec(command: string) {
        // 提取 URL
        const urlRegex = /curl\s+['"]?([^'"\s]+)/;
        const match = command.match(urlRegex);
        if (!match) {
            throw new Error('无法从 curl 命令中提取 URL');
        }
        const url = match[1];

        // 提取请求方法，默认为 GET
        const methodRegex = /-X\s+([A-Z]+)/;
        const methodMatch = command.match(methodRegex);
        const method = methodMatch ? methodMatch[1] : 'GET';

        // 提取请求体
        const dataRegex = /--data(-binary)?\s+['"]?([^'"\s]+)/;
        const dataMatch = command.match(dataRegex);
        const data = dataMatch ? dataMatch[2] : null;

        // 提取请求头
        const headerRegex = /-H\s+['"]?([^'"\s:]+):\s*([^'"\s]+)/g;
        const headers = {};
        let headerMatch;
        while ((headerMatch = headerRegex.exec(command))) {
            // @ts-ignore
            headers[headerMatch[1]] = headerMatch[2];
        }
        // 发送 Axios 请求
        const response = await axios({
            method,
            url,
            headers,
            data
        });
        return response.data
    }
}