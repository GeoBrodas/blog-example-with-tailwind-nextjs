function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    // server side validation
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid' });
      return;
    }

    //store data
    const newMessage = {
      name,
      email,
      message,
    };
    console.log(newMessage);
    res.status(201).json({ message: newMessage, status: 'Success' });
  }
}

export default handler;
