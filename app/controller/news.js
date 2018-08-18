const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
        const ctx = this.ctx;
        const page = Number.parseInt(ctx.query.page) || 1;
        const dataList = await ctx.service.news.list(page);
        await ctx.render('news/list.tpl', {
            list: dataList
        });
    }
}

module.exports = NewsController;