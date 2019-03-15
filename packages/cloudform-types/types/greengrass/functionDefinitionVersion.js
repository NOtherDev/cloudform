"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class FunctionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FunctionConfiguration = FunctionConfiguration;
class DefaultConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultConfig = DefaultConfig;
class Function {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Function = Function;
class Execution {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Execution = Execution;
class RunAs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RunAs = RunAs;
class ResourceAccessPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceAccessPolicy = ResourceAccessPolicy;
class Environment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Environment = Environment;
class FunctionDefinitionVersion extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Greengrass::FunctionDefinitionVersion', properties);
    }
}
FunctionDefinitionVersion.FunctionConfiguration = FunctionConfiguration;
FunctionDefinitionVersion.DefaultConfig = DefaultConfig;
FunctionDefinitionVersion.Function = Function;
FunctionDefinitionVersion.Execution = Execution;
FunctionDefinitionVersion.RunAs = RunAs;
FunctionDefinitionVersion.ResourceAccessPolicy = ResourceAccessPolicy;
FunctionDefinitionVersion.Environment = Environment;
exports.default = FunctionDefinitionVersion;