import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

process.env.NODE_ENV = "testing";

export class SUT {
  async createNote(title, content, importance, due) {
    const response = await chai.request("localhost:3000").post("/notes").send({
      title: title,

      content: content,

      importance: importance,

      due: due,
    });

    response.should.have.status(200);

    return response;
  }
}
