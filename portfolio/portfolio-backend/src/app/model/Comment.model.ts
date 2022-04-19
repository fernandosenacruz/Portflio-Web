const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createComment = async (comment: string[]) => {
  const newComment = await prisma.comment.create({
    data: {
      ...comment,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  return newComment;
};

const getComment = async () => {
  const comments = await prisma.comment.findMany();
  return comments;
};

export = {
  createComment,
  getComment,
};
