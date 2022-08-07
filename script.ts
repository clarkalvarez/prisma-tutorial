import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // const createUser = await prisma.user.create({
  //   data: {
  //     name: "Sally",
  //   },
  // });

  // console.log(createUser);

  // const findAllUser = await prisma.user.findMany();

  // console.log(findAllUser);

  // const deleteData = await prisma.user.deleteMany();
  // console.log(deleteData);

}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
