import { deleteComment } from '../model/Comment.model'

export default async function deleteCommentService(id: string) {
  const deletedComment = await deleteComment(id);
  return { code: 200, data: deletedComment };
}
