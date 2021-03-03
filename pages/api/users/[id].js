const userHandler = async(req, res) =>{
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      res.status(200).json(data)
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default userHandler;