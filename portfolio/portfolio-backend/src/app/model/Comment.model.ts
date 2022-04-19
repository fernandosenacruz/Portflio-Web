const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export const createComment = async (comment: string[]) => {
  const newComment = await prisma.comment.create({
    data: {
      ...comment,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  return newComment;
};

export  const getComment = async () => {
  const comments = await prisma.comment.findMany();
  return comments;
};

export const updateComment = async (id: string, comment: string[]) => {
  const updatedComment = await prisma.comment.update({
    where: { id: Number(id) },
    data: {
      ...comment,
      updatedAt: new Date(),
    },
  });
  return updatedComment;
};

export const deleteComment = async (id: string) => {
  const deletedComment = await prisma.comment.delete({
    where: {
      id: Number(id),
    },
  });
  return deletedComment;
}