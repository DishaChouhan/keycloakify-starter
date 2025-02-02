import { useMemo } from "react";
import type { KcContext } from "./KcContext";

export function useCustomCss(kcContext: KcContext) {
    useMemo(() => {
        switch (kcContext.themeName) {
            case "my-app-1":
                import("./main-1.css");
                break;
            case "my-app-2":
                import("./main-2.css");
                break;
            default:
                import("./main.css");
        }
    }, []);
}
