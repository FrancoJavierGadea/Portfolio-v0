
export const USERNAME = 'FrancoJavierGadea';

export const GH_API = {

    repos: `https://api.github.com/users/${USERNAME}/repos`,

    starred: `https://api.github.com/users/${USERNAME}/starred`,

    raw: (repo_name, file = 'readme.md') => {

        return `https://raw.githubusercontent.com/${USERNAME}/${repo_name}/main/${file}`;
    }
}


