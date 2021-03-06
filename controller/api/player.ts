

import BaseController from "../../base/controller";


export default class PlayerController extends BaseController {
  // restful规范接口
  async index() {
    const { ctx } = this;
    const result = await ctx.service.PlayerService.publicAll();
    this.success(result);
  }

  async show() {
    const { ctx } = this;
    const { id } = ctx.request.params;
    const result = await ctx.service.PlayerService.fetchOne(Number(id));
    this.success(result);
  }

  async create() {
    const { ctx } = this;
    const { name, position } = ctx.request.body;
    const result = await ctx.service.PlayerService.create({ name, position });
    this.success(result);
  }

  async update() {
    const { ctx } = this;
    const { id } = ctx.request.params;
    const { name, position } = ctx.request.body;
    const result = await ctx.service.PlayerService.modify(Number(id), { name, position });
    this.success(result.length ? '修改成功' : '未知错误');
  }

  async destroy() {
    const { ctx } = this;
    const { id } = ctx.request.params;
    const result = await ctx.service.PlayerService.delete(Number(id));
    this.success(result);
  }

  /**
   * 非restful规范接口. test
   */
  async test() {
    this.success('result test');
  }
}
