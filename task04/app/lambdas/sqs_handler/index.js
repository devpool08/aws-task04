exports.handler = async (event) => {
    console.log("SQS Event Received:", JSON.stringify(event, null, 2));

    event.Records.forEach(record => {
        const snsMessage = record.Sns.Message;
        console.log("Message from SQS:", snsMessage);
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "SQS Event Processed" })
    };
};
