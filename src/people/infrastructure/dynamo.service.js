const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand, QueryCommand, ScanCommand } = require("@aws-sdk/lib-dynamodb");

class DynamoDBService {
    ddbClient;
    ddbDocClient;

    constructor() {
        this.ddbClient = new DynamoDBClient({
            region: process.env.REGION
        });
        this.ddbDocClient = DynamoDBDocumentClient.from(this.ddbClient);
    }

    async query(queryCommandInput) {
        const queryCommand = new QueryCommand(queryCommandInput);
        return await this.ddbDocClient.send(queryCommand);
    }

    async scan(scanCommandInput) {
        const scanCommand = new ScanCommand(scanCommandInput);
        return await this.ddbDocClient.send(scanCommand);
    }

    async put(putCommandInput) {
        const putCommand = new PutCommand(putCommandInput);
        return await this.ddbDocClient.send(putCommand);
    }
}

module.exports = DynamoDBService
