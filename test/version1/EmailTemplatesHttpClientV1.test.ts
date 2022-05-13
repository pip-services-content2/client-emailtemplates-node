import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { EmailTemplatesMemoryPersistence } from 'service-emailtemplates-node';
import { EmailTemplatesController } from 'service-emailtemplates-node';
import { EmailTemplatesHttpServiceV1 } from 'service-emailtemplates-node';
import { EmailTemplatesHttpClientV1 } from '../../src/version1/EmailTemplatesHttpClientV1';
import { EmailTemplatesClientFixtureV1 } from './EmailTemplatesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('EmailTemplatesRestClientV1', ()=> {
    let service: EmailTemplatesHttpServiceV1;
    let client: EmailTemplatesHttpClientV1;
    let fixture: EmailTemplatesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new EmailTemplatesMemoryPersistence();
        let controller = new EmailTemplatesController();

        service = new EmailTemplatesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-emailtemplates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-emailtemplates', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-emailtemplates', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new EmailTemplatesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new EmailTemplatesClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
