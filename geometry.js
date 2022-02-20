export class Geometry {


    static luasPersegi(sisi) {
        return Math.pow(sisi, 2)
    }

    volKubus = function(sisi) {
        return Math.pow(sisi, 3)
    }

    volTabung = (jari, tinggi) => {
        return Math.PI * Math.pow(jari, 2) * tinggi
    }
}

export function book() {
    console.log("blok")
}