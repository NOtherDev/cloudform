"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapacityAssignmentConfiguration = exports.CapacityAssignment = void 0;
const resource_1 = require("../resource");
class CapacityAssignment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CapacityAssignment = CapacityAssignment;
class CapacityAssignmentConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CapacityAssignmentConfiguration = CapacityAssignmentConfiguration;
class CapacityReservation extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Athena::CapacityReservation', properties);
    }
}
exports.default = CapacityReservation;
CapacityReservation.CapacityAssignment = CapacityAssignment;
CapacityReservation.CapacityAssignmentConfiguration = CapacityAssignmentConfiguration;