/**
 * @name join
 * @method array.join()
 *
 * @param {string?} separator - optional.
 *
 * @description kegunaan join() itu untuk mengubah atau mengembalikan string baru dengan menggabungkan
 *              semua elemen dalam array.
 *
 * @returns {string}
 */

let array = ['Nugraha', 'Panca', 'Wibisana']; // Ini sebuah array yang akan saya ubah

const methodJoin = array.join(' '); // Contoh penggunaan nya seperti ini

console.log(methodJoin); // Akan menampilkan "Nugraha Panca Wibisana"

/**
 * @name fill
 * @method array.fill()
 *
 * @param {any} value
 * @param {number?} start - optional
 * @param {number?} end - optional
 *
 * @description kegunaan fill() itu untuk mengubah semua elemen dalam rentang index array menjadi nilai
 *              statis yang akan mengembalikan array yang telah di modifikasi.
 *
 * @returns {array}
 */

array = [1, 2, 3, 4, 5]; // Ini sebuah array yang akan saya ubah

const methodFill = array.fill(1, 2, 5); // Contoh penggunaan nya seperti ini

console.log(methodFill); // Akan menampilkan [ 1, 2, 1, 1, 1 ]

/**
 * @name includes
 * @method array.includes()
 *
 * @param {any} searchElement
 * @param {number?} fromIndex - optional
 *
 * @description kegunaan includes() itu untuk menentukan apakah sebuah array menyertakan nilai tertentu
 *              dan akan mengembalikan sebuah boolean.
 *
 * @returns {boolean}
 */

array = ['hitam', 'biru', 'hijau', 'kuning', 'putih', 'ungu']; // Ini sebuah array yang akan saya cek

const methodIncludes = array.includes('biru'); // Contoh penggunaan nya seperti ini

console.log(methodIncludes); // Akan menampilkan true

/**
 * @name indexOf
 * @method array.indexOf()
 *
 * @param {any} searchElement
 * @param {number?} fromIndex - optional
 *
 * @description kegunaan indexOf() itu untuk mengembalikan index pertama di mana elemen tertentu
 *              dapat di temukan dalam array atau -1 jika tidak ada.
 *
 * @returns {number}
 */

array = ['1', 2, [3], { 4: 4 }, undefined]; // Ini sebuah array yang akan saya cek

const methodIndexOf = array.indexOf(undefined, 2); // Contoh penggunaan nya seperti ini

console.log(methodIndexOf); // Akan menampilkan 4

/**
 * @name slice
 * @method array.slice()
 *
 * @param {number?} start - optional
 * @param {number?} end - optional
 *
 * @description kegunaan slice() itu untuk mengembalikan salinan sebagian dari array tertentu
 *              yang dimana awal dan akhir mewakili index item dalam array tersebut. Array asli
 *              tidak akan berubah.
 *
 * @returns {array}
 */

array = ['kucing', 'burung', 'gajah', 'kambing', 'ayam']; // ini sebuah array yang akan saya cek

const methodSlice = array.slice(2, 4); // Contoh penggunaan nya seperti ini

console.log(methodSlice); // Akan menampilkan [ 'gajah', 'kambing' ]
