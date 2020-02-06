let siswa1 = 180;
let siswa2 = 170;
let siswa3 = 185;

function tinggiBadan() {
    if (siswa1 > siswa2) {
        if (siswa1 > siswa3) {
            return 'siswa 1';
        } else {
            return 'siswa 3';
        };
    } else {
        return 'siswa 2';
    };
};

function urutanTinggi() {
    let arr = [];
    arr.push(siswa1);
    arr.push(siswa2);
    arr.push(siswa3);

    return arr.sort(function(a,b){return b-a});
}

console.log(`Dari data berikut:\nsiswa1 = ${siswa1}\nsiswa2 = ${siswa2}\nsiswa3 = ${siswa3}\n`);
console.log(`yang tertinggi adalah ${tinggiBadan()}\n`);
console.log(`Dan berikut adalah urutan masing-masing tinggi tersebut: ${urutanTinggi()}`);
