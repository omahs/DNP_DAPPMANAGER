import "mocha";
import { expect } from "chai";
import { dappmanagerTestApiUrl } from "../endToEndUtils";
import { validateRoutesReturn } from "../../../src/common";

const apiCallMethod = "statsCpuGet";

describe(`API call ${apiCallMethod}`, () => {
  it("Should return the cpu use percentage", async () => {
    const response = await fetch(`${dappmanagerTestApiUrl}/${apiCallMethod}`);
    expect(response.status).to.equal(200);
    const body = await response.json();

    validateRoutesReturn(apiCallMethod, body);
  });
});