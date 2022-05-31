let endpoint = function (url = "http://127.0.0.1:3000") {
  let instance = {};

  instance.get = (path, cb) => {
    fetch(url + path)
      .then((response) => response.json())
      .then((data) => {
        cb(data);
      });
  };

  instance.post = (path, body, cb) => {
    fetch(url, {
      method: "POST",
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        cb(data);
      });
  };

  instance.put = (path, body, cb) => {
    fetch(url, {
      method: "PUT",
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        cb(data);
      });
  };

  instance.delete = (path, cb) => {
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        cb(data);
      });
  };

  return instance;
};
