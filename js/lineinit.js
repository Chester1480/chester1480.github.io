window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};
function initializeApp(data) {
    return data.context.userId;
}