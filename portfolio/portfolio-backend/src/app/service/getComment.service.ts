import { getComment } from '../model/Comment.model';

export default async function getCommentService() {
  const comments = await getComment();
  return { code: 200, data: comments };
};
