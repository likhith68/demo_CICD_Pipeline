#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { DemoAwsPipelineStack } from '../lib/demo_aws_pipeline-stack';

const app = new cdk.App();
new DemoAwsPipelineStack(app, 'DemoAwsPipelineStack', {
  env: { account: '522192923174', region: 'us-east-1' },
});