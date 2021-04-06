const userHandler = async(req, res)=> {
    const {method} = req;

    switch (method) {
        case 'GET':
            // Get data from your database
            const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
            const data = await response.json();
            res.status(200).json(data)
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

export default userHandler;