'use strict';

exports.keys = 'fx_201808181135';
// 添加View配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
};

// 添加news配置
exports.news = {
    serverUrl: 'http://127.0.0.1:7001/public/json',
    pageSize: 2
}