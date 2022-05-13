"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTemplatesClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const version1_1 = require("../version1");
const EmailTemplatesDirectClientV1_1 = require("../version1/EmailTemplatesDirectClientV1");
const EmailTemplatesHttpClientV1_1 = require("../version1/EmailTemplatesHttpClientV1");
class EmailTemplatesClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(EmailTemplatesClientFactory.DirectClientV1Descriptor, EmailTemplatesDirectClientV1_1.EmailTemplatesDirectClientV1);
        this.registerAsType(EmailTemplatesClientFactory.HttpClientV1Descriptor, EmailTemplatesHttpClientV1_1.EmailTemplatesHttpClientV1);
        this.registerAsType(EmailTemplatesClientFactory.LambdaClientV1Descriptor, version1_1.EmailTemplatesLambdaClientV1);
    }
}
exports.EmailTemplatesClientFactory = EmailTemplatesClientFactory;
EmailTemplatesClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-emailtemplates', 'factory', 'default', 'default', '1.0');
EmailTemplatesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-emailtemplates', 'client', 'direct', 'default', '1.0');
EmailTemplatesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-emailtemplates', 'client', 'http', 'default', '1.0');
EmailTemplatesClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-emailtemplates', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=EmailTemplatesClientFactory.js.map