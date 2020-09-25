export class Quote {
    showDescription: boolean;
    upVote: number;
    downVote: number;
    constructor(public id: number, public name: string, public author: string, public creationDate: Date) {
        this.showDescription = false;
        this.upVote = 0;
        this.downVote = 0;
    }
}