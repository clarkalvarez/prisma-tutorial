import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {  
  const deleteData = await prisma.user.deleteMany();
  console.log("Deleted Successfully");
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
