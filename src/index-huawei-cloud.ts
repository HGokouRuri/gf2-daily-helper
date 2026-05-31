// huawei cloud FunctionGraph entrypoint
// Build as a Node 18 CommonJS bundle for FunctionGraph's index.handler loader.

import crypto from 'node:crypto';
import { loginPayload, DailyTask } from './service.js';
import { Context } from 'vm';

export async function handler(event: Event, context: Context) {
    const userPayload: loginPayload = {
        account_name: context.getUserData('ACCOUNT_NAME') as string,
        passwd: crypto.createHash('md5').update(context.getUserData('PASSWORD') as string).digest('hex'),
        encryptKey: context.getUserData('ENCRYPTION_KEY') as string,
    };

    await DailyTask(userPayload);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Success' }),
    };
}
