import { promisify } from 'util';

const sleep = promisify(setTimeout);

export default async (req, res) => {
  const { body } = req;
  console.log(body);

  // Simulating form processing
  await sleep(1000);

  const wrongOrg = body.organization
    && !body.organization.trim().toLowerCase().includes('hero digital');

  if (wrongOrg) {
    res.status(403).json({
      status: 'error',
      message: 'Invalid Subscription request',
    });
  } else {
    res.status(201).json({
      status: 'success',
      message: 'Thank you. You are now subscribed.',
    });
  }
};
