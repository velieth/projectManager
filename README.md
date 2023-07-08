# projectManager

mgmt is a project manager with full CRUD capability. The user can add clients and projects to their local workspace. Each project has a unique owner, and each client is mapped to their owned projects.

When deleting a client, all the associated projects with that owner will be deleted as well. Client data cannot be modified but project status, description, and name can be updated.

Tech Stack: React(Vite), GraphQL, Node, Express, MongoDB, Apollo

![Screen Shot 2023-07-08 at 9 45 21 AM](https://github.com/velieth/projectManager/assets/95200346/907ba13e-9469-41ad-87a6-087da8ee0d0f)

Example of a local workspace with mock data. Data is validated on input so the correct format is maintained.

![Screen Shot 2023-07-08 at 9 50 01 AM](https://github.com/velieth/projectManager/assets/95200346/ed8d7182-fa2f-4da3-b534-3106bddc10e2)

Example data queried with GraphiQL.

