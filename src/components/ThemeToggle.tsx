/** 
 * @copyright 2025 Keinner David
 * @license Apache-2.0
*/

/**
 * Components
 */
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"; 

/**
 * Hooks
 */
import { useTheme } from "./ThemeProvider";

/**
 * Assets
 */
import { MoonIcon, SunIcon, MonitorIcon, CheckIcon } from "lucide-react";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();


    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle Theme"> 
                    <SunIcon className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" /> 
                    <MoonIcon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" /> 
                    </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                        <SunIcon />

                        <span>Light</span>


                        {theme === "light" && <CheckIcon className="ms-auto" />}
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                        <MoonIcon />

                        <span>dark</span>


                        {theme === "dark" && <CheckIcon className="ms-auto" />}
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => setTheme("system")}>
                        <MonitorIcon />

                        <span>system</span>


                        {theme === "system" && <CheckIcon className="ms-auto" />}
                    </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}