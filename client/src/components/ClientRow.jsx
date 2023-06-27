import "../App.css";

export default function ClientRow({ client }) {
  return (
    <tr className="table--row">
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
}
