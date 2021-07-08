export class Client {

    public clients = [
        { name: "A", amount: 2 },
        { name: "B", amount: 4 },
        { name: "C", amount: 6 },
        { name: "D", amount: 8 },
    ]

    public id!: number;
    public name!: string;
    public amount!: number;

    constructor(name: string, amount: number) {

        if (amount > 0 && name !== '') {
            this.name = name;
            this.amount = amount;
            this.id = this.lastId();

            this.clients.push(this);
            alert('ok push');

        } else {
            this.error();
        }
    }

    private error(): string {
        return 'Check your data';
    }

    public toString(): string {
        return this.name + ' Quantity ' + this.amount;
    }

    lastId(): number {
        return this.id + 7;
    }
}

}