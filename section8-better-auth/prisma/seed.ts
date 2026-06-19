import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { faker } from "@faker-js/faker";
import { TodoCreateInput, TodoModel } from "@/app/generated/prisma/models";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

function generateTodo(): TodoCreateInput {
  return {
    text: faker.book.title(),
    complete: faker.datatype.boolean(),
  };
}

const userData: Prisma.TodoCreateInput[] = [
  generateTodo(),
  generateTodo(),
  generateTodo(),
];

export async function main() {
  for (const u of userData) {
    await prisma.todo.create({ data: u });
  }
}

main();
