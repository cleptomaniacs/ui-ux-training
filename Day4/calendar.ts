class Calendar {
  name: string;
  managerName: string;
  constructor(name: string, managerName: string) {
    this.name = name;
    this.managerName = managerName;
  }
  getLeaves(): void {}
  applyLeaves(): void {}
}

class TeamCalendar extends Calendar {
  managerName: string;
  month: string;
  approve(): void {}
  reject(): void {}
  displayAllTeamLeaves(): void {}
}
