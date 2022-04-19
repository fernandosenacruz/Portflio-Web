import { createComment } from '../model/Comment.model';

export default async function createCommentService(comment: string[]) {
  const newComment = await createComment(comment);
  return { code: 201, data: newComment };
};
