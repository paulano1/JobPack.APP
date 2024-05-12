"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Filter, User } from "@/constants/data";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "../components/columns";
import { AddNewFilter } from "../components/add-new-modal";
import { useState } from "react";
import { addFilter } from "@/apiInstance";

interface ProductsClientProps {
  setData: (data: Filter[]) => void;
  data: Filter[];
}

export const FilterComponent: React.FC<ProductsClientProps> = ({ data, setData }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);




  return (
    <>
      <AddNewFilter
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={(filterData) => {
          setData([...data, filterData]);
        }
        }
        loading={loading}
      />
      <div className="flex items-start justify-between">
        <Heading
          title={`Filters (${data.length})`}
          description="Manage all your filters here"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => setIsOpen(true)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="keywords" columns={columns} data={data} />
    </>
  );
};
