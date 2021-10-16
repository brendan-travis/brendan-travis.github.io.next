export class AnimationManager {
    private animationClass = "animate";
    private animationDelay = 500;

    constructor() {
        window.addEventListener("hashchange", () => this.SetAnimationsForCurrentPage());
        window.addEventListener("load", () => this.SetAnimationsForCurrentPage(0));
    }

    SetAnimationsForCurrentPage(animationDelay?: number) {
        const currentHash = window.location.hash;
        document.getElementsByClassName("selected-section")[0]?.classList.remove("selected-section");

        switch (currentHash) {
            case "":
            case "#landing":
                document.getElementById("landing")?.classList.add("selected-section");
                break;
            case "#about":
                document.getElementById("about")?.classList.add("selected-section");
                this.RemoveFrameAnimations("about");
                setTimeout(() => this.ApplyFrameAnimations("about"), animationDelay ?? this.animationDelay);
                break;
            case "#dark-souls-checklist":
                document.getElementById("dark-souls-checklist")?.classList.add("selected-section");
                this.RemoveFrameAnimations("dark-souls-checklist");
                setTimeout(() => this.ApplyFrameAnimations("dark-souls-checklist"), animationDelay ?? this.animationDelay);
                break;
            case "#contact":
                document.getElementById("contact")?.classList.add("selected-section");
                this.RemoveFrameAnimations("contact");
                setTimeout(() => this.ApplyFrameAnimations("contact"), animationDelay ?? this.animationDelay);
                break;
        }
    }

    RemoveFrameAnimations(sectionId: string) {
        const section = document.getElementById(sectionId);

        section?.getElementsByClassName("top-frame")[0]?.classList.remove(this.animationClass);
        section?.getElementsByClassName("bottom-frame")[0]?.classList.remove(this.animationClass);
        section?.getElementsByClassName("left-frame")[0]?.classList.remove(this.animationClass);
        section?.getElementsByClassName("right-frame")[0]?.classList.remove(this.animationClass);
    }

    ApplyFrameAnimations(sectionId: string) {
        const section = document.getElementById(sectionId);

        section?.getElementsByClassName("top-frame")[0]?.classList.add(this.animationClass);
        section?.getElementsByClassName("bottom-frame")[0]?.classList.add(this.animationClass);
        section?.getElementsByClassName("left-frame")[0]?.classList.add(this.animationClass);
        section?.getElementsByClassName("right-frame")[0]?.classList.add(this.animationClass);
    }
}