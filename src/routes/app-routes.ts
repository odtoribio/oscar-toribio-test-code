export const PATHS = {
  HOME: '/',
  POSTS: '/user/:id/posts',
  USER: '/user/:id',
};

export const PATHS_DYNAMIC = {
  HOME: PATHS.HOME,
  POSTS: (id: number) => `/user/${id}/posts`,
  USER: (id: number) => `/user/${id}`,
}
