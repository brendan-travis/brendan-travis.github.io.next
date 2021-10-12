export class PageSelector {
    private clickableClass = "clickable";
    private selectedClass = "selected";
    private selectorContainer = "selector-container";

    constructor() {
        window.addEventListener("hashchange", () => this.SelectFromRoute());
        this.SelectFromRoute();
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