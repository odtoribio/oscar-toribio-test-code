export type requestParams = {
  url: string;
  options: object;
};

export type TUser = {
  id: number;
  name: string
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}
