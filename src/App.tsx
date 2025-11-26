/** 
 * @copyright 2025 Keinner David
 * @license Apache-2.0
*/

/**
 * Components
 */
import { ThemeProvider } from "./components/ThemeProvider";
import { SidebarProvider, SidebarInset } from "./components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
import { Header } from "./components/Header";
import { Page } from "./components/Page";


export const App = () => {
  return(
    <ThemeProvider defaultTheme="light">
      <SidebarProvider open={false}>
        <AppSidebar />

        <SidebarInset>
            <Header />

            <main>
              <Page></Page>
            </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
};