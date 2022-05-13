"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTemplatesLambdaClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class EmailTemplatesLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('email_templates');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getTemplates(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'message_templates.get_templates');
            try {
                return yield this.callCommand('get_templates', correlationId, {
                    filter: filter,
                    paging: paging
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getTemplateById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'message_templates.get_template_by_id');
            try {
                return yield this.callCommand('get_template_by_id', correlationId, {
                    template_id: id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getTemplateByIdOrName(correlationId, idOrName) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'message_templates.get_template_by_id_or_name');
            try {
                return yield this.callCommand('get_template_by_id_or_name', correlationId, {
                    id_or_name: idOrName
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    createTemplate(correlationId, template) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'message_templates.create_template');
            try {
                return yield this.callCommand('create_template', correlationId, {
                    template: template
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateTemplate(correlationId, template) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'message_templates.update_template');
            try {
                return yield this.callCommand('update_template', correlationId, {
                    template: template
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteTemplateById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'message_templates.delete_template_by_id');
            try {
                return yield this.callCommand('delete_template_by_id', correlationId, {
                    template_id: id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.EmailTemplatesLambdaClientV1 = EmailTemplatesLambdaClientV1;
//# sourceMappingURL=EmailTemplatesLambdaClientV1.js.map