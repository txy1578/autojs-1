"auto";

var Maid = require("./MyMaid.js");
var maid = new Maid();

let {
    clickAction, swipeAndShow, setIntervalBySetTimeout, keycode,
    getSelector, equalObjects, waitForAndClickAction, runJsFile,
    messageAction, debugInfo, killThisApp, clickActionsPipeline,
    waitForAction, baiduOcr, launchThisApp, observeToastMessage,
    showSplitLine, classof, timeRecorder, surroundWith,
} = require("./MODULE_MONSTER_FUNC");

killThisApp("一淘", {
    shell_acceptable: false,
    debug_info_flag: "forcible",
});

// killThisApp("支付宝")

// var btn =id("com.taobao.etao:id/is_status_loading_image_view").findOne(1000);
// log(btn)
// maid.clickCenter(btn);
// sleep(5000)
// var vs = textStartsWith("收集能量").find();
// log(vs.length)
// vs.forEach(element => {
//     log(element)
//     maid.clickCenter(element);
// });

// var url="https://render.alipay.com/p/s/i?scheme=alipays://platformapi/startapp?appId=2018100961599704&page=pages/transfer/transfer?amount=100&chInfo=moneyBox&frontBizNo=&remark=2020dd04346509910&uid=2088802152486721";
// log(encodeURIComponent(encodeURIComponent(url)));

// var b=desc("朋友").findOne(4000);
// log(b.selected());

// var vs=id("com.alipay.mobile.socialwidget:id/recent_list").findOne(2000)
// var vs = id("com.alipay.mobile.socialwidget:id/item_memo").find();
// if(vs){
//     log(vs.length);
// }else{
//     log("null")
// }
// if (!vs&&vs.empty()) {
//     log("没找到╭(╯^╰)╮")
// } else {
//     log("找到啦")
//     log(vs.length());
//     // vs.forEach(element => {
//     //     log(element)
//     // });
// }
// launchApp("Soul");

// var tt = desc("收款二维码").findOne(5000);
// if (!tt) {
//     // reset();
//     // exit();
//     log("没有")
// }else{
//     log("有哦")
// }

// log("开始");
// var result = shell("am force-stop com.tencent.mm", true);
// log(result+"111");
// console.show();
// if(result.code == 0){
//   toast("执行成功");
//   log("执行成功");
// }else{
//   toast("执行失败！请到控制台查看错误信息");
//   log("执行失败！请到控制台查看错误信息");
// }

// let current_e_id = engines.myEngine().id;
// log(current_e_id);
// log(engines.all());

// log(engines.myEngine().getSource());

// var es = engines.all();

// es.forEach(element => {
//     log(element);
//     if (element.getSource().indexOf("all")) {
//         element.forceStop()
//         log("结束了");
//         // break;
//         // return;
//     }
// });

// for (var element in es) {
//     log(element);
//     if (element.getSource().indexOf("all")) {
//         element.forceStop()
//         log("结束了");
//         break;
//         // return;
//     }
// }

// var w = boundsInside(0, 0, device.width, device.height / 2).find();
// log(w.text());

// var w = boundsContains(500, 300, device.width - 500, device.height - 300).clickable().findOne();
// // w.click();
// log(w.text());


// var sum = "14.6";
// var chararray = sum.split("");

// var views=className("android.view.View").clickable(true).find();

// for (var i in views) {

//    var v=views[i];
//     log(v);
// }

// for (var e in chararray) {
//     var c = chararray[e];
//     var w;
//     if (c=="."){
//         w= className("android.view.View").clickable(true).depth(10).findOne().parent();
//     }else{
//         w= className("android.view.View").desc(c).findOne();
//     }

//     if (w != null) {
//         log(c);
//         log("dianji");
//         w.click();
//     }

// }

// var w =className("android.view.View").desc("5").findOne();
// log(w);
// if(w!=null){
//     log("dianji");
//     w.click();
// }