// 任意数求和
function sum() {
    var count = 0;
    for (var i = 0; i < arguments.length; i++) {
        count += arguments[i];

    }
    console.log(count);
}
// 实参可以位任意数相加
sum(1, 3, 5, 6);


// 以下字节长度封装函数：
var str = 'advd';
function bytesLength(str) {
    var count,
        len;
    count = len = str.length;
    for (var i = 0; i < str.lenth; i++) {
        if (str.charCodeAt(i) > 255) {
            count++;
        }
    }
    return count;
}
// 以上字节长度封装函数：

// 冒泡排序封装函数：
var arr = [33, 11, 22, 44, 66, 55];
function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// 冒泡排序封装函数
// 升序
arr.sort(function (a, b) {
    return a - b;
})
// 降序
arr.sort(function (a, b) {
    return b - a;
})

typeof 封装函数工具：
function type(target) {
    var ret = typeof (target);
    var template = {
        "[object Array]": "array",
        "[object Object]": "object",
        "[object Number]": "number - object",
        "[object Boolean]": "boolean - object",
        "[object String]": "string - object"
    }
    if (target === null) {
        return "null";
    } else if (ret === "object") {
        var str = Object.prototype.toString.call(target);
        return template[str];
    } else {
        return ret;
    }
}


// 数组去重：

var arr = [1, 3, 4, 4, 4, 5, 5, 6];
Array.prototype.unique = function () {
    var temp = {},
        arr = [],
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (!temp[this[i]]) {
            temp[this[i]] = 'abc';
            arr.push(this[i]);
        }
    }
    return arr;
}

// 字符串去重：
var str = 'aaaabbbbbcccccd';
String.prototype.uniqueString = function () {
    var obj = {};
    var res = '';
    for (var i = 0; i < this.length; i++) {
        if (!obj[this[i]]) {
            res += this[i];
            obj[this[i]] = true;
        }
    }
    return res;
}

// 以下为快排函数
var arr = [33, 11, 22, 44, 66, 55];
function quickSort(arr) {
    var left = [],
        right = [],
        len = arr.length;
    // 跳出递归
    if (len <= 1) {
        return arr;
    }

    var oIndex = Math.floor(arr.lenght / 2);
    // 取出基准值
    var p = arr[oIndex];
    // 将基准值从数组中移除
    arr.splice(oIndex, 1);
    // var p = arr.splice(oIndex, 1)(0);----和上面两行代码一样
    for (var i = 0; i < len; i++) {
        if (arr[i] < p) {
            left.push(arr[i]);
        } else {
            rigth.push(arr[i]);
        }
    }
    return quickSort(left).concat([p], quickSort(right));
}
// 以上为快排函数



// 以下共享原型：target.prototype= origin.prototype  函数封装：

function inherit(target, origin) {
    target.prototype = origin.prototype;
}
inherit(Son, Father);
// 以上共享原型：target.prototype= origin.prototype  函数封装：

// typeof 封装函数：
function type(target) {
    var ret = typeof (target);
    var template = {
        "[object Array]": "array",
        "[object Object]": "object",
        "[object Number]": "number - object",
        "[object Boolean]": "boolean - object",
        "[object String]": "string - object"
    }
    if (target === null) {
        return "null";
    } else if (ret === "object") {
        var str = Object.prototype.toString.call(target);
        return template[str];
    } else {
        return ret;
    }
}
// typeof封装函数以上：

// 数组去重封装函数：
Array.prototype.end = function () {
    var temp = {},
        arr = [],
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (!temp[this[i]]) {
            temp[this[i]] = 'abc';
            arr.push(this[i]);
        }
    }
    return arr;
}
// 以上数组去重封装函数：

// 以下遍历元素节点封装函数：
function retElementChild(node) {
    var temp = {
        length: 0,
        push: Array.prototype.push,
        splice: Array.prototype.splice
    },
        child = node.childNodes,
        len = child.length;
    for (var i = 0; i < len; i++) {
        if (child[i].nodeType === 1) {
            temp.push(child[i]);
        }
    }
    return temp;
}
console.log(retElementChild(div));
// 以上遍历元素节点封装函数：


// 封装兼容性方法，求滚动轮滚动距离getScrollOffset()
function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}
// 封装兼容性方法，求滚动轮滚动距离getScrollOffset()

// 以下封装兼容性的addEvent(elem,type,handle);方法
function addEvent(elem, type, handle) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handle, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, function () {
            handle.call(elem); --------改变this指向  原指window 改为elem
        })
    } else {
        elem['on' + type] = handle;
    }
}
// 以上封装兼容性的addEvent(elem,type,handle);方法

// 以下封装函数为：取消冒泡事件：
box.addEventListener('click', function (event) {
    // event.stopPropagation();
    // e.cancelBubble = true;
    stopBubble(event); ------调用方法
    this.style.backgroundColor = 'red';
}, false)

document.addEventListener('click', function () {
    console.log('你闲的呀');
})
// 封装函数：
function stopBubble(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}
// 以上为取消冒泡封装函数：

// 封装函数：取消默认事件--鼠标右键菜单 cancelHandler
function cancelHandler(event) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}
// 以上为封装函数：取消鼠标右键默认事件菜单
// 匀速运动封装函数：
oBtn.onclick = function () {
    startMove(oDiv, 300);
}
// 以下

function startMove(dom, target) {
    clearInterval(timer);
    var iSpeed = null;
    var timer = null;
    iSpeed = target - dom.offsetLeft > 0 ? 7 : -7;
    timer = setInterval(function () {
        if (Math.abs(target - dom.offsetLeft) < Math.abs(iSpeed)) {
            clearInterval(timer);
            dom.style.left = target + 'px';
        } else {
            dom.style.left = dom.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}
// 匀速运动封装函数：
// 缓冲运动封装函数：
oBtn.onclick = function () {
    startMove(oDiv, 300);
}
//  以下
function startMove(dom, target) {
    clearInterval(timer);
    var iSpeed = null;
    var timer = null;
    timer = setInterval(function () {
        iSpeed = (target - dom.offsetLeft) / 7;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (dom.offsetLeft == target) {
            clearInterval(timer);
        } else {
            dom.style.left = dom.offsetLeft + iSpeed + 'px';
        }

    }, 30)

}
//  缓冲运动封装函数以上：


// 以下为获取DOM元素属性封装函数：
function getStyle(dom, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(dom, null)[attr];
    } else {
        return dom.currentStyle[attr];
    }
}
// 以上为获取DOM元素属性封装函数：

// 以下加速运动封装函数：
function startMove(dom, target) {
    clearInterval(timer);
    var a = 2,
        // 初始速度 a 
        iSpeed = 20;
    timer = setInterval(function () {
        iSpeed = iSpeed + a;
        if (target - oDiv.offsetLeft < iSpeed) {
            clearInterval(timer);
            oDiv.style.left = target + 'px';
        } else {
            oDiv.style.left = oDiv.offsetLeft + iSpeed + 'px';
        }
    }, 30)
}
// 以上加速运动封装函数：
// 以下弹性运动封装函数：
function startMove(dom, target) {
    clearInterval(timer);
    var a = 3,
        u = 0.8,
        iSpeed = 0;
    timer = setInterval(function () {
        a = (target - dom.offsetLeft) / 7;
        iSpeed += a;
        iSpeed *= u;
        if (Math.abs(iSpeed) < 1 && Math.abs(target - dom.offsetLeft) < 1) {
            clearInterval(timer);
            dom.style.left = target + 'px';
        } else {
            dom.style.left = dom.offsetLeft + iSpeed + 'px';
        }
        console.log(iSpeed);

    }, 30)
}
// 以上为弹性运动封装函数：
