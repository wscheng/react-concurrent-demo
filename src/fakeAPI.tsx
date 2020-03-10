const wrapPromise = promise => {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
};

function fetchUserArticles(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      switch (userId) {
        case 0:
          resolve([
            { content: "I'm Article1 from User0" },
            { content: "I'm Article2 from User0" },
            { content: "I'm Article3 from User0" }
          ]);
          break;
        case 1:
          resolve([
            { content: "I'm Article1 from User1" },
            { content: "I'm Article2 from User1" },
            { content: "I'm Article3 from User1" }
          ]);
          break;
        case 2:
          resolve([
            { content: "I'm Article1 from User2" },
            { content: "I'm Article2 from User2" },
            { content: "I'm Article3 from User2" }
          ]);
          break;
      }
    }, 3000 * Math.random());
  });
}

export const getUserAritcles = userId => wrapPromise(fetchUserArticles(userId));

function fetchProfile(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      switch (userId) {
        case 0:
          resolve({ name: "I'm User0" });
          break;
        case 1:
          resolve({ name: "I'm User1" });
          break;
        case 2:
          resolve({ name: "I'm User2" });
          break;
      }
    }, 3000 * Math.random());
  });
}

export const getProfile = userId => wrapPromise(fetchProfile(userId));

function fetchOwnerProfile() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: "page owner" });
    }, 1000);
  });
}

export const getOwnerProfile = () => wrapPromise(fetchOwnerProfile());
