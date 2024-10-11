export async function getUser(username: string, password: string): Promise<boolean> {
    return (username === 'admin' && password === 'admin') || (username === 'employee' && password === 'employee');
}