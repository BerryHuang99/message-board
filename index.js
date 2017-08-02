// 不推荐使用这种方式进行数组初始化
// 一般采用对象字面量的方式进行
// var urls = [];
// 具体原因我回头告诉你，忘记了--
const urls = [];


// 注意看注释，这里要求有一个返回值
/**
 * Convert originalURL to a unique short url
 * 
 * @param {String} originalURL
 * @return {String} returns a new unique short url
 */
function convertToShortURL(originalURL) {
    const currentIndex = urls.length;
    urls[currentIndex] = originalURL;
    return currentIndex;
}

/**
 * Revert shortURL back to original long url
 * @param {String} shortURL
 * @return {String} returns original long url
 */
function revertToOriginalURL(shortURL) {
    return urls[shortURL];
}

// Unit Test
const url = 'http://www.huangyufeng.com';
const short = convertToShortURL(url);
const originalURL = revertToOriginalURL(short);
console.log(originalURL);