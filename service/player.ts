import BaseService from "../base/server";


export default class PlayerService extends BaseService {

  get model() {
    return this.ctx.model.Player;
  }

  publicAll() {
    return this.model.findAll();
  }

  fetchOne(id: number) {
    return this.model.findByPk(id);
  }

  create(obj: Record<string, any>) {
    return this.model.create(obj);
  }

  modify(id: number, obj: Record<string, any>) {
    return this.model.update(obj, {
      where: {
        id,
      },
    });
  }

  delete(id: number) {
    return this.model.destroy({
      where: {
        id,
      },
    });
  }
}
