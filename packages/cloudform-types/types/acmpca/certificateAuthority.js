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
class RevocationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RevocationConfiguration = RevocationConfiguration;
class KeyUsage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KeyUsage = KeyUsage;
class CsrExtensions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CsrExtensions = CsrExtensions;
class AccessDescription {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccessDescription = AccessDescription;
class EdiPartyName {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EdiPartyName = EdiPartyName;
class Subject {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Subject = Subject;
class AccessMethod {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccessMethod = AccessMethod;
class OtherName {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OtherName = OtherName;
class CrlConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CrlConfiguration = CrlConfiguration;
class GeneralName {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeneralName = GeneralName;
class CertificateAuthority extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ACMPCA::CertificateAuthority', properties);
    }
}
exports.default = CertificateAuthority;
CertificateAuthority.RevocationConfiguration = RevocationConfiguration;
CertificateAuthority.KeyUsage = KeyUsage;
CertificateAuthority.CsrExtensions = CsrExtensions;
CertificateAuthority.AccessDescription = AccessDescription;
CertificateAuthority.EdiPartyName = EdiPartyName;
CertificateAuthority.Subject = Subject;
CertificateAuthority.AccessMethod = AccessMethod;
CertificateAuthority.OtherName = OtherName;
CertificateAuthority.CrlConfiguration = CrlConfiguration;
CertificateAuthority.GeneralName = GeneralName;
