import BreadCrumb from "@/components/breadcrumb";
import { KanbanBoard } from "@/components/kanban/kanban-board";
import NewTaskDialog from "@/components/kanban/new-task-dialog";
import { Heading } from "@/components/ui/heading";

const breadcrumbItems = [{ title: "Applications", link: "/dashboard/appliedJobs" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading title={`Applications`} description="Update the status of your application" />
          {/* <NewTaskDialog /> */}
        </div>
        {/* <KanbanBoard /> */}
        {/* Add page under construction */}
        <div className="flex items-center justify-center h-96">
          <p className="text-gray-400 text-2xl flex items-center space-x-2">
            Page under construction
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-construction"
            >
              <rect x="2" y="6" width="20" height="8" rx="1" />
              <path d="M17 14v7" />
              <path d="M7 14v7" />
              <path d="M17 3v3" />
              <path d="M7 3v3" />
              <path d="M10 14L2.3 6.3" />
              <path d="m14 6 7.7 7.7" />
              <path d="m8 6 8 8" />
            </svg>
          </p>
        </div>

      </div>
    </>
  );
}
