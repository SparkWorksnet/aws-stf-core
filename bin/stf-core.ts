#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import { StfCoreStack } from '../lib/stf-core-stack';
import {Broker, Parameters} from '../parameters';

const app = new App();

Parameters.stf_broker = Broker.Orion;
Parameters.deploy_iot = false;

new StfCoreStack(app, 'StfCore', {
    stackName: 'StfCore',
    env: { region: Parameters.aws_region }
})
