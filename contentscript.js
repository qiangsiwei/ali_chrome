var id = chrome.contextMenus.create({
	"title": "生成图片描述",
	"contexts": ["image"],
	"onclick": openUrlWindow});

function openUrlWindow(info, tab) {
	console.log(info)
	var url = info['srcUrl'];
	url = getQueryString(url);
	console.log(url)
	chrome.tabs.create({"url":url,"active":true});}

function getQueryString(url) {
    return 'http://qiangsiwei.cn/image_caption?url='+url;}