/* *
 * 在浏览器的扩展程序界面->开发者模式->检查视图可以调试background
 */

// 发送消息到content
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) { //获取当前Tab
    var btc = chrome.tabs.connect(tabId, {
        name: "BgToCon"
    }); //建立通道，指定tabId，并命名

    btc.postMessage({
        greeting: "Hello"
    }); //利用通道发送一条消息。

});

// 接收content发过来的消息
chrome.extension.onConnect.addListener(function(ctb) {//监听是否连接，bac为Port对象
    ctb.onMessage.addListener(function(msg) {//监听是否收到消息，msg为消息对象
        console.log(msg.back);
    })
})