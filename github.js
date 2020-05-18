class Github {
    constructor() {
        this.client_id = '162ea634b8b4e90b0195';
        this.client_secret = '8af063d0e122bcadb1c67de96eda87f96433c612';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${ this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?
        per_page=${this.repos_count}&sort=${this.repos_sort}
        &client_id=${this.client_id}&client_secret=${ this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}