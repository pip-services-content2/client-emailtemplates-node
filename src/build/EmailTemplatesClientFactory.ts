import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';
import { EmailTemplatesLambdaClientV1 } from '../version1';

import { EmailTemplatesDirectClientV1 } from '../version1/EmailTemplatesDirectClientV1';
import { EmailTemplatesHttpClientV1 } from '../version1/EmailTemplatesHttpClientV1';

export class EmailTemplatesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-emailtemplates', 'factory', 'default', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-emailtemplates', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-emailtemplates', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('service-emailtemplates', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(EmailTemplatesClientFactory.DirectClientV1Descriptor, EmailTemplatesDirectClientV1);
		this.registerAsType(EmailTemplatesClientFactory.HttpClientV1Descriptor, EmailTemplatesHttpClientV1);
		this.registerAsType(EmailTemplatesClientFactory.LambdaClientV1Descriptor, EmailTemplatesLambdaClientV1);
	}
	
}
