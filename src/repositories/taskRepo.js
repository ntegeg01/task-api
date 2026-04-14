import prisma from '../config/db.js';

export async function findAll(filter) {
  const where = filter !== undefined ? { completed: filter } : {};
  return prisma.task.findMany({ where });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
