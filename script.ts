import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // await prisma.user.deleteMany(); //for testing purposes in order to delete db every refresh
  // const createUser = await prisma.user.create({
  //   data: {
  //     name: "Kyle",
  //     email: "kyle@test.com",
  //     age: 27,
  //     userPreference: {
  //       create: {
  //         emailUpdates:true
  //       }
  //     },
  //   },
  //   // include: {
  //   //   userPreference: true,
  //   // }
  //   // select: {
  //   //   name: true,
  //   //   userPreference: true,
  //   // }

  //   select: {
  //     name: true,
  //     userPreference: {
  //       select: {
  //         id: true
  //       }
  //     }
  //   }
  // });
  // console.log(createUser);

  //   const createManyUsers = await prisma.user.createMany({
  //     data: [
  //       {
  //         name: "Kyle",
  //         email: "kyle@test3.com",
  //         age: 12,
  //       },
  //       {
  //         name: "Sally",
  //         email: "sally@test3.com",
  //         age: 45,
  //       },
  //     ],
  //   });
  // console.log(createManyUsers);

  

  // const findUniqueUser = await prisma.user.findUnique({
  //   // where: {
  //   //     email: "kyle@test.com"
  //   // }
  //   // sample result {
  //   //   id: '74aba67d-4428-4ed3-a18e-f3e95ae5a575',
  //   //   age: 27,
  //   //   name: 'Kyle',
  //   //   email: 'kyle@test.com',
  //   //   isAdmin: 'BASIC',
  //   //   userPreferenceId: null
  //   // }
  //   where: {
  //      age_name: {
  //       age: 27,
  //       name: "Kyle"
  //      }
  //   }
  //   // sample result {
  //   //   id: '74aba67d-4428-4ed3-a18e-f3e95ae5a575',
  //   //   age: 27,
  //   //   name: 'Kyle',
  //   //   email: 'kyle@test.com',
  //   //   isAdmin: 'BASIC',
  //   //   userPreferenceId: null
  //   // }
  // });
  // console.log(findUniqueUser);

  // const findFirstUser= await prisma.user.findFirst({
  //   where: {
  //       email: "kyle@test.com"
  //   }
  //   // sample result {
  //   //   id: '74aba67d-4428-4ed3-a18e-f3e95ae5a575',
  //   //   age: 27,
  //   //   name: 'Kyle',
  //   //   email: 'kyle@test.com',
  //   //   isAdmin: 'BASIC',
  //   //   userPreferenceId: null
  //   // } 
  // });
  // console.log(findFirstUser);

  // const findAllUser = await prisma.user.findMany({
    // where: {
    //   name: "Sally"
    // },

    // distinct: ["name"]

    // result:   {
    //   id: '56b78a03-1315-44f2-ae94-9c76bca24f0d',
    //   age: 56,
    //   name: 'Sally',
    //   email: 'sally@test.com',
    //   isAdmin: 'BASIC',
    //   userPreferenceId: null
    // }

    // where: {
    //   name: "Sally"
    // },

    // distinct: ["name", "age"]

    // result:   [
    //   {
    //     id: '56b78a03-1315-44f2-ae94-9c76bca24f0d',
    //     age: 56,
    //     name: 'Sally',
    //     email: 'sally@test.com',
    //     isAdmin: 'BASIC',
    //     userPreferenceId: null
    //   },
    //   {
    //     id: 'f19a03cd-d3c9-4753-9660-49b0f2e90b84',
    //     age: 13,
    //     name: 'Sally',
    //     email: 'sally@test2.com',
    //     isAdmin: 'BASIC',
    //     userPreferenceId: null
    //   },
    //   {
    //     id: '0c6eac16-2b8f-4492-8a06-d7f1b8356cef',
    //     age: 45,
    //     name: 'Sally',
    //     email: 'sally@test3.com',
    //     isAdmin: 'BASIC',
    //     userPreferenceId: null
    //   }
    // ]

    // take: 2
    // result: [
    //   {
    //     id: '0c6eac16-2b8f-4492-8a06-d7f1b8356cef',
    //     age: 45,
    //     name: 'Sally',
    //     email: 'sally@test3.com',
    //     isAdmin: 'BASIC',
    //     userPreferenceId: null
    //   },
    //   {
    //     id: '16ee62e4-d0a1-4d9d-9b3c-4b61e8ef9b10',
    //     age: 12,
    //     name: 'Kyle',
    //     email: 'kyle@test2.com',
    //     isAdmin: 'BASIC',
    //     userPreferenceId: null
    //   }
    // ]

    // where: {
    //   name: "Sally"
    // },

    // take: 2,
    // skip: 1,
    // result: 
    // [
    //   {
    //     id: '56b78a03-1315-44f2-ae94-9c76bca24f0d',
    //     age: 56,
    //     name: 'Sally',
    //     email: 'sally@test.com',
    //     isAdmin: 'BASIC',
    //     userPreferenceId: null
    //   },
    //   {
    //     id: 'f19a03cd-d3c9-4753-9660-49b0f2e90b84',
    //     age: 13,
    //     name: 'Sally',
    //     email: 'sally@test2.com',
    //     isAdmin: 'BASIC',
    //     userPreferenceId: null
    //   }
    // ]

    // where: {
    //   name: "Sally"
    // },
    // orderBy: {
    //   age: "asc"
    // },
    // take: 2,  
    // skip: 1,
    // result: 
    // [
    //   {
    //     id: '0c6eac16-2b8f-4492-8a06-d7f1b8356cef',
    //     age: 45,
    //     name: 'Sally',
    //     email: 'sally@test3.com',
    //     isAdmin: 'BASIC',
    //     userPreferenceId: null
    //   },
    //   {
    //     id: '56b78a03-1315-44f2-ae94-9c76bca24f0d',
    //     age: 56,
    //     name: 'Sally',
    //     email: 'sally@test.com',
    //     isAdmin: 'BASIC',
    //     userPreferenceId: null
    //   }
    // ]

    // where: {
    //   name: {equals: "Sally"}
    // },
    // result will return values with name Sally

    // where: {
    //   name: {not: "Sally"}
    // },
    // result will return values without name Sally

    // where: {
    //   name: {in: ["Sally", "Kyle"]}
    // },
    // result will return values that has the name Sally and Kyle

    // where: {
    //   name: {notIn: ["Sally", "Kyle"]}
    // },
    // result will return values that name doesn't have Sally and Kyle

    // where: {
    //   age: {lt: 20}
    // },
    // result will return values that age is less than 20 

    // where: {
    //   name: "Sally",
    //   age: {lt: 20}
    // },
    // result will return values that age is less than 20 and name is Sally

    // where: { 
    //   email: {contains: "@test1.com"}
    // },
     // result will return values that email contains @test1.com

    //  where: { 
    //   email: {endsWith: "@test1.com"}
    // },
     // result will return values that email ends with @test1.com

    //  where: { 
    //   email: {startsWith: "kyle"}
    // },
     // result will return values that email start with kyle

    // where: { 
    //   email: {startsWith: "kyle"},
    //   age: 20
    // },
     // result will return values that email start with @test1.com and age 20

    // where: { 
    //   AND: [
    //    {email: {startsWith: "sally"}},
    //    {age: 13}
    //   ]
    // },
     // result will return values that email start with sally and age 13

    //  where: { 
    //   AND: [
    //    {email: {startsWith: "sally"}},
    //    {email: {endsWith: "@test1.com"}},
    //   ]
    // },
     // result will return values that email start with sally and email ends with @test1.com

    // where: { 
    //   OR: [
    //    {email: {startsWith: "sally"}},
    //    {age: {gt: 20}},
    //   ]
    // },
    // result will return values that email start with sally or age is greater than 20

    // where: { 
    //   NOT: [
    //    {email: {startsWith: "sally"}},
    //    {age: {gt: 20}},
    //   ]
    // },
    // result will return values that not email start with sally or age is greater than 20
    // where: { 
    //   userPreference: {
    //     emailUpdates: true
    //   }
    // },
    // result will return values emailUpdates inside userPreferences is true

    // where: { 
    //   writtenPosts: {
    //     some: {
    //       title: "Test"
    //     }
    //   }
    // },
    // result will return those values on writtenPosts that has a title of "Test" can also use every and none
  //   }
  // );

  // console.log(findAllUser); 

  const updateUser = await prisma.user.update({
    // where: {
    //   email: "sally@testupdate.com"
    // },
    // data: {
    //   email: "sally@testupdate2.com"
    // }
    // where: {
    //   email: "kyle@test.com"
    // },
    // data: {
    //   age: {
    //     increment: 20
    //   }
    // }
    // result will update age to plus 20 for email with kyle@test.com can also use decrement, multiply, divide etc.

    // where: {
    //   email: "kyle@test.com"
    // },
    // data: {
    //   userPreference: {
    //     create: {
    //       emailUpdates: true
    //     }
    //   }
    // }
     // result will update email with kyle@test.com by creating its userpreference

  //  where: {
  //     email: "kyle@test.com"
  //   },
  //   data: {
  //     userPreference: {
  //       connect: {
  //         id: "c7e0b43a-999f-430b-996c-f568265ac643"
  //       }
  //     }
  //   }
     // result will update email with kyle@test.com by connecting its userPreference id

    where: {
      email: "kyle@test.com"
    },
    data: {
      userPreference: {
        disconnect: true
      }
    }
     // result will update email with kyle@test.com by disconnecting its current userPreference id
  })

  console.log(updateUser)

  // const updateUserMany = await prisma.user.updateMany({
  //   where: {
  //     name: "Sally"
  //   },
  //   data: {
  //     name: "New Sally"
  //   }
  // })

  // console.log(updateUserMany)

}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
