class Github {
    constructor() {
        this.client_id = '6ecf7e7fcc575c3edc37';
        this.client_secret = '0e044140302dbb39d6541e1b6791f8c4cd2e1692';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}   