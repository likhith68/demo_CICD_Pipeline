//Create a stage in a pipeline with a name "DemoAwsPipelineStage" 
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LambdaStack } from './lambda_stack';

export class DemoAwsPipelineStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props?: cdk.StageProps) {
    super(scope, id, props);

    const demoLambdaStack = new LambdaStack(this, 'DemoLambdaStack');
  }
}