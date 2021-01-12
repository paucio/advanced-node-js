const AWS = require('aws-sdk');
const { accessKeyId, secretAccessKey } = require('../config/keys');

const s3 = new AWS.S3({
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4',
    region: 'us-east-1'
});

module.exports = {
    s3
};
