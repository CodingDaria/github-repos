export interface Repo {
  name: string;
  language: string;
  updated_at: string;
  stargazers_count: number;

}

export interface RepoInfo extends Repo {
  issues_url: string;
  pulls_url: string;
  contributors?: any[];
}
