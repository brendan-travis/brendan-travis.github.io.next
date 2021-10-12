export class AnimationManager {
    private animationClass = "animate";
    private animationDelay = 500;

    constructor() {
        window.addEventListener("hashchange", () => this.SetAnimationsForCurrentPage());
        window.addEventListener("load", () => this.SetAnimationsForCurrentPage(0));
    }

    SetAnimationsForCurrentPage(animationDelay?: number) {
        const currentHash = window.location.hash;

        switch (currentHash) {
            case "#about":
                this.RemoveFrameAnimations("about");
                setTimeout(() => this.ApplyFrameAnimations("about"), animationDelay ?? this.animationDelay);
                break;
            case "#dark-souls-checklist":
                this.RemoveFrameAnimations("dark-souls-checklist");
                setTimeout(() => this.ApplyFrameAnimations("dark-souls-checklist"), animationDelay ?? this.animationDelay);
                break;
            case "#contact":
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