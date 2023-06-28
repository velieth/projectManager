import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";

export default function Clients() {
    const { loading, error, data } = useQuery(GET_PROJECTS)

    if(loading) return <Spinner />
    if(error) return <p>Error</p>

    return (
    <div className="projects">
        { data.projects.length > 0 ? (
            <div className="projects--container">
                {data.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        ) : (<p>No Projects</p>)}
        <hr style={{width: "100%"}}></hr>
    </div>
    )
}
