import {serve} from "inngest/next";
import {inngest} from "@/src/lib/inngest/client";
import {sendDailyNewsSummary, sendSignUpEmail} from "@/src/lib/inngest/functions";

export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [sendSignUpEmail, sendDailyNewsSummary],
})