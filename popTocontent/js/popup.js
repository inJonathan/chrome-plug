function sendClicks() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        // 向content发消息
        chrome.tabs.sendMessage(tabs[0].id, {
            greeting: "hello"
        }, function(response) {
            // 接收返回值
            console.log(response.farewell);
        });
    });
}

$(function() {
    $('#sendclicks').click(function() {
        sendClicks();
    });
});