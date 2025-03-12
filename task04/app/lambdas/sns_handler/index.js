exports.handler = async (event) => {
    console.log("SNS Event Received:", JSON.stringify(event, null, 2));

    event.Records.forEach(record => {
        const snsMessage = record.Sns.Message;
        console.log("Message from SNS:", snsMessage);
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "SNS Event Processed" })
    };
};
