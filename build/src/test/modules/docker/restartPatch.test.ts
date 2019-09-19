import "mocha";
import { expect } from "chai";
import sinon from "sinon";
import params from "../../../src/params";
import fs from "fs";
import * as getPath from "../../../src/utils/getPath";
import rewiremock from "rewiremock";
// Import for type
import restartPatchType from "../../../src/modules/docker/restartPatch";

describe("Util: restartPatch", () => {
  const dockerComposeUp = sinon.stub();

  const imageName = "dappmanager.tar.xz:0.0.9";
  const dockerComposeRestartPath = getPath.dockerCompose(
    "restart.dnp.dappnode.eth",
    params,
    true
  );

  let restartPatch: typeof restartPatchType;

  before("Mock", async () => {
    const mock = await rewiremock.around(
      () => import("../../../src/modules/docker/restartPatch"),
      mock => {
        mock(() => import("../../../src/modules/docker/dockerCommands"))
          .with({ dockerComposeUp })
          .toBeUsed();
      }
    );
    restartPatch = mock.default;
  });

  it("Should call docker.compose.up with the correct arguments", async () => {
    await restartPatch(imageName);
    sinon.assert.calledOnce(dockerComposeUp);
    sinon.assert.calledWithExactly(dockerComposeUp, dockerComposeRestartPath);
  });

  it("Should generate a the correct docker-compose restart", () => {
    const dc = fs.readFileSync(dockerComposeRestartPath, "utf8");

    const expectedDc = `version: '3.4'

services:
    restart.dnp.dappnode.eth:
        image: dappmanager.tar.xz:0.0.9
        container_name: DAppNodeTool-restart.dnp.dappnode.eth
        volumes:
            - '/usr/src/dappnode/DNCORE/docker-compose-dappmanager.yml:/usr/src/app/DNCORE/docker-compose-dappmanager.yml'
            - '/usr/local/bin/docker-compose:/usr/local/bin/docker-compose'
            - '/var/run/docker.sock:/var/run/docker.sock'
        entrypoint:
            docker-compose -f /usr/src/app/DNCORE/docker-compose-dappmanager.yml up -d --force-recreate`;

    expect(dc).to.equal(expectedDc);
    fs.unlinkSync(dockerComposeRestartPath);
  });
});
