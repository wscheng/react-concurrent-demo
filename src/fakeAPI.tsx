const wrapPromise = promise => {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      console.log("in suspender success", r);
      status = "success";
      result = r;
    },
    e => {
      console.log("in suspender error", e);
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        console.log("pending!!!!!", promise, suspender);
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        console.log("success!!!!!", promise, suspender);
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
    console.log("fetchProfile executing...");
    setTimeout(() => {
      switch (userId) {
        case 0:
          console.log("I'm resolved!!!!! userPofile", userId);
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

export const getProfile = userId => {
  console.log("getProfile", userId);
  return wrapPromise(fetchProfile(userId));
};

function fetchOwnerProfile() {
  return new Promise(resolve => {
    console.log("fetchOwner executing...");
    setTimeout(() => {
      console.log("I'm resolved!!!!! ownerPofile");
      resolve({ name: "page owner" });
    }, 1000);
  });
}

export const getOwnerProfile = () => {
  console.log("getOwnerProfile");
  return wrapPromise(fetchOwnerProfile());
};
