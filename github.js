class Github {
    constructor() {
        this.client_id = '6ecf7e7fcc575c3edc37';
        this.client_secret = '5efba17454e89e4b2e1efc729ae4735c8853e328';
    }

    async getUser(user) {
        const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
        
    }
}   