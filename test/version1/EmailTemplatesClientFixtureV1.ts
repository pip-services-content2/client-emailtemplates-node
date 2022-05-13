const assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-nodex';

import { EmailTemplateV1 } from '../../src/version1/EmailTemplateV1';
import { EmailTemplateStatusV1 } from '../../src/version1/EmailTemplateStatusV1';
import { IEmailTemplatesClientV1 } from '../../src/version1/IEmailTemplatesClientV1';

let TEMPLATE1: EmailTemplateV1 = {
    id: '1',
    name: 'template1',
    from: null,
    reply_to: null,
    subject: { en: 'Text 1' },
    text: { en: 'Text 1' },
    html: { en: 'Text 1' },
    status: EmailTemplateStatusV1.Completed
};
let TEMPLATE2: EmailTemplateV1 = {
    id: '2',
    name: 'template2',
    from: null,
    reply_to: null,
    subject: { en: 'Text 2' },
    text: { en: 'Text 2' },
    html: { en: 'Text 2' },
    status: EmailTemplateStatusV1.Completed
};

export class EmailTemplatesClientFixtureV1 {
    private _client: IEmailTemplatesClientV1;
    
    constructor(client: IEmailTemplatesClientV1) {
        this._client = client;
    }
        
    public async testCrudOperations() {
        let template1, template2;

        // Create one template
        let template = await this._client.createTemplate(null, TEMPLATE1); 

        assert.isObject(template);
        assert.equal(template.text.en, TEMPLATE1.text.en);
        assert.equal(template.name, TEMPLATE1.name);

        template1 = template;
        
        // Create another template
        template = await this._client.createTemplate(null, TEMPLATE2);

        assert.isObject(template);
        assert.equal(template.text.en, TEMPLATE2.text.en);
        assert.equal(template.name, TEMPLATE2.name);

        template2 = template;

        // Get all templates
        let page = await this._client.getTemplates(null, null, new PagingParams(0, 5, false));

        assert.isObject(page);
        assert.isTrue(page.data.length >= 2);

        // Get template by name
        template = await this._client.getTemplateByIdOrName(null, TEMPLATE1.name);

        assert.isObject(template);

        // Update the template
        template1.text.en = 'Updated Content 1';

        template = await this._client.updateTemplate(null, template1);

        assert.isObject(template);
        assert.equal(template.text.en, 'Updated Content 1');
        assert.equal(template.name, TEMPLATE1.name);

        template1 = template;

        // Delete template
        await this._client.deleteTemplateById(null, template1.id);

        // Try to get delete template
        template = await this._client.getTemplateById(null, template1.id);

        assert.isNull(template || null);
    }
}
