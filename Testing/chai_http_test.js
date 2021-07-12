import chai from "chai";

import chaiHttp from "chai-http";

import { SUT } from "./utils/sut.js";

chai.use(chaiHttp);

chai.should();

const expect = chai.expect;

let sut = new SUT();

describe("Scenarios", () => {

  it("Create a Note", async () => {
    await sortByNothing();
    await createWrongNote();
    await createNote();
  });

  async function sortByNothing() {
    const response = await chai.request("http://localhost:3000").get("/notes/sortBy/");
    console.log("1");
    response.status.should.be.equal(404);
  }

  async function createWrongNote() {
    const response = await chai.request("http://localhost:3000").post("/notes").send({title: "lul"});
    console.log(response.body);

    response.status.should.be.equal(400);
  }

  async function createNote(order) {
    const response = await sut.createNote(
      "TEST_TITLE",

      "TEST_CONTENT",

      2,

      "2021-07-07"
    );
    console.log("3")
    expect(response.body).to.not.be.null;
  }
});
