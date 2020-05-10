import TsGitHubProjects from 'src/TsGitHubProjects';

describe('testing', () => {
  describe('list', () => {
    it('list valid repository\'s projects', async () => {
      expect(process.env.PERSONAL_ACCESS_TOKEN).toBeTruthy();
      const gh = new TsGitHubProjects({ token: process.env.PERSONAL_ACCESS_TOKEN! });
      const data = await gh.listRepositoryProjects('9sako6', 'ts-github-projects');
      expect(data).toBeDefined();
    });

    it('list valid organization\'s projects', async () => {
      const gh = new TsGitHubProjects();
      const data = await gh.listOrganizationProjects('9sako6-playground');
      expect(data).toBeDefined();
    });

    it('list valid user\'s projects', async () => {
      const gh = new TsGitHubProjects();
      const data = await gh.listUserProjects('9sako6');
      expect(data).toBeDefined();
    });
  });

  it('get a project', async () => {
    expect(process.env.PERSONAL_ACCESS_TOKEN).toBeTruthy();
    const gh = new TsGitHubProjects({ token: process.env.PERSONAL_ACCESS_TOKEN! });
    const data = await gh.getProject(4486242);
    expect(data).toBeDefined();
  });

  it('rate limit', async () => {
    const gh = new TsGitHubProjects();
    const data = await gh.rateLimit();
    console.log(data);
    expect(data).toBeDefined();
  });
});