const Service = require('egg').Service;

class NewsService extends Service {
    async list(page = 1) {
        // read config
        const {
            serverUrl,
            pageSize
        } = this.config.news;
        const {
            data: idList
        } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
            dataType: 'json'
        });

        page = Math.min(page, Math.ceil(idList.length / pageSize))
        const ids = idList.slice(pageSize * (page - 1), pageSize * page)

        // parallel Get detail
        const newsList = await Promise.all(
            Object.keys(ids).map(key => {
                const url = `${serverUrl}/item/${ids[key]}.json`;
                console.log(url)
                return this.ctx.curl(url, {
                    dataType: 'json'
                });
            })
        );
        return newsList.map(res => res.data)
    }
}

module.exports = NewsService;