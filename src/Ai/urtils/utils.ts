
export const imageToBlob = async (imageUrl: string): Promise<Blob | undefined> => {
    try {
        const response = await fetch(imageUrl)
        const blob: Blob = await response.blob()
        return blob
    } catch (error) {
        console.log(error)
    }
    return undefined;
}
