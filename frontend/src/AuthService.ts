import { apiUrl } from "./config";

export async function authorize(username: string, password: string) {
    const requestOptions: RequestInit = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    };

    let result0 = await fetch(`${apiUrl}/auth/login?username=${username}&password=${password}`, requestOptions);
    return result0;
}
