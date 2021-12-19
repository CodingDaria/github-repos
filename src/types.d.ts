export interface Repo {
  name: string;
  language: string;
  updated_at: string;
  stargazers_count: number;
}

export interface RepoOwner {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface RepoInfo extends Repo {
  issues?: any[];
  pulls?: any[];
  contributors?: any[];
  owner: RepoOwner | null;
  html_url: string;
  description: string;
  id: number;
}
