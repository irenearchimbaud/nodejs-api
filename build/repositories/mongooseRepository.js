export class MongooseRepository {
    model;
    constructor(model) {
        this.model = model;
    }
    async findAll() {
        return this.model.find();
    }
    async findById(id) {
        return this.model.findById(id);
    }
    async create(data) {
        return this.model.create(data);
    }
    async update(id, data) {
        return this.model.findByIdAndUpdate(id, data, { new: true });
    }
    async delete(id) {
        const result = await this.model.findByIdAndDelete(id);
        return !!result;
    }
}
