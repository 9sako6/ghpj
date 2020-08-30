import { TsGitHubProjects } from '../../src/';

describe('testing a repository project', () => {
  it('create and get and delete a project', async () => {
    // authorization
    expect(process.env.PERSONAL_ACCESS_TOKEN).toBeTruthy();
    const gh = new TsGitHubProjects({ token: process.env.PERSONAL_ACCESS_TOKEN! });
    // create a project
    const createdProject = await gh.createRepositoryProject(
      '9sako6',
      'ts-github-projects',
      {
        name: `create_repository_project_integration_test_at_${Date.now()}`,
        body: `test projcet ${Date.now()}`
      }
    );
    expect(createdProject).toBeDefined();
    // get a project
    const projectId = createdProject!.id!;
    const project = await gh.getProject(projectId);
    expect(project).toBeDefined();
    // delete a project
    const res = await gh.deleteProject(projectId);
    expect(res.status).toEqual(204);
  });
});