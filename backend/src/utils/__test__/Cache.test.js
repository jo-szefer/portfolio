import { Cache } from "../Cache";

describe("Cache", () => {
  it("should remove cached value after interval", () => {
    const cache = new Cache(1000);
    cache.initClear();

    cache.increaseIpRequestCount("asia");

    setTimeout(()=>{expect(cache.getIpRequestCount())}
  });
});
