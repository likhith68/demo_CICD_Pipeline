import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as pipelines from 'aws-cdk-lib/pipelines';
import { DemoAwsPipelineStage } from './demo_aws_pipeline-stage';
import { ManualApprovalStep } from 'aws-cdk-lib/pipelines';


export class DemoAwsPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //AWS CI/CD Pipeline
    const demo_pipeline = new pipelines.CodePipeline(this, 'PipelineLogicalID', {
      synth: new pipelines.ShellStep('Synth', {
        input: pipelines.CodePipelineSource.gitHub('likhith68/demo_CICD_Pipeline', 'main'), // Replace with your GitHub repo
        commands: [
          'npm ci', 
          'npm run build', 
          'npx cdk synth', // Synthesize the CloudFormation template
        ],
      }),
    });

    const test_stage = demo_pipeline.addStage(new DemoAwsPipelineStage(this, 'TestStage', {
      env: { account: '522192923174', region: 'us-east-1' }
    }));

    test_stage.addPost(new ManualApprovalStep("approval"))

    const prod_stage = demo_pipeline.addStage(new DemoAwsPipelineStage(this, 'ProdStage', {
      env: { account: '522192923174', region: 'us-east-1' }
    }));
  }
}
