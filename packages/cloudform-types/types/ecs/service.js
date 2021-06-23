"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class PlacementStrategy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PlacementStrategy = PlacementStrategy;
class DeploymentController {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeploymentController = DeploymentController;
class PlacementConstraint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PlacementConstraint = PlacementConstraint;
class LoadBalancer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoadBalancer = LoadBalancer;
class DeploymentConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeploymentConfiguration = DeploymentConfiguration;
class AwsVpcConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AwsVpcConfiguration = AwsVpcConfiguration;
class NetworkConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkConfiguration = NetworkConfiguration;
class CapacityProviderStrategyItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CapacityProviderStrategyItem = CapacityProviderStrategyItem;
class DeploymentCircuitBreaker {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeploymentCircuitBreaker = DeploymentCircuitBreaker;
class ServiceRegistry {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ServiceRegistry = ServiceRegistry;
class Service extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ECS::Service', properties || {});
    }
}
exports.default = Service;
Service.PlacementStrategy = PlacementStrategy;
Service.DeploymentController = DeploymentController;
Service.PlacementConstraint = PlacementConstraint;
Service.LoadBalancer = LoadBalancer;
Service.DeploymentConfiguration = DeploymentConfiguration;
Service.AwsVpcConfiguration = AwsVpcConfiguration;
Service.NetworkConfiguration = NetworkConfiguration;
Service.CapacityProviderStrategyItem = CapacityProviderStrategyItem;
Service.DeploymentCircuitBreaker = DeploymentCircuitBreaker;
Service.ServiceRegistry = ServiceRegistry;
