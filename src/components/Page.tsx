/** 
 * @copyright 2025 Keinner David
 * @license Apache-2.0
*/

/**
 * Component
 */
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";


/** 
 * Assets
*/
import { SearchIcon, Settings2Icon, DownloadIcon } from "lucide-react";


export const Page = ({ children } : React.PropsWithChildren) => {
return (
    <div className="px-4 py-8">
        {children}
    </div>
)
}