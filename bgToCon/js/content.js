// 接收来自background的消息
chrome.extension.onConnect.addListener(function(btc) { //监听是否连接，cab为Port对象
    btc.onMessage.addListener(function(msg) { //监听是否收到消息，msg为消息对象
        console.log(msg.greeting);

        // 发送消息到background
        if(msg.greeting == 'Hello') {
            var ctb = chrome.extension.connect({
                name: "ConToBg"
            }); //建立通道，并给通道命名
            ctb.postMessage({
                back: "goodbye"
            }); //利用通道发送一条消息。
        }

    })
})