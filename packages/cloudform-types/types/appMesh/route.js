"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Duration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Duration = Duration;
class WeightedTarget {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WeightedTarget = WeightedTarget;
class GrpcRouteMetadataMatchMethod {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcRouteMetadataMatchMethod = GrpcRouteMetadataMatchMethod;
class HeaderMatchMethod {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HeaderMatchMethod = HeaderMatchMethod;
class RouteSpec {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RouteSpec = RouteSpec;
class HttpPathMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpPathMatch = HttpPathMatch;
class GrpcRouteMetadata {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcRouteMetadata = GrpcRouteMetadata;
class QueryParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QueryParameter = QueryParameter;
class HttpRouteMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpRouteMatch = HttpRouteMatch;
class HttpQueryParameterMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpQueryParameterMatch = HttpQueryParameterMatch;
class GrpcRouteAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcRouteAction = GrpcRouteAction;
class GrpcRouteMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcRouteMatch = GrpcRouteMatch;
class HttpRoute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpRoute = HttpRoute;
class TcpRouteAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TcpRouteAction = TcpRouteAction;
class GrpcRetryPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcRetryPolicy = GrpcRetryPolicy;
class TcpRoute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TcpRoute = TcpRoute;
class HttpRetryPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpRetryPolicy = HttpRetryPolicy;
class GrpcTimeout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcTimeout = GrpcTimeout;
class GrpcRoute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcRoute = GrpcRoute;
class TcpTimeout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TcpTimeout = TcpTimeout;
class HttpTimeout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpTimeout = HttpTimeout;
class HttpRouteHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpRouteHeader = HttpRouteHeader;
class HttpRouteAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpRouteAction = HttpRouteAction;
class MatchRange {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MatchRange = MatchRange;
class Route extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppMesh::Route', properties);
    }
}
exports.default = Route;
Route.Duration = Duration;
Route.WeightedTarget = WeightedTarget;
Route.GrpcRouteMetadataMatchMethod = GrpcRouteMetadataMatchMethod;
Route.HeaderMatchMethod = HeaderMatchMethod;
Route.RouteSpec = RouteSpec;
Route.HttpPathMatch = HttpPathMatch;
Route.GrpcRouteMetadata = GrpcRouteMetadata;
Route.QueryParameter = QueryParameter;
Route.HttpRouteMatch = HttpRouteMatch;
Route.HttpQueryParameterMatch = HttpQueryParameterMatch;
Route.GrpcRouteAction = GrpcRouteAction;
Route.GrpcRouteMatch = GrpcRouteMatch;
Route.HttpRoute = HttpRoute;
Route.TcpRouteAction = TcpRouteAction;
Route.GrpcRetryPolicy = GrpcRetryPolicy;
Route.TcpRoute = TcpRoute;
Route.HttpRetryPolicy = HttpRetryPolicy;
Route.GrpcTimeout = GrpcTimeout;
Route.GrpcRoute = GrpcRoute;
Route.TcpTimeout = TcpTimeout;
Route.HttpTimeout = HttpTimeout;
Route.HttpRouteHeader = HttpRouteHeader;
Route.HttpRouteAction = HttpRouteAction;
Route.MatchRange = MatchRange;
