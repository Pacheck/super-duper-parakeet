export const TextHelper = (text) => {
    const filteredText = text.replaceAll("&#039;", "'")
    return filteredText.replaceAll("&quot;", '"')
}