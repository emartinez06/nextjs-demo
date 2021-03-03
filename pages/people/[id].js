const host = process.env.APP_URL;
export const getStaticPaths = async () => {
    const response = await fetch(`${host}/api/users`);
    const data = await response.json();

    const paths = data.map(person => {
        return {
            params: { id: person.id.toString() }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (ctx) => {
    const id = ctx.params.id;
    const response = await fetch(`${host}/api/users/${id}`);
    const data = await response.json();

    return {
        props: { person: data }
    }
}

const Details = ({ person }) => {

    return (
        <div>
            <h1>{person.name}</h1>
            <p>{person.email}</p>
            <p>{person.website}</p>
            <p>{person.address.city}</p>
        </div>
    )

}

export default Details;