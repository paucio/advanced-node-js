# Advanced Node Starter

Starting project for a course on Advanced Node @ Udemy.

## Requirements:

- Docker
- Node >=10 <=12.16.1
- AWS Account

## Development setup:

- create Google Oauth Client & Secret
- create [AWS Access Key & Secret Access Key Pair](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
- create an S3 bucket
- update S3 bucket name in server/routes/uploadRoutes.js

```
    s3.getSignedUrl('putObject', {
      Bucket: 'AWS_S3_BUCKET_NAME',
      ContentType: 'image/jpeg',
      Key
      ...
```

- add server/config/secrets.js with content:

```
module.exports = {
  googleClientID: 'YOUR_GOOGLE_CLIENT_ID',
  googleClientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
  cookieKey: 'ANY_RANDOM_NUMBER',
  accessKeyId: 'YOUR_AWS_CLIENT_ID',
  secretAccessKey:'YOUR_AWS_CLIENT_SECRET',
  mongoURI: 'mongodb://localhost:27017/blog_everyone'
};
```

- make up [start mongodb & redis containers]
- cd ../client && npm install
- cd server && npm install
- npm run dev

## Added:

- Query caching with [REDIS](https://github.com/antirez/redis).
- Image upload to S3 via [AWS-SDK](https://github.com/aws/aws-sdk-js).
