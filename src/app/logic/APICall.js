import { Octokit } from "octokit";

export async function fetchCommitsData(repoReference) {
    const octokit = new Octokit({auth: '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'})
  
      try {
        const fetchCommitsResponse = await octokit.request('GET /repos/{owner}/{repo}/stats/contributors', {
          owner: 'EricSalat',
          repo: repoReference,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        })
  
        return fetchCommitsResponse.data
  
      } catch (error) {
        console.error("Error al realizar la llamada a la API:", error);
        throw error;
      }
  }