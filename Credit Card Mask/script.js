function maskify(cc) {
    return cc.slice(0, -4).replace(/[a-zA-Z, 0-9]/g, '#').concat(cc.slice(-4, cc.len));
  }