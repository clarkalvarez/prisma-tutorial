import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // const createUser = await prisma.user.create({
  //   data: {
  //     name: "Sally",
  //   },
  // });

  // console.log(createUser);

  const findAllUser = await prisma.user.findMany();

  console.log(findAllUser);

}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
