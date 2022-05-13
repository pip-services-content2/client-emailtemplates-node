import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { EmailTemplateV1 } from './EmailTemplateV1';
import { IEmailTemplatesClientV1 } from './IEmailTemplatesClientV1';

export class EmailTemplatesHttpClientV1 extends CommandableHttpClient implements IEmailTemplatesClientV1 {       
    
    constructor(config?: any) {
        super('v1/email_templates');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public async getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<EmailTemplateV1>> {
        let timing = this.instrument(correlationId, 'email_templates.get_templates');

        try {
            return await this.callCommand(
                'get_templates',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getTemplateById(correlationId: string, id: string): Promise<EmailTemplateV1> {
        let timing = this.instrument(correlationId, 'email_templates.get_templates');

        try {
            return await this.callCommand(
                'get_template_by_id',
                correlationId,
                {
                    template_id: id
                }
            );   
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }     
    }

    public async getTemplateByIdOrName(correlationId: string, idOrName: string): Promise<EmailTemplateV1> {
        let timing = this.instrument(correlationId, 'email_templates.get_template_by_id_or_name');

        try {
            return await this.callCommand(
                'get_template_by_id_or_name',
                correlationId,
                {
                    id_or_name: idOrName
                }
            );   
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }          
    }

    public async createTemplate(correlationId: string, template: EmailTemplateV1): Promise<EmailTemplateV1> {
        let timing = this.instrument(correlationId, 'email_templates.create_template');

        try {
            return await this.callCommand(
                'create_template',
                correlationId,
                {
                    template: template
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }   
    }

    public async updateTemplate(correlationId: string, template: EmailTemplateV1): Promise<EmailTemplateV1> {
        let timing = this.instrument(correlationId, 'email_templates.update_template');

        try {
            return await this.callCommand(
                'update_template',
                correlationId,
                {
                    template: template
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        } 
    }

    public async deleteTemplateById(correlationId: string, id: string): Promise<EmailTemplateV1> {
        let timing = this.instrument(correlationId, 'email_templates.delete_template_by_id');

        try {
            return await this.callCommand(
                'delete_template_by_id',
                correlationId,
                {
                    template_id: id
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        } 
    }
    
}
