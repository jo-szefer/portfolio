import { Cache } from "../utils/Cache";

const cache = new Cache();

export const firewall = (req, res, next) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  if (ip) {
    const requestCount = cache.getIpRequestCount(ip);
  }
};
