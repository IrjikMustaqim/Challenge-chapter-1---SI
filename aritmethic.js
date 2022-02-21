class Aritmethic {
    /**
     * @param {Array} sumDaftarAngka - Daftar angka
     * @param {string} myString - The string
     */
    penjumlahan(sumDaftarAngka) {
        let hasil = 0
        forEach(sumDaftarAngka, function(value) {
            sum += value
        })
        return sum
    }

    perkalian(a, b) {
        return a * b * 3;
    }

    pembagian(a, b) {
        return a / b;
    }
}

let f = () => new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("dsde")
    }, 2000)
})

console.log(typeof f)

function v() {
    return "dsfsfsf"
}

function k() {
    return "dsdsfdsfsfsfsf"
}



async function mbuh() {
    await console.log("dddd")
    return "hello"
}

mbuh()
console.log("wes wes to wes")
