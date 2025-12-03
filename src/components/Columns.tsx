/** 
 * @copyright 2025 Keinner David
 * @license Apache-2.0
*/

/**
 * Componets
 */
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import Avatar from "react-avatar";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

/**
 * Assets
 */
import { ArrowDownIcon, ArrowUpIcon, Edit2Icon, Trash2Icon } from "lucide-react";

/**
 * Types
 */
import type { ColumnDef } from "@tanstack/react-table";

type VendorCategories = 
    | "Active"
    | "Inactive"
    | "Database access"
    | "Admin"
    | "Salesforce"
    | "Business data"
    | "Customer data"
    | "Financials"
    | "SOC2"
    | "Legal";

export type Vendor = {
    src: string;
    name: string;
    website: string;
    rating: number;
    ratingGrowthPercent: number;
    lastAssessed: string;
    categories: VendorCategories[];
}

export const columns: ColumnDef<Vendor>[] = [
    {
        id: 'select',
        header: ({ table }) => (<Checkbox checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select All" />),
        cell: ({ row }) => (<Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />
    ),
      enableSorting: false,
      enableHiding: false,
    },
    {
        accessorKey: "name",
        header:  ({ column }) => (
            <div className="flex items-center gap-2">
                <span>Vendor</span>

                <Button variant="ghost" size="icon-sm" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    {column.getIsSorted() === 'desc' ? (
                        <ArrowUpIcon />
                    ) : (
                        <ArrowDownIcon />
                    )}
                </Button>
            </div>
        ),
        cell: ({ row }) => {
            const vendor = row.original;
            return (
                <div className="flex items-center gap-3 2xl:min-w-[360px]">
                    <Avatar src={vendor.src} size="40px" round />


                    <div>
                        <h3 className="font-semibold">
                            {vendor.name}
                        </h3>

                        <p className="text-mute-foreground">{vendor.website}</p>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "rating",
        header: "Rating",
        cell: ({ row }) => {
            const rating = row.original.rating;

            return (
                <div className="flex items-center gap-3">
                    <Progress value={rating} className="min-w-24 xl:min-w-48" />

                    <p className="font-semibold max-xl:hidden">{rating}</p>
                </div>
            )
        }
    },
    {
        id: 'ratingGrowth',
        cell: ({ row }) => {
            const ratigGrowthPercent = row.original.ratingGrowthPercent;

            return (
                <Badge variant="outline" >
                    {ratigGrowthPercent > 0 ? (
                        <ArrowUpIcon className="text-emerald-400" />
                    ) : (
                        <ArrowDownIcon className="text-red-600" />
                    )}
                    {ratigGrowthPercent}%
                </Badge>
            )
        }
    },
    {
        accessorKey: "lastAssessed",
        header: "Last assessed",
        cell: ({ row }) => {
            <div className="text-muted-foreground">
                {row.original.lastAssessed}
            </div>
        }
    },
    {
        accessorKey: "categories",
        header: "Categories",
        cell: ({ row }) => {
            const categories = row.original.categories;


            return (
                <div className="flex flex-wrap gap-2">
                    {categories.map((item, index) => {
                        return (
                            index < 3 && (
                                <Badge key={item} variant='outline' className="gap-1.5">
                                    {item === 'Active' && (
                                        <div className="size-1.5 bg-emerald-600 rounded-full">

                                        </div>
                                    )}

                                    {item === 'Inactive' && (
                                        <div className="size-1.5 bg-muted-foreground rounded-full">

                                        </div>
                                    )}


                                    {item}
                                </Badge>
                            )
                        )
                    })}

                    {categories.length > 3 && (
                        <Badge variant='outline'>+{categories.length - 3}</Badge>
                    )}
                </div>
            )
        }
    },
]