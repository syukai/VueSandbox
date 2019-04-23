export default class YearMonth {
    private yyyy: number;
    private mm: number;

    constructor(yyyy: number, mm: number) {
        this.yyyy = yyyy;
        this.mm = mm;
    }

    prevMonth(): void {
        this.addMonth(-1);
    }
    nextMonth(): void {
        this.addMonth(1);
    }
    private addMonth(months: number): void {
        let nextYear: number = Number(this.yyyy);
        let nextMonth: number = Number(this.mm) + months;
        if(nextMonth === 13) {
            nextYear += 1;
            nextMonth = 1;
        } else if (nextMonth === 0) {
            nextYear -= 1;
            nextMonth = 12;
        }
        this.yyyy = nextYear;
        this.mm = nextMonth;
    }
}