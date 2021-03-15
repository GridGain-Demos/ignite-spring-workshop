import {apiUrl, apiUrl2} from "./config";

export async function authorize(username: string, password: string): Promise<Response | null> {
    let req = async (url: string) => {
        const requestOptions: RequestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        };

        return await fetch(`${url}/auth/login?username=${username}&password=${password}`, requestOptions);
    };

    let result0;

    try {
        result0 = await req(apiUrl);
        if (!result0.ok) {
            return null;
        }
    } catch (e) {
        result0 = await req(apiUrl2);

        if (!result0.ok) {
            return null;
        }
    }

    return result0;
}
