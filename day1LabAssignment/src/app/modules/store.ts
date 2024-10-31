export class Store {
    name: string;
    branches: string[];
    logoUrl: string;

    constructor(name: string, branches: string[], logoUrl: string) {
        this.name = name;
        this.branches = branches;
        this.logoUrl = logoUrl;
    }
}
