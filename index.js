/**
 * Send message
 * 
 * @param {String} email
 * @param {String} message
 * @return {String} return the information about the message
 */
function sendMessage(email, message) {
    const date = new Date();
    var infor = "<div class=\'message\'><p><span>" + email + "&nbsp;&nbsp;" + date.getFullYear() + "." + date.getMonth() + "." + date.getDate() 
                + "&nbsp;&nbsp;" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "</span></p>"
                + "<p>" + message + "</p><\div>";
    return infor;
}

/**
 * Connect messages
 * @param {String} infor
 * @param {String} messages
 * @return {String} return the messages connected
 */
function connectMessages(infor, messages) {
    messages += infor;
    return messages;
}

// Unit Test
var messages = null;
const email = '734113510@qq.com';
const message = 'hello world!';
const infor = sendMessage(email, message);
console.log(connectMessages(infor, messages));