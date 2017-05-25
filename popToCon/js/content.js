chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // 接收popup的消息
        console.log(request.greeting);

        // 返回popup消息
        if(request.greeting == "hello") {
            sendResponse({
                farewell: "goodbye"
            });
        }
    });