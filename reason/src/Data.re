type user = {
  .
  "name": string,
  "age": int,
};
type dummyFetchedData = {
  .
  "user": user,
  "articlesCount": int,
};

let dummyFetchedData: dummyFetchedData = {
  "user": {
    name: "Hugo",
    age: 13,
  },
  "articlesCount": 22,
};

[@react.component]
let make = () => <User user=dummyFetchedData##user />;
