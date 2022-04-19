import { updateComment } from '../model/Comment.model';

export default async function updateCommentService(id: string, comment: string[]) {
  const updatedComment = await updateComment(id, comment);
  return { code: 200, data: updatedComment };
}
