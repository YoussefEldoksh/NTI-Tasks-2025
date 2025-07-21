

export function capitalize(word)
{
    let capitalize =String(word).charAt(0).toUpperCase() + String(word).slice(1);
    return capitalize;
}