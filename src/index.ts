import aws from 'aws-sdk';
import { GetBucket } from './getBucket';
import { SyncToBucket } from './syncToBucket';
import { RunHugo } from './runHugo';
import { config } from './config';

const s3 = new aws.S3({ region: 'eu-west-1' });

export const handler = (event: any, context: any) => {
    const srcBucket = event.Records[0].s3.bucket.name;

    const getBucket = new GetBucket(s3);
    const syncToBucket = new SyncToBucket(s3);
    const runHugo = new RunHugo();

    getBucket.get(srcBucket);
    runHugo.run();
    syncToBucket.sync(config.buildDirectory, config.destinationBucket);

    context.done();
}