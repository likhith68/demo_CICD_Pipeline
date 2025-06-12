//Create a demolambda with inline code like "Hello CDK from Lambda - Likhith"
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';


export class LambdaStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Create a Lambda function with inline code
        const demoLambda = new lambda.Function(this, 'demoLambdaLogicalID', {
            runtime: lambda.Runtime.NODEJS_14_X,
            handler: 'index.handler',
            code: lambda.Code.fromInline('exports.handler = _ => "Hello CDK from Lambda - Likhith";'),
        });
    }
}