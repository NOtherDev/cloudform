"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class AccessEndpoint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccessEndpoint = AccessEndpoint;
class UserSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UserSetting = UserSetting;
class ApplicationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ApplicationSettings = ApplicationSettings;
class StorageConnector {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StorageConnector = StorageConnector;
class Stack extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppStream::Stack', properties || {});
    }
}
exports.default = Stack;
Stack.AccessEndpoint = AccessEndpoint;
Stack.UserSetting = UserSetting;
Stack.ApplicationSettings = ApplicationSettings;
Stack.StorageConnector = StorageConnector;
