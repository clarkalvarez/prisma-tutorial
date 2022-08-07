import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const createUser = await prisma.user.create({
    data: {
      name: "Kyle",
      email: "kyle@test.com",
      age: 27,
      userPreference: {
        create: {
          emailUpdates:true
        }
      },
    },
    // include: {
    //   userPreference: true,
    // }
    // select: {
    //   name: true,
    //   userPreference: true,
    // }

    select: {
      name: true,
      userPreference: {
        select: {
          id: true
        }
      }
    }
  });

  console.log(createUser);

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
