export type commentsDto = {
  id: string;
  user: string;
  comment: string;
  reply: Array<commentsDto>
};

export type postsDto = {
  id: number;
  headImg: string;
  heading: string;
  ImgUrl: string;
  caption: string;
  like: string[];
  comments: commentsDto[];
};

export type userDto = {
  username: string;
};
