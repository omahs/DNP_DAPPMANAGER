import fetch from "node-fetch";
import { dappmanagerTestApiUrl } from "./endToEndUtils";

export const mochaHooks = {
  beforeAll: [
    async function (): Promise<void> {
      console.log("=========================");
      console.log("Starting End to End tests");
      console.log("=========================");

      // Check health of test api calling /ping
      const res = await fetch(dappmanagerTestApiUrl + "/ping");
      if (res.status !== 200) throw Error("Test API not running");

      // TODO: Ensure the number of files inside the folder is the same as the number of functions
    }
  ],
  afterAll: [
    async function (): Promise<void> {
      console.log("=========================");
      console.log("Finsihed End to End tests");
      console.log("=========================");
    }
  ]
};
