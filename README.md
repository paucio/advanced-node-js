# AdvancedNodeStarter

Starting project for a course on Advanced Node @ Udemy.

## Added:

- Query caching with [REDIS](https://github.com/antirez/redis).
- Automated integrated testing with [Puppeteer](https://github.com/GoogleChrome/puppeteer) and [Jest](https://github.com/facebook/jest).
- Image upload to S3 via [AWS-SDK](https://github.com/aws/aws-sdk-js).

# Steps outside the codebase to make it work

1. install and start Redis
   https://medium.com/better-programming/how-to-build-a-node-js-api-cache-with-redis-ac0aa54dee48
   macOS:
   Install brew. In case you do not have it already installed, https://brew.sh/.
   brew install redis
   brew services start redis

2. Create Google Client ID and Google Client Secret

- go to https://console.developers.google.com/
- create a new project (ex: advanced-node)
- configure oauth consent screen -> external -> create
- enter app name (ex: advanced-node), user support email, app domain (application home page: http://localhost:3000), contact email address
- credentials -> create credentials -> oauth client id
- enter name(ex: advanced-node), Authorized JavaScript origins (http://localhost:3000), Authorized redirect URIs (http://localhost:3000 and http://localhost:3000/auth/google/callback)
- create config/secret.js where you put the googleClientID and googleClientSecret

3. Configure mongoDB

- Add an .env file with credentials for mongoDB (DB_HOST=mongodb+srv,DB_USER,DB_PASS,DB_NAME)
- in config/secret.js add mongoURI: `${process.env.DB_HOST}://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.j9czx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,

4. Configure Amazon S3.
   - in config/secret.js add accessKeyId and secretAccessKey
     https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/

- in amazon s3 create a bucket (ex: course-blog-bucket).
- set Permissions:
  - Access -> objects can be public
  - Block all public access -> off
  - for Cross-origin resource sharing (CORS) have this json:
    [
    {
    "AllowedHeaders": [
    "*"
    ],
    "AllowedMethods": [
    "PUT",
    "POST",
    "DELETE"
    ],
    "AllowedOrigins": [
    "http://localhost:3000"
    ],
    "ExposeHeaders": [
    "x-amz-server-side-encryption",
    "x-amz-request-id",
    "x-amz-id-2"
    ],
    "MaxAgeSeconds": 3000
    }
    ]

Start server, from root folder: npm run server
Start client, from client folder: npm run start
