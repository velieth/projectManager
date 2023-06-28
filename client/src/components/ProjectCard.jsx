import "../App.css";
import { useMutation } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import notStarted from "../assets/not-started.png";
import inProgress from "../assets/in-progress.png";
import completed from "../assets/completed.png";

export default function ProjectCard({ project }) {

    function generateStatus() {
        if(project.status === 'Not Started') {
            return <img src={notStarted} className="status-dot"></img>
        } else if(project.status === 'In Progress') {
            return <img src={inProgress} className="status-dot"></img>
        } else if(project.status === 'Completed') {
            return <img src={completed} className="status-dot"></img>
        }
    }

  return (
    <div className="project--card">
      <div className="status--bar">
        {generateStatus()}
        <p>Status: <strong>{project.status}</strong></p>
      </div>
      <h5>{project.name}</h5>
      <a className="button" href={`/projects/${project.id}`}>
        View
      </a>
    </div>
  );
}
