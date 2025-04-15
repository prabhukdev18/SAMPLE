import type { Handler } from "aws-lambda";
import type { Schema } from "../../data/resource";

type handlerType = Schema['sayHello']['functionHandler']

export const handlerType: Handler = async (event: any, context: any) => {
    const { name } = event.arguments
    return `Hello , ${name}!`
}