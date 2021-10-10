export class PageSelector {
    private selectedClass = "selected";
    private selectorContainer = "selector-container";

    constructor() {
        document.getElementById("selector-i")?.addEventListener("click", (e: Event) => this.Select(e.target as HTMLButtonElement, "#landing"));
        document.getElementById("selector-ii")?.addEventListener("click", (e: Event) => this.Select(e.target as HTMLButtonElement, "#about"));
        document.getElementById("selector-iii")?.addEventListener("click", (e: Event) => this.Select(e.target as HTMLButtonElement, "#dark-souls-checklist"));
        document.getElementById("selector-iv")?.addEventListener("click", (e: Event) => this.Select(e.target as HTMLButtonElement, "#contact"));
        window.addEventListener("hashchange", () => this.SelectFromRoute());

        this.SelectFromRoute();
    }

    Select(button: HTMLButtonElement, page: string) {
        window.location.href = page;
        this.UnselectAll();
        button.classList.add(this.selectedClass);
    }

    SelectFromRoute() {
        this.UnselectAll();
        const currentRoute = window.location.hash;

        switch (currentRoute) {
            case "":
            case "#landing":
                document.getElementById("selector-i")?.classList.add(this.selectedClass);
                break;
            case "#about":
                document.getElementById("selector-ii")?.classList.add(this.selectedClass);
                break;
            case "#dark-souls-checklist":
                document.getElementById("selector-iii")?.classList.add(this.selectedClass);
                break;
            case "#contact":
                document.getElementById("selector-iv")?.classList.add(this.selectedClass);
                break;
        }
    }

    UnselectAll() {
        const selectedItems = document.getElementById(this.selectorContainer)?.getElementsByClassName(this.selectedClass);
        if (selectedItems) {
            for (const item of selectedItems) {
                item.classList.remove(this.selectedClass);
            }
        }
    }
}