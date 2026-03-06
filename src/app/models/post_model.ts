export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  Date: Date;
  imgurl: string;
  likes: number;
  comments: string[];
}
