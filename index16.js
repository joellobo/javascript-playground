const IS_TEST = process.env.NODE_ENV === "test";
const ONE_SECOND_TIMEOUT = 1000;

class Util {
  static async delayedCall(fn, params, time = ONE_SECOND_TIMEOUT) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        fn(...params)
          .then(resolve)
          .catch(reject);
      }, time)
    );
  }

  static changeCallBehaviour(apiPromised) {
    if (IS_TEST) return apiPromised;
    // eslint-disable-next-line no-proto
    const methods = apiPromised.__proto__;

    const functions = Object.getOwnPropertyNames(methods)
      .map(item => {
        const fn = apiPromised[item].bind(apiPromised);

        return {
          [item]: async (...args) => Util.delayedCall(fn, args)
        };
      })
      .reduce((p, n) => ({ ...p, ...n }), {});

    return functions;
  }
}

class MyApiPromised {
  constructor() {
    this.message = `${new Date().toISOString()}, 'will execute later!'`;
  }
  async get(arg1, arg2) {
    return `${this.message}, ${arg1}, ${arg2}`;
  }
}

const instance = new MyApiPromised();
const changedInstance = Util.changeCallBehaviour(instance);
console.log(new Date().toISOString(), "Starting...");
changedInstance.get("abc", 123).then(console.log);
