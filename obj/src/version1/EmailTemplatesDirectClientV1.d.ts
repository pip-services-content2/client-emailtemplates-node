import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';
import { IEmailTemplatesClientV1 } from './IEmailTemplatesClientV1';
import { EmailTemplateV1 } from './EmailTemplateV1';
export declare class EmailTemplatesDirectClientV1 extends DirectClient<any> implements IEmailTemplatesClientV1 {
    constructor();
    getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<EmailTemplateV1>>;
    getTemplateById(correlationId: string, id: string): Promise<EmailTemplateV1>;
    getTemplateByIdOrName(correlationId: string, idOrName: string): Promise<EmailTemplateV1>;
    createTemplate(correlationId: string, template: EmailTemplateV1): Promise<EmailTemplateV1>;
    updateTemplate(correlationId: string, template: EmailTemplateV1): Promise<EmailTemplateV1>;
    deleteTemplateById(correlationId: string, id: string): Promise<EmailTemplateV1>;
}
