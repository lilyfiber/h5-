
export function GAFunc (paramData) {
    var defObj = {
        ak: 'e71dc0264f31815df587d7ede49a75aa',
        version: '1.0.0',
        frontTime: new Date().getTime(),
        bizType: 'A000',
        logType: 'KO1O1001',
        platform: 'S2',
        referurl: document.referrer ? document.referrer : '',
        curpageurl: location.href ? location.href : '',
        os: '',
        explorer: '',
        vexplorer: -1,
        display: screen.width + 'x' + screen.height,
        wt: -1,
        onl: -1,
        allrt: -1,
        session: '',
        uid: '',
        pageId: '',
        log: ''
    };
    var params = Object.assign({}, defObj, paramData);
    var url = '//gringotts.ihomefnt.com/kv/v.gif';
    var image = document.createElement('img');
    var items = [];
    for (var key in params) {
        if (params[key] || params[key] === 0) {
            items.push(key + '=' + encodeURIComponent(params[key]));
        } else {
            items.push(key);
        }
    }
    image.onload = image.onerror = function () {
        image = image.onload = image.onerror = null;
    };
    image.src = url + (url.indexOf('?') < 0 ? '?' : '&') + items.join('&');
}
