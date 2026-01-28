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

export type TPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type TComment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
