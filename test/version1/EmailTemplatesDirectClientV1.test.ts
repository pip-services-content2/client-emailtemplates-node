import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { EmailTemplatesMemoryPersistence } from 'service-emailtemplates-node';
import { EmailTemplatesController } from 'service-emailtemplates-node';
import { IEmailTemplatesClientV1 } from '../../src/version1/IEmailTemplatesClientV1';
import { EmailTemplatesDirectClientV1 } from '../../src/version1/EmailTemplatesDirectClientV1';
import { EmailTemplatesClientFixtureV1 } from './EmailTemplatesClientFixtureV1';

suite('EmailTemplatesDirectClientV1', ()=> {
    let client: EmailTemplatesDirectClientV1;
    let fixture: EmailTemplatesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new EmailTemplatesMemoryPersistence();
        let controller = new EmailTemplatesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-emailtemplates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-emailtemplates', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new EmailTemplatesDirectClientV1();
        client.setReferences(references);

        fixture = new EmailTemplatesClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
