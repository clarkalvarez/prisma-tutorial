# PRISMA Express Postgreqsql Tutorial

[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/python/black)


This project is for the tutorial of prisma. The instructions used here is for the developers who do not have any idea on prisma and postrgresql,

I've followed this tutorial https://www.youtube.com/watch?v=RebA5J-rlwg which I think is the best so far for the prisma guides.


# Notes based on the tutorial

### To use postresql datasource
```bash
npx prisma init --datasource-provider postgresql
```

Needs to have a postresql empty db
Install Prisma Extenstion to have a better experience developing prisma projects
If not yet applied, go to Preferences>Settings
Then on the upper-right, click the Open Settings(JSON)
And the copy this prisma config
<img width="1680" alt="Screen Shot 2022-08-07 at 7 07 41 PM" src="https://user-images.githubusercontent.com/43803904/183287935-fecabb66-99f1-472a-92a9-fdb309045317.png">
