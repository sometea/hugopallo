import aws from 'aws-sdk';

export class SyncToBucket {
    constructor(s3: aws.S3) {}
    
    public sync(sourceDirectory: string, targetBucket: string) {

    }
}