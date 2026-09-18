export async function searchURL(txt){
    return /https?:\/\/\S+/.test(txt);
}

export function getURL(txt){
    const match = txt.match(/https?:\/\/\S+/);
    return match[0];
}