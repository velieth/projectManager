import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";

export default function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id }
  });

  if(loading) return <Spinner />
  if(error) return <p>Something went wrong.</p>

  return (
    <div>
      {!loading && !error && (
        <div>
            <Link to='/'>Back</Link>
            <h1>{data.project.name}</h1>
            <p>{data.project.description}</p>
            <div>
                <h2>Project Owner:</h2>
                <h3>{data.project.client.name}</h3>
                <p>{data.project.client.email}</p>
                <p>{data.project.client.phone}</p>
            </div>
        </div>
      )}
    </div>
  );
}
