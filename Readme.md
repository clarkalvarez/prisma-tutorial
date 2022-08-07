# PRISMA Express Postgreqsql Tutorial

[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/python/black)


This project is for the tutorial of prisma. The instructions used here is for the developers who do not have any idea on prisma and postrgresql,

I've followed this tutorial https://www.youtube.com/watch?v=RebA5J-rlwg which I think is the best so far for the prisma guides.


# Notes based on the tutorial

- To use postresql datasource
```bash
npx prisma init --datasource-provider postgresql
```

- Needs to have a postresql empty db
- Install Prisma Extenstion to have a better experience developing prisma projects
- If not yet applied:
- 1. Go to Preferences>Settings
- 2. Then on the upper-right, click the Open Settings(JSON)
- 3. And the copy this prisma config <img width="1680" alt="Screen Shot 2022-08-07 at 7 07 41 PM" src="https://user-images.githubusercontent.com/43803904/183287935-fecabb66-99f1-472a-92a9-fdb309045317.png">
- Default in client provider found inside schema.prisma is "prisma-client-js"
- There are available other client providers such as graphql client
- Change the database config inside .env. Needs to have the datababse already exist.
- For the migration in prisma
```bash
npx prisma migrate dev --name init
```
- For installing client
```bash
npx i @prisma/client 
```
- To manually generate client
```bash
npx prisma generate
```
- Bytes Datatype to storing files
- Json Datatype to store json data
- Unsupported Datatype: If prisma doesn't support a certain datatype, we can use this one. eg(Unsupported(""))
- Can use  @id @default(uuid())
- @updatedAt get current timestamp after update
- @default(now()) get current timestamp
- @@unique([fieldname,fieldname]) to declare fields as unique
- @@index([fieldname]) to declare fields to have index 
- @@id([title,authorId]) to declare composite id in each fields
- using include can use different references. can also use select to just call necessary fields (can't do both)
```bash
    include: {
      userPreference: true,
    }

    result: userPreference: { id: 'aa9c9210-b9c2-4bda-9cf3-3950f203caed', emailUpdates: true }

    select: {
      name: true, 
    }
    result: { name: 'Kyle' }

    select: {
      name: true, 
            userPreference: true,
    }
    result: {
        name: 'Kyle',
        userPreference: { id: '8400e1d6-d22c-4895-938e-1d25fbd801b1', emailUpdates: true }
    }

    select: {
      name: true,
      userPreference: {
        select: {
          id: true
        }
      }
    }
    result: {
        name: 'Kyle',
        userPreference: { id: '1d394fda-0876-4cec-a121-df199b8c09ce' }
    }
```

