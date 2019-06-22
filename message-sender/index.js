require('dotenv').config({ path: '../.env' });

const amqp = require('amqplib/callback_api');
const inquirer = require('inquirer');

const { MQ_USER, MQ_PASS, MQ_HOST, MQ_PORT, QUEUE_NAME } = process.env;

async function promptMessage({ queueName, url }) {
  const { message } = await inquirer.prompt({
    name: 'message',
    type: 'input',
    message: 'Message',
  });

  amqp.connect(url, function(error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }

      channel.assertQueue(queueName, {
        durable: false,
      });

      const data = {
        pattern: 'my-pattern',
        data: {
          message,
        },
      };

      channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
    });
  });

  console.log(`Sent!\n`);
}

async function main() {
  const url = `amqp://${MQ_USER}:${MQ_PASS}@${MQ_HOST}:${MQ_PORT}`;

  do {
    await promptMessage({
      queueName: QUEUE_NAME,
      url,
    });

    // eslint-disable-next-line no-constant-condition
  } while (true);
}

main();
