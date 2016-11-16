function chunk(chunkSize, array) {
    return array.reduce((previous, current) => {
        let chunk;
        if (previous.length === 0
            || previous[previous.length - 1].length === chunkSize) {
            chunk = [];
            previous.push(chunk);
        }
        else
            chunk = previous[previous.length - 1];
        chunk.push(current);
        return previous;
    }, []);
}

function repeat(item, length) {
    return Array.from({ length: length }, () => item)
}