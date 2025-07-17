console.clear();
{
  let target = {};
  let proxy = new Proxy(target, {});

  proxy.test = 5;
  console.log(target.test);

  console.log(proxy.test);
  for (let key in proxy) {
    console.log(key);
  }
}

{
  let numbers = [0, 1, 2];

  numbers = new Proxy(numbers, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      } else {
        return `No such item ${0}`;
      }
    },
  });
  console.log(numbers[1]);
  console.log(numbers[123]);
}

{
  let dictionary = {
    Hello: "Holla",
    Bye: "Adiox",
  };

  console.log(dictionary["Bye"]);
  console.log(dictionary["welcome"]);
}
