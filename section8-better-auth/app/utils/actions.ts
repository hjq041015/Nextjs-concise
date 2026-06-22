"use server";

import { TodoCreateInput } from "@/app/generated/prisma/models";
import prisma from "@/app/utils/prisma";
import { revalidatePath } from "next/cache";

export async function getTodos() {
  return await prisma.todo.findMany();
}

export async function toggleTodoComplete(TodoId: number) {
  return await prisma.$transaction(async (tx) => {
    const todo = await tx.todo.findFirst({
      where: {
        id: TodoId,
      },
    });

    if (!todo) {
      throw new Error("Todo not found");
    }

    await tx.todo.update({
      where: {
        id: TodoId,
      },
      data: {
        complete: !todo?.complete,
      },
    });

    revalidatePath("/");
  });
}

export async function toggleTodoDelete(TodoId: number) {
  await prisma.todo.delete({
    where: {
      id: TodoId,
    },
  });
  revalidatePath("/");
}

export async function ToggleTodoAdd(formData: FormData) {
  const todoInput: TodoCreateInput = {
    text: formData.get("text") as string,
    complete: false,
  };

  await prisma.todo.create({
    data: todoInput,
  });

  revalidatePath("/");
}
