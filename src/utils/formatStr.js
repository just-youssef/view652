const arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g]
const englishNumbers  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const formatStr = (str) => {
    // str = str.replace('ي','ى').replace('ة','ه')
    for(var i=0; i<10; i++)
    {
      str = str.replace(arabicNumbers[i], englishNumbers[i]);
    }
    return str;
}

export default formatStr