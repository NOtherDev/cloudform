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
const xRay_1 = require("./xRay");
exports.XRay = xRay_1.default;
const ec2_1 = require("./ec2");
exports.EC2 = ec2_1.default;
const acmpca_1 = require("./acmpca");
exports.ACMPCA = acmpca_1.default;
const serviceCatalog_1 = require("./serviceCatalog");
exports.ServiceCatalog = serviceCatalog_1.default;
const globalAccelerator_1 = require("./globalAccelerator");
exports.GlobalAccelerator = globalAccelerator_1.default;
const accessAnalyzer_1 = require("./accessAnalyzer");
exports.AccessAnalyzer = accessAnalyzer_1.default;
const waf_1 = require("./waf");
exports.WAF = waf_1.default;
const iam_1 = require("./iam");
exports.IAM = iam_1.default;
const wafRegional_1 = require("./wafRegional");
exports.WAFRegional = wafRegional_1.default;
const backup_1 = require("./backup");
exports.Backup = backup_1.default;
const appIntegrations_1 = require("./appIntegrations");
exports.AppIntegrations = appIntegrations_1.default;
const route53Resolver_1 = require("./route53Resolver");
exports.Route53Resolver = route53Resolver_1.default;
const elasticsearch_1 = require("./elasticsearch");
exports.Elasticsearch = elasticsearch_1.default;
const emr_1 = require("./emr");
exports.EMR = emr_1.default;
const workSpaces_1 = require("./workSpaces");
exports.WorkSpaces = workSpaces_1.default;
const lookoutMetrics_1 = require("./lookoutMetrics");
exports.LookoutMetrics = lookoutMetrics_1.default;
const apiGatewayV2_1 = require("./apiGatewayV2");
exports.ApiGatewayV2 = apiGatewayV2_1.default;
const mediaPackage_1 = require("./mediaPackage");
exports.MediaPackage = mediaPackage_1.default;
const sageMaker_1 = require("./sageMaker");
exports.SageMaker = sageMaker_1.default;
const kinesis_1 = require("./kinesis");
exports.Kinesis = kinesis_1.default;
const ram_1 = require("./ram");
exports.RAM = ram_1.default;
const autoScaling_1 = require("./autoScaling");
exports.AutoScaling = autoScaling_1.default;
const sqs_1 = require("./sqs");
exports.SQS = sqs_1.default;
const appSync_1 = require("./appSync");
exports.AppSync = appSync_1.default;
const dataSync_1 = require("./dataSync");
exports.DataSync = dataSync_1.default;
const route53_1 = require("./route53");
exports.Route53 = route53_1.default;
const managedBlockchain_1 = require("./managedBlockchain");
exports.ManagedBlockchain = managedBlockchain_1.default;
const cloudWatch_1 = require("./cloudWatch");
exports.CloudWatch = cloudWatch_1.default;
const ecs_1 = require("./ecs");
exports.ECS = ecs_1.default;
const stepFunctions_1 = require("./stepFunctions");
exports.StepFunctions = stepFunctions_1.default;
const networkManager_1 = require("./networkManager");
exports.NetworkManager = networkManager_1.default;
const codeStarConnections_1 = require("./codeStarConnections");
exports.CodeStarConnections = codeStarConnections_1.default;
const cloudFront_1 = require("./cloudFront");
exports.CloudFront = cloudFront_1.default;
const kinesisAnalytics_1 = require("./kinesisAnalytics");
exports.KinesisAnalytics = kinesisAnalytics_1.default;
const cloudFormation_1 = require("./cloudFormation");
exports.CloudFormation = cloudFormation_1.default;
const cognito_1 = require("./cognito");
exports.Cognito = cognito_1.default;
const appStream_1 = require("./appStream");
exports.AppStream = appStream_1.default;
const glue_1 = require("./glue");
exports.Glue = glue_1.default;
const greengrass_1 = require("./greengrass");
exports.Greengrass = greengrass_1.default;
const guardDuty_1 = require("./guardDuty");
exports.GuardDuty = guardDuty_1.default;
const budgets_1 = require("./budgets");
exports.Budgets = budgets_1.default;
const lakeFormation_1 = require("./lakeFormation");
exports.LakeFormation = lakeFormation_1.default;
const s3_1 = require("./s3");
exports.S3 = s3_1.default;
const sns_1 = require("./sns");
exports.SNS = sns_1.default;
const efs_1 = require("./efs");
exports.EFS = efs_1.default;
const mediaConnect_1 = require("./mediaConnect");
exports.MediaConnect = mediaConnect_1.default;
const quickSight_1 = require("./quickSight");
exports.QuickSight = quickSight_1.default;
const apiGateway_1 = require("./apiGateway");
exports.ApiGateway = apiGateway_1.default;
const kms_1 = require("./kms");
exports.KMS = kms_1.default;
const redshift_1 = require("./redshift");
exports.Redshift = redshift_1.default;
const applicationInsights_1 = require("./applicationInsights");
exports.ApplicationInsights = applicationInsights_1.default;
const customerProfiles_1 = require("./customerProfiles");
exports.CustomerProfiles = customerProfiles_1.default;
const opsWorks_1 = require("./opsWorks");
exports.OpsWorks = opsWorks_1.default;
const eks_1 = require("./eks");
exports.EKS = eks_1.default;
const appMesh_1 = require("./appMesh");
exports.AppMesh = appMesh_1.default;
const lambda_1 = require("./lambda");
exports.Lambda = lambda_1.default;
const ce_1 = require("./ce");
exports.CE = ce_1.default;
const ioT1Click_1 = require("./ioT1Click");
exports.IoT1Click = ioT1Click_1.default;
const iot_1 = require("./iot");
exports.IoT = iot_1.default;
const mediaConvert_1 = require("./mediaConvert");
exports.MediaConvert = mediaConvert_1.default;
const qldb_1 = require("./qldb");
exports.QLDB = qldb_1.default;
const waFv2_1 = require("./waFv2");
exports.WAFv2 = waFv2_1.default;
const batch_1 = require("./batch");
exports.Batch = batch_1.default;
const dataBrew_1 = require("./dataBrew");
exports.DataBrew = dataBrew_1.default;
const gameLift_1 = require("./gameLift");
exports.GameLift = gameLift_1.default;
const elastiCache_1 = require("./elastiCache");
exports.ElastiCache = elastiCache_1.default;
const rds_1 = require("./rds");
exports.RDS = rds_1.default;
const elasticLoadBalancing_1 = require("./elasticLoadBalancing");
exports.ElasticLoadBalancing = elasticLoadBalancing_1.default;
const ioTFleetHub_1 = require("./ioTFleetHub");
exports.IoTFleetHub = ioTFleetHub_1.default;
const codeArtifact_1 = require("./codeArtifact");
exports.CodeArtifact = codeArtifact_1.default;
const mwaa_1 = require("./mwaa");
exports.MWAA = mwaa_1.default;
const logs_1 = require("./logs");
exports.Logs = logs_1.default;
const macie_1 = require("./macie");
exports.Macie = macie_1.default;
const config_1 = require("./config");
exports.Config = config_1.default;
const secretsManager_1 = require("./secretsManager");
exports.SecretsManager = secretsManager_1.default;
const elasticLoadBalancingV2_1 = require("./elasticLoadBalancingV2");
exports.ElasticLoadBalancingV2 = elasticLoadBalancingV2_1.default;
const codeBuild_1 = require("./codeBuild");
exports.CodeBuild = codeBuild_1.default;
const amazonMq_1 = require("./amazonMq");
exports.AmazonMQ = amazonMq_1.default;
const dms_1 = require("./dms");
exports.DMS = dms_1.default;
const s3ObjectLambda_1 = require("./s3ObjectLambda");
exports.S3ObjectLambda = s3ObjectLambda_1.default;
const networkFirewall_1 = require("./networkFirewall");
exports.NetworkFirewall = networkFirewall_1.default;
const events_1 = require("./events");
exports.Events = events_1.default;
const codeDeploy_1 = require("./codeDeploy");
exports.CodeDeploy = codeDeploy_1.default;
const location_1 = require("./location");
exports.Location = location_1.default;
const dax_1 = require("./dax");
exports.DAX = dax_1.default;
const cloudTrail_1 = require("./cloudTrail");
exports.CloudTrail = cloudTrail_1.default;
const codePipeline_1 = require("./codePipeline");
exports.CodePipeline = codePipeline_1.default;
const docDb_1 = require("./docDb");
exports.DocDB = docDb_1.default;
const serviceCatalogAppRegistry_1 = require("./serviceCatalogAppRegistry");
exports.ServiceCatalogAppRegistry = serviceCatalogAppRegistry_1.default;
const ssmContacts_1 = require("./ssmContacts");
exports.SSMContacts = ssmContacts_1.default;
const greengrassV2_1 = require("./greengrassV2");
exports.GreengrassV2 = greengrassV2_1.default;
const roboMaker_1 = require("./roboMaker");
exports.RoboMaker = roboMaker_1.default;
const ioTAnalytics_1 = require("./ioTAnalytics");
exports.IoTAnalytics = ioTAnalytics_1.default;
const amplify_1 = require("./amplify");
exports.Amplify = amplify_1.default;
const eventSchemas_1 = require("./eventSchemas");
exports.EventSchemas = eventSchemas_1.default;
const cloud9_1 = require("./cloud9");
exports.Cloud9 = cloud9_1.default;
const serviceDiscovery_1 = require("./serviceDiscovery");
exports.ServiceDiscovery = serviceDiscovery_1.default;
const appConfig_1 = require("./appConfig");
exports.AppConfig = appConfig_1.default;
const fis_1 = require("./fis");
exports.FIS = fis_1.default;
const ssm_1 = require("./ssm");
exports.SSM = ssm_1.default;
const kinesisAnalyticsV2_1 = require("./kinesisAnalyticsV2");
exports.KinesisAnalyticsV2 = kinesisAnalyticsV2_1.default;
const devOpsGuru_1 = require("./devOpsGuru");
exports.DevOpsGuru = devOpsGuru_1.default;
const auditManager_1 = require("./auditManager");
exports.AuditManager = auditManager_1.default;
const ssmIncidents_1 = require("./ssmIncidents");
exports.SSMIncidents = ssmIncidents_1.default;
const detective_1 = require("./detective");
exports.Detective = detective_1.default;
const synthetics_1 = require("./synthetics");
exports.Synthetics = synthetics_1.default;
const dlm_1 = require("./dlm");
exports.DLM = dlm_1.default;
const sdb_1 = require("./sdb");
exports.SDB = sdb_1.default;
const ioTEvents_1 = require("./ioTEvents");
exports.IoTEvents = ioTEvents_1.default;
const ecr_1 = require("./ecr");
exports.ECR = ecr_1.default;
const s3Outposts_1 = require("./s3Outposts");
exports.S3Outposts = s3Outposts_1.default;
const fms_1 = require("./fms");
exports.FMS = fms_1.default;
const mediaLive_1 = require("./mediaLive");
exports.MediaLive = mediaLive_1.default;
const transfer_1 = require("./transfer");
exports.Transfer = transfer_1.default;
const codeGuruReviewer_1 = require("./codeGuruReviewer");
exports.CodeGuruReviewer = codeGuruReviewer_1.default;
const elasticBeanstalk_1 = require("./elasticBeanstalk");
exports.ElasticBeanstalk = elasticBeanstalk_1.default;
const ioTCoreDeviceAdvisor_1 = require("./ioTCoreDeviceAdvisor");
exports.IoTCoreDeviceAdvisor = ioTCoreDeviceAdvisor_1.default;
const imageBuilder_1 = require("./imageBuilder");
exports.ImageBuilder = imageBuilder_1.default;
const ioTThingsGraph_1 = require("./ioTThingsGraph");
exports.IoTThingsGraph = ioTThingsGraph_1.default;
const autoScalingPlans_1 = require("./autoScalingPlans");
exports.AutoScalingPlans = autoScalingPlans_1.default;
const sso_1 = require("./sso");
exports.SSO = sso_1.default;
const directoryService_1 = require("./directoryService");
exports.DirectoryService = directoryService_1.default;
const licenseManager_1 = require("./licenseManager");
exports.LicenseManager = licenseManager_1.default;
const certificateManager_1 = require("./certificateManager");
exports.CertificateManager = certificateManager_1.default;
const codeStarNotifications_1 = require("./codeStarNotifications");
exports.CodeStarNotifications = codeStarNotifications_1.default;
const inspector_1 = require("./inspector");
exports.Inspector = inspector_1.default;
const emrContainers_1 = require("./emrContainers");
exports.EMRContainers = emrContainers_1.default;
const opsWorksCm_1 = require("./opsWorksCm");
exports.OpsWorksCM = opsWorksCm_1.default;
const appFlow_1 = require("./appFlow");
exports.AppFlow = appFlow_1.default;
const securityHub_1 = require("./securityHub");
exports.SecurityHub = securityHub_1.default;
const fSx_1 = require("./fSx");
exports.FSx = fSx_1.default;
const dataPipeline_1 = require("./dataPipeline");
exports.DataPipeline = dataPipeline_1.default;
const signer_1 = require("./signer");
exports.Signer = signer_1.default;
const codeGuruProfiler_1 = require("./codeGuruProfiler");
exports.CodeGuruProfiler = codeGuruProfiler_1.default;
const athena_1 = require("./athena");
exports.Athena = athena_1.default;
const applicationAutoScaling_1 = require("./applicationAutoScaling");
exports.ApplicationAutoScaling = applicationAutoScaling_1.default;
const mediaStore_1 = require("./mediaStore");
exports.MediaStore = mediaStore_1.default;
const resourceGroups_1 = require("./resourceGroups");
exports.ResourceGroups = resourceGroups_1.default;
const lookoutVision_1 = require("./lookoutVision");
exports.LookoutVision = lookoutVision_1.default;
const kinesisFirehose_1 = require("./kinesisFirehose");
exports.KinesisFirehose = kinesisFirehose_1.default;
const msk_1 = require("./msk");
exports.MSK = msk_1.default;
const dynamoDb_1 = require("./dynamoDb");
exports.DynamoDB = dynamoDb_1.default;
const cassandra_1 = require("./cassandra");
exports.Cassandra = cassandra_1.default;
const appRunner_1 = require("./appRunner");
exports.AppRunner = appRunner_1.default;
const codeStar_1 = require("./codeStar");
exports.CodeStar = codeStar_1.default;
const chatbot_1 = require("./chatbot");
exports.Chatbot = chatbot_1.default;
const ses_1 = require("./ses");
exports.SES = ses_1.default;
const groundStation_1 = require("./groundStation");
exports.GroundStation = groundStation_1.default;
const ask_1 = require("./ask");
exports.ASK = ask_1.default;
const pinpoint_1 = require("./pinpoint");
exports.Pinpoint = pinpoint_1.default;
const pinpointEmail_1 = require("./pinpointEmail");
exports.PinpointEmail = pinpointEmail_1.default;
const fraudDetector_1 = require("./fraudDetector");
exports.FraudDetector = fraudDetector_1.default;
const ioTSiteWise_1 = require("./ioTSiteWise");
exports.IoTSiteWise = ioTSiteWise_1.default;
const kendra_1 = require("./kendra");
exports.Kendra = kendra_1.default;
const neptune_1 = require("./neptune");
exports.Neptune = neptune_1.default;
const nimbleStudio_1 = require("./nimbleStudio");
exports.NimbleStudio = nimbleStudio_1.default;
const finSpace_1 = require("./finSpace");
exports.FinSpace = finSpace_1.default;
const timestream_1 = require("./timestream");
exports.Timestream = timestream_1.default;
const ioTWireless_1 = require("./ioTWireless");
exports.IoTWireless = ioTWireless_1.default;
const ivs_1 = require("./ivs");
exports.IVS = ivs_1.default;
const codeCommit_1 = require("./codeCommit");
exports.CodeCommit = codeCommit_1.default;
const cur_1 = require("./cur");
exports.CUR = cur_1.default;
exports.default = {
    XRay: xRay_1.default,
    EC2: ec2_1.default,
    ACMPCA: acmpca_1.default,
    ServiceCatalog: serviceCatalog_1.default,
    GlobalAccelerator: globalAccelerator_1.default,
    AccessAnalyzer: accessAnalyzer_1.default,
    WAF: waf_1.default,
    IAM: iam_1.default,
    WAFRegional: wafRegional_1.default,
    Backup: backup_1.default,
    AppIntegrations: appIntegrations_1.default,
    Route53Resolver: route53Resolver_1.default,
    Elasticsearch: elasticsearch_1.default,
    EMR: emr_1.default,
    WorkSpaces: workSpaces_1.default,
    LookoutMetrics: lookoutMetrics_1.default,
    ApiGatewayV2: apiGatewayV2_1.default,
    MediaPackage: mediaPackage_1.default,
    SageMaker: sageMaker_1.default,
    Kinesis: kinesis_1.default,
    RAM: ram_1.default,
    AutoScaling: autoScaling_1.default,
    SQS: sqs_1.default,
    AppSync: appSync_1.default,
    DataSync: dataSync_1.default,
    Route53: route53_1.default,
    ManagedBlockchain: managedBlockchain_1.default,
    CloudWatch: cloudWatch_1.default,
    ECS: ecs_1.default,
    StepFunctions: stepFunctions_1.default,
    NetworkManager: networkManager_1.default,
    CodeStarConnections: codeStarConnections_1.default,
    CloudFront: cloudFront_1.default,
    KinesisAnalytics: kinesisAnalytics_1.default,
    CloudFormation: cloudFormation_1.default,
    Cognito: cognito_1.default,
    AppStream: appStream_1.default,
    Glue: glue_1.default,
    Greengrass: greengrass_1.default,
    GuardDuty: guardDuty_1.default,
    Budgets: budgets_1.default,
    LakeFormation: lakeFormation_1.default,
    S3: s3_1.default,
    SNS: sns_1.default,
    EFS: efs_1.default,
    MediaConnect: mediaConnect_1.default,
    QuickSight: quickSight_1.default,
    ApiGateway: apiGateway_1.default,
    KMS: kms_1.default,
    Redshift: redshift_1.default,
    ApplicationInsights: applicationInsights_1.default,
    CustomerProfiles: customerProfiles_1.default,
    OpsWorks: opsWorks_1.default,
    EKS: eks_1.default,
    AppMesh: appMesh_1.default,
    Lambda: lambda_1.default,
    CE: ce_1.default,
    IoT1Click: ioT1Click_1.default,
    IoT: iot_1.default,
    MediaConvert: mediaConvert_1.default,
    QLDB: qldb_1.default,
    WAFv2: waFv2_1.default,
    Batch: batch_1.default,
    DataBrew: dataBrew_1.default,
    GameLift: gameLift_1.default,
    ElastiCache: elastiCache_1.default,
    RDS: rds_1.default,
    ElasticLoadBalancing: elasticLoadBalancing_1.default,
    IoTFleetHub: ioTFleetHub_1.default,
    CodeArtifact: codeArtifact_1.default,
    MWAA: mwaa_1.default,
    Logs: logs_1.default,
    Macie: macie_1.default,
    Config: config_1.default,
    SecretsManager: secretsManager_1.default,
    ElasticLoadBalancingV2: elasticLoadBalancingV2_1.default,
    CodeBuild: codeBuild_1.default,
    AmazonMQ: amazonMq_1.default,
    DMS: dms_1.default,
    S3ObjectLambda: s3ObjectLambda_1.default,
    NetworkFirewall: networkFirewall_1.default,
    Events: events_1.default,
    CodeDeploy: codeDeploy_1.default,
    Location: location_1.default,
    DAX: dax_1.default,
    CloudTrail: cloudTrail_1.default,
    CodePipeline: codePipeline_1.default,
    DocDB: docDb_1.default,
    ServiceCatalogAppRegistry: serviceCatalogAppRegistry_1.default,
    SSMContacts: ssmContacts_1.default,
    GreengrassV2: greengrassV2_1.default,
    RoboMaker: roboMaker_1.default,
    IoTAnalytics: ioTAnalytics_1.default,
    Amplify: amplify_1.default,
    EventSchemas: eventSchemas_1.default,
    Cloud9: cloud9_1.default,
    ServiceDiscovery: serviceDiscovery_1.default,
    AppConfig: appConfig_1.default,
    FIS: fis_1.default,
    SSM: ssm_1.default,
    KinesisAnalyticsV2: kinesisAnalyticsV2_1.default,
    DevOpsGuru: devOpsGuru_1.default,
    AuditManager: auditManager_1.default,
    SSMIncidents: ssmIncidents_1.default,
    Detective: detective_1.default,
    Synthetics: synthetics_1.default,
    DLM: dlm_1.default,
    SDB: sdb_1.default,
    IoTEvents: ioTEvents_1.default,
    ECR: ecr_1.default,
    S3Outposts: s3Outposts_1.default,
    FMS: fms_1.default,
    MediaLive: mediaLive_1.default,
    Transfer: transfer_1.default,
    CodeGuruReviewer: codeGuruReviewer_1.default,
    ElasticBeanstalk: elasticBeanstalk_1.default,
    IoTCoreDeviceAdvisor: ioTCoreDeviceAdvisor_1.default,
    ImageBuilder: imageBuilder_1.default,
    IoTThingsGraph: ioTThingsGraph_1.default,
    AutoScalingPlans: autoScalingPlans_1.default,
    SSO: sso_1.default,
    DirectoryService: directoryService_1.default,
    LicenseManager: licenseManager_1.default,
    CertificateManager: certificateManager_1.default,
    CodeStarNotifications: codeStarNotifications_1.default,
    Inspector: inspector_1.default,
    EMRContainers: emrContainers_1.default,
    OpsWorksCM: opsWorksCm_1.default,
    AppFlow: appFlow_1.default,
    SecurityHub: securityHub_1.default,
    FSx: fSx_1.default,
    DataPipeline: dataPipeline_1.default,
    Signer: signer_1.default,
    CodeGuruProfiler: codeGuruProfiler_1.default,
    Athena: athena_1.default,
    ApplicationAutoScaling: applicationAutoScaling_1.default,
    MediaStore: mediaStore_1.default,
    ResourceGroups: resourceGroups_1.default,
    LookoutVision: lookoutVision_1.default,
    KinesisFirehose: kinesisFirehose_1.default,
    MSK: msk_1.default,
    DynamoDB: dynamoDb_1.default,
    Cassandra: cassandra_1.default,
    AppRunner: appRunner_1.default,
    CodeStar: codeStar_1.default,
    Chatbot: chatbot_1.default,
    SES: ses_1.default,
    GroundStation: groundStation_1.default,
    ASK: ask_1.default,
    Pinpoint: pinpoint_1.default,
    PinpointEmail: pinpointEmail_1.default,
    FraudDetector: fraudDetector_1.default,
    IoTSiteWise: ioTSiteWise_1.default,
    Kendra: kendra_1.default,
    Neptune: neptune_1.default,
    NimbleStudio: nimbleStudio_1.default,
    FinSpace: finSpace_1.default,
    Timestream: timestream_1.default,
    IoTWireless: ioTWireless_1.default,
    IVS: ivs_1.default,
    CodeCommit: codeCommit_1.default,
    CUR: cur_1.default
};
