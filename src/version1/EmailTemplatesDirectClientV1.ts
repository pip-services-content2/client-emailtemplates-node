import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IEmailTemplatesClientV1 } from './IEmailTemplatesClientV1';
//import { IEmailTemplatesController } from 'service-emailtemplates-node';
import { EmailTemplateV1 } from './EmailTemplateV1';

export class EmailTemplatesDirectClientV1 extends DirectClient<any> implements IEmailTemplatesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-emailtemplates", "controller", "*", "*", "*"))
    }

    public async getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<EmailTemplateV1>> {
        let timing = this.instrument(correlationId, 'email_templates.get_templates');
        
        try {
            return await this._controller.getTemplates(correlationId, filter, paging);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getTemplateById(correlationId: string, id: string): Promise<EmailTemplateV1> {
        let timing = this.instrument(correlationId, 'email_templates.get_template_by_id');
        
        try {
            return await this._controller.getTemplateById(correlationId, id);
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
            return await this._controller.getTemplateByIdOrName(correlationId, idOrName);
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
            return await this._controller.createTemplate(correlationId, template);
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
            return await this._controller.updateTemplate(correlationId, template);
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
            return await this._controller.deleteTemplateById(correlationId, id);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}