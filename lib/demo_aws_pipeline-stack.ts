import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as pipelines from 'aws-cdk-lib/pipelines';
import { CloudFormationCreateUpdateStackAction } from 'aws-cdk-lib/aws-codepipeline-actions';

export class DemoAwsPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //AWS CI/CD Pipeline
    const demo_pipeline = new pipelines.CodePipeline(this, 'PipelineLogicalID', {
      synth: new pipelines.ShellStep('Synth', {
        input: pipelines.CodePipelineSource.gitHub('likhith68/demo_CICD_Pipeline', 'main'), // Replace with your GitHub repo
        commands: [
          'npm install -g aws-cdk', // Install AWS CDK
          'npm install', // Install dependencies
          'npm run build', // Build the project
          'npx cdk synth', // Synthesize the CloudFormation template
        ],
      }),
    });
  }
}
