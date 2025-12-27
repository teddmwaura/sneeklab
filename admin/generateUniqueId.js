export function generateProductId(){
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = Math.floor(Math.random() * 1000000)

    let accumulatorPattern = '';

    for(let i = 0; i < 4; i++){
        const randomLetterrs = Math.floor(Math.random() * letters.length)

        accumulatorPattern += letters[randomLetterrs];
    }
    accumulatorPattern += numbers;

    console.log(accumulatorPattern);
    return accumulatorPattern
}