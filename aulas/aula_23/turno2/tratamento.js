async function media(n1, n2) {
    try {
        const media = (n1 + n2) /2
        return media
    } catch (error) {
        console.log(`Error: ${error}`)        
    }
    
}

console.log(media(15,5))

console.log('Hello')