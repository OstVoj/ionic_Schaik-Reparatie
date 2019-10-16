module Core {
    export class WizardHistory {
        private static historyList: Array<string> = [];


        public static push(key: string): void {
            this.historyList.push(key);
        }

        public static pop(): string {
            return this.historyList.pop();
        }

        public static peek(): string {
            return this.historyList[this.historyList.length - 1]
        }

        public static get(): Array<string> {
            return this.historyList.slice(0);
        }

        public static reset(): void {
            this.historyList = [];
        }
    }
}