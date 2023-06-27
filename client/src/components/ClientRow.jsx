import "../App.css";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";

export default function ClientRow({ client }) {

const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id }
});

  return (
    <tr className="table--row">
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button onClick={deleteClient}>Delete</button>
      </td>
    </tr>
  );
}
