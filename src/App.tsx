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
import { Page, PageHeader } from "./components/Page";
import { DashboardCard } from "./components/DashboardCard";
import { AppBarChart } from "./components/AppBarChart";
import { AppRadialChart } from "./components/AppRadialChart";
import { TrendingUpIcon } from "lucide-react";
import { DashboardTable } from "./components/DashboardTable";


export const App = () => {
  return(
    <ThemeProvider defaultTheme="light">
      <SidebarProvider open={false}>
        <AppSidebar />

        <SidebarInset>
            <Header />

            <main>
              <Page>
                <PageHeader />

                <div className="grid gap-6 py-8 lg:grid-cols-[1fr_360px]">
                  <DashboardCard title="Vendor Breackdown" description="Keep track of vendors and their security challenge" buttonText="View full report"><AppBarChart /></DashboardCard>

                  <DashboardCard title="Vendor monitored" description="You re using 80% of avaliable spots." buttonText="Upgrade plan"> 
                    <div className=""> 
                      <AppRadialChart />

                      <div className="flex items-center gap-2">
                        <TrendingUpIcon  size={20} className="text-emerald-500 dark:text-emerald-500"/>

                        <span className="text-emerald-500 dark:text-emerald-500 font-medium">10%</span>
                      </div>
                    </div>

                    <div className="mt-6 lg:mt-8">
                      <p className="font-medium">
                        You ve almost reached your Limit.
                      </p>

                      <p className="text-muted-foreground">
                        You have used 80% of your avaliable spots. Upgrade your plan to add more.
                      </p>
                    </div>
                  </DashboardCard>
                </div>


                <DashboardTable />
              </Page>
            </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
};