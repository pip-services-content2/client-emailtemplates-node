const fs = require('fs');

import { YamlConfigReader } from 'pip-services3-components-nodex';
import { EmailTemplatesClientFixtureV1 } from './EmailTemplatesClientFixtureV1';
import { EmailTemplatesLambdaClientV1 } from '../../src/version1/EmailTemplatesLambdaClientV1';


suite('EmailTemplatesLambdaClient', ()=> {
    // Skip if test connections file absent
    if (!fs.existsSync('./config/test_connections.yaml'))
        return;

    let config = YamlConfigReader.readConfig(null, './config/test_connections.yaml', null);
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: EmailTemplatesLambdaClientV1;
    let fixture: EmailTemplatesClientFixtureV1;

    setup(async () => {
        client = new EmailTemplatesLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new EmailTemplatesClientFixtureV1(client);

        await client.open(null);
    });

    teardown(async () => {
        await client.close(null);
    });

    test('Crud Operations', async () => {
        await fixture.testCrudOperations();
    });

});