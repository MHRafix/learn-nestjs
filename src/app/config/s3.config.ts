import { registerAs } from '@nestjs/config';

export default registerAs('s3', () => ({
  /*
    |--------------------------------------------------------------------------
    | S3 Host Endpoint
    |--------------------------------------------------------------------------
    | This value determines the host endpoint of the S3.
    | Set this in your ".env" file.
    */
  host: process.env.S3_HOST || null,

  /*
    |--------------------------------------------------------------------------
    | S3 Access Key
    |--------------------------------------------------------------------------
    | This value determines the access key of the S3.
    | Set this in your ".env" file.
    */
  accessKey: process.env.S3_ACCESS_KEY || null,

  /*
    |--------------------------------------------------------------------------
    | S3 Secret Key
    |--------------------------------------------------------------------------
    | This value determines the secret key of the S3.
    | Set this in your ".env" file.
    */
  secretKey: process.env.S3_SECRET_KEY || null,

  /*
    |--------------------------------------------------------------------------
    | S3 Region
    |--------------------------------------------------------------------------
    | This value determines the region of the S3.
    | Set this in your ".env" file.
    | Default: us-east-1
    */
  region: process.env.S3_REGION || 'us-east-1',
}));
