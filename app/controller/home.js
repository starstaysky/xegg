const Controller = require('egg').Controller;

class HomeController extends Controller{
    async index(){
        this.ctx.body = "Hello fuxing";
    }
}

module.exports = HomeController;