# Client API (version 1) <br/> Email Templates Microservices Client SDK for Node.js / ES2017

Node.js client API for Email templates microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [Installation](#install)
* [Getting started](#get_started)
* [EmailTemplateV1 class](#class1)
* [IEmailTemplateClientV1 interface](#interface)
    - [getTemplates()](#operation1)
    - [getTemplateById()](#operation2)
    - [getTemplateByIdOrName()](#operation3)
    - [createTemplate()](#operation4)
    - [updateTemplate()](#operation5)
    - [deleteTemplateById()](#operation6)
* [EmailTemplatesDirectClientV1 class](#client_direct)
* [EmailTemplatesHttpClientV1 class](#client_http)
* [EmailTemplatesLambdaClientV1 class](#client_lambda)

## <a name="install"></a> Installation

To work with the client SDK add dependency into package.json file:

```javascript
{
    ...
    "dependencies": {
        ....
        "client-emailtemplates-node": "^1.1.0",
        ...
    }
}
```

Then download the dependency using **npm**:

```javascript
# Installing dependencies
npm install

# Updating dependencies
npm update
```

## <a name="get_started"></a> Getting started

This is a simple example on how to work with the microservice using REST client:

```javascript
// Get Client SDK for Version 1 
let sdk = new require('client-emailtemplates-node');

// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};

// Create the client instance
let client = sdk.EmailTemplatesHttpClientV1(config);

// Open client connection to the microservice
await client.open(null);
    
console.log('Opened connection');
    
// Create a new email template
let template = {
    name: 'Welcome',
    subject: { en: 'Welcome to our product' },
    text: { en: 'Welcome <%= name %>!' },
    html: { en: '<h1>Welcome <%= name %>!<h1>' },
    status: 'completed'
};

template = await client.createTemplate(null, template);
            
console.log('Create template is');
console.log(template);
            
// Get welcome template
template = await client.getTemplateByIdOrName(null, 'Welcome');
console.log('Welcome template is');
console.log(template);
                    
// Close connection
await client.close(correlationId, ); 
```

### <a name="class1"></a> EmailTemplateV1 class

Represents an email template

**Properties:**
- id: string - unique template id
- name: string - template name
- from: string - sender address
- reply_to: string - sender replyto address
- subject: MultiString - email subject in different languages
- text: MultiString - email text body in different languages
- html: MultiString - email html body in different languages
- status: string - editing status of the emailtemplate: 'new', 'writing', 'translating', 'completed' (default: 'new')

## <a name="interface"></a> IEmailTemplatesClientV1 interface

If you are using Typescript, you can use IEmailTemplatesClient as a common interface across all client implementations. 
If you are using plain Javascript, you shall not worry about IEmailTemplatesClient interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```javascript
interface IEmailTemplatesClientV1 {
    getTemplates(correlationId, filter, paging);
    getTemplateById(correlationId, id);
    getTemplateByIdOrName(correlationId, idOrName);
    createTemplate(correlationId, template);
    updateTemplate(correlationId, template);
    deleteTemplateById(correlationId, id);
}
```

### <a name="operation1"></a> getTemplates(correlationId, filter, paging)

Retrieves a collection of email templates according to specified criteria

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- filter: any - filter parameters
  - name: string - (optional) template name
  - status: string - (optional) template editing status
  - search: string - (optional) free text search
- paging: any - paging parameters
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result
  - paging: bool - (optional) true to enable paging and return total count
- returns: DataPage<EmailTemplateV1> - retrieved emailtemplates in page format

### <a name="operation2"></a> getTemplateById(correlationId, id)

Retrieves a single email template specified by its unique id

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- id: string - unique email template id
- returns: EmailTemplateV1 - retrieved email template, null if object wasn't found 

### <a name="operation3"></a> getTemplateByIdOrName(correlationId, idOrName)

Retrieves the first email template specified by id or name

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- idOrName: string - unique template id or name
- returns: EmailTemplateV1 - retrieved email template, null if object wasn't found 

### <a name="operation4"></a> createTemplate(correlationId, template)

Creates a new email template

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- emailtemplate: EmailTemplateV1 - EmailTemplate object to be created. If object id is not defined it is assigned automatically.
- returns: EmailTemplateV1 - created email template object

### <a name="operation5"></a> updateTemplate(correlationId, template)

Updates email template

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- template: EmailTemplateV1 - email template object with new values
- returns: EmailTemplateV1 - updated email template object 

### <a name="operation6"></a> deleteTemplateById(correlationId, emailtemplateId)

Deletes email template specified by its unique id

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- id: string - unique email template id
 
## <a name="client_direct"></a> EmailTemplatesDirectClientV1 class

EmailTemplatesDirectClientV1 is a direct client to call controller inside microservice container

```javascript
class EmailTemplatesDirectClientV1 extends DirectClient implements IEmailTemplatesClientV1 {
    constructor(config: any = null);
    configure(config);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getTemplates(correlationId, filter, paging);
    getTemplateById(correlationId, id);
    getTemplateByIdOrName(correlationId, idOrName);
    createTemplate(correlationId, template);
    updateTemplate(correlationId, template);
    deleteTemplateById(correlationId, id);
}
```

**Constructor config properties:** 
- ...

## <a name="client_http"></a> EmailTemplatesHttpClientV1 class

EmailTemplatesHttpClientV1 is a client that implements HTTP protocol

```javascript
class EmailTemplatesHttpClientV1 extends CommandableHttpClient implements IEmailTemplatesClientV1 {
    constructor(config: any = null);
    configure(config);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getTemplates(correlationId, filter, paging);
    getTemplateById(correlationId, id);
    getTemplateByIdOrName(correlationId, idOrName);
    createTemplate(correlationId, template);
    updateTemplate(correlationId, template);
    deleteTemplateById(correlationId, id);
}
```

**Constructor config properties:** 
- connection: object - HTTP transport configuration options
  - type: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_lambda"></a> EmailTemplatesLambdaClientV1 class

EmailTemplatesLambdaClientV1 is a client that calls AWS Lamba functions

```javascript
class EmailTemplatesLambdaClientV1 extends LambdaClient implements IEmailTemplatesClientV1 {
    constructor(config: any = null);        
    configure(config);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getTemplates(correlationId, filter, paging);
    getTemplateById(correlationId, id);
    getTemplateByIdOrName(correlationId, idOrName);
    createTemplate(correlationId, template);
    updateTemplate(correlationId, template);
    deleteTemplateById(correlationId, id);
}
```

**Constructor config properties:** 
- connection: object - AWS Lambda connection properties
  - protocol: "aws"
  - region: string - AWS availability region like "us-east-1"
  - function: string - unique function name or arn like "arn:aws:lambda:us-east-1:268549927901:function:pip-services-template-node"
- credential: object - AWS Lambda access keys and additional parameters
  - access\_key\_id: string - AWS access key id
  - secret\_access\_key: string - AWS secret access key
- options: object
  - timeout: number - communication timeout in milliseconds (default: 30,000)
  