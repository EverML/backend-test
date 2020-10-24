module.exports = {
    convertToDate: (timestamp) => timestamp? new Date(timestamp * 1000): null,
}


