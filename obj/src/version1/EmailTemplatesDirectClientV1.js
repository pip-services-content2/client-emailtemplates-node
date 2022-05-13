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
exports.EmailTemplatesDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class EmailTemplatesDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor("service-emailtemplates", "controller", "*", "*", "*"));
    }
    getTemplates(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'email_templates.get_templates');
            try {
                return yield this._controller.getTemplates(correlationId, filter, paging);
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
            let timing = this.instrument(correlationId, 'email_templates.get_template_by_id');
            try {
                return yield this._controller.getTemplateById(correlationId, id);
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
            let timing = this.instrument(correlationId, 'email_templates.get_template_by_id_or_name');
            try {
                return yield this._controller.getTemplateByIdOrName(correlationId, idOrName);
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
            let timing = this.instrument(correlationId, 'email_templates.create_template');
            try {
                return yield this._controller.createTemplate(correlationId, template);
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
            let timing = this.instrument(correlationId, 'email_templates.update_template');
            try {
                return yield this._controller.updateTemplate(correlationId, template);
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
            let timing = this.instrument(correlationId, 'email_templates.delete_template_by_id');
            try {
                return yield this._controller.deleteTemplateById(correlationId, id);
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
exports.EmailTemplatesDirectClientV1 = EmailTemplatesDirectClientV1;
//# sourceMappingURL=EmailTemplatesDirectClientV1.js.map