import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface ReplicationInstanceProperties {
    ReplicationInstanceIdentifier?: Value<string>;
    EngineVersion?: Value<string>;
    KmsKeyId?: Value<string>;
    AvailabilityZone?: Value<string>;
    PreferredMaintenanceWindow?: Value<string>;
    AutoMinorVersionUpgrade?: Value<boolean>;
    ReplicationSubnetGroupIdentifier?: Value<string>;
    AllocatedStorage?: Value<number>;
    VpcSecurityGroupIds?: Value<string>[];
    AllowMajorVersionUpgrade?: Value<boolean>;
    ReplicationInstanceClass: Value<string>;
    PubliclyAccessible?: Value<boolean>;
    MultiAZ?: Value<boolean>;
    Tags?: ResourceTag[];
}
export default class ReplicationInstance extends ResourceBase {
    constructor(properties: ReplicationInstanceProperties, dependsOn?: Value<string> | Value<string>[]);
}