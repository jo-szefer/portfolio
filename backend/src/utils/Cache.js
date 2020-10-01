export class Cache {
  ips = {};
  intervalMs = 10000;

  constructor(intervalMs) {
    this.intervalMs = intervalMs;
  }

  increaseIpRequestCount = (ip) => {
    if (this.getIpRequestCount(ip)) {
      this.ips[ip]++;
    } else {
      this.ips[ip] = 1;
    }
  };

  getIpRequestCount = (ip) => {
    return this.ips[ip];
  };

  clearCache = () => {
    this.ips = {};
  };

  initClear = () => {
    setInterval(this.clearCache, this.intervalMs);
  };
}
