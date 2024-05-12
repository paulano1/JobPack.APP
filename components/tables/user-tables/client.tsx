"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Job, User } from "@/constants/data";
import { Building2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ConfirmModal } from "./confirm-application-modal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ChevronRight } from "lucide-react"

interface ProductsClientProps {
  data: Job[];
  setData: (data: Job[]) => void;
}

import Link from "next/link"
import { JSX, SVGProps, use, useContext, useEffect, useState } from "react";
import { addToApplied } from "@/apiInstance";
import { UserContext } from "@/apiInstance/useAuth";

export default function Component({job, openModal} : {job: Job, openModal: () => void}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-black">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
        <div className="flex items-center mb-4">
        <Building2 />
          <span className="text-gray-500 dark:text-gray-400 pl-2">{job.company}</span>
        </div>
        <div className="flex items-center mb-4">
          <LocateIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
          <span className="text-gray-500 dark:text-gray-400">{job.location}</span>
        </div>
        <ScrollArea className="max-h-[60vh] overflow-auto pt-5 pr-5">
        <p className="text-gray-600 dark:text-gray-300 mb-4" dangerouslySetInnerHTML={{__html: job.description}}>
        </p>
        </ScrollArea>
        <Link 
          className="inline-flex items-center text-primary hover:underline pt-7" 
          href={job.jobUrlDirect && job.jobUrlDirect !== "NaN" ? job.jobUrlDirect : job.jobUrl ? job.jobUrl : "#"} 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={openModal}
        >
          <Button>
            View Job <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>

      </div>
    </div>
  )
}


function LocateIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


export const UserClient: React.FC<ProductsClientProps> = ({ data, setData }) => {
  const [currentJob, setCurrentJob] = useState<Job >();
  const [isOpen, setIsOpen] = useState(false);
  const user = useContext(UserContext);

  const router = useRouter();
  useEffect(() => {
    setCurrentJob(data[0]);
  }, [data]);

  const updateJob = async (job: Job) => {
    if (!user) return;
    const newData = data.filter((item) => item.id !== job.id);
    try{
      await addToApplied(user?.uid, job.id);
      setData(newData);
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    
    <div className="flex">
      <ConfirmModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={async () => {
          if (!currentJob) return;
          await updateJob(currentJob);
          setIsOpen(false);
        }}
        loading={false}
      />
      <div className="w-1/2 ">
        <div className="flex items-start justify-between">
          <Heading title={`Jobs (${data.length})`} description="List of Jobs that were found" />
          <Button
            className="text-xs md:text-sm"
            onClick={() => router.push(`/dashboard/filter`)}
            >
            <Plus className="mr-2 h-4 w-4" /> Search Filter
        </Button>
      </div>
        
        <ScrollArea className="max-h-[80vh] overflow-auto pt-5 pr-5">
          {data.map((job) => (
            <Card key={job.id} className="flex items-center justify-between mb-4" onClick={()=>{
              setCurrentJob(job);
            }}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardTitle> {job.company}</CardTitle>
                <CardDescription>{job.location}</CardDescription>
                
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="flex justify-between">
              {currentJob && currentJob.id === job.id && (
                     <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                   </span>
                  )}
              </CardFooter>
            </Card>
          ))}
        </ScrollArea>
      </div>
      
      <div className="w-1/2 ml-4">
      {currentJob ? <Component job={currentJob} openModal={()=>{
        setIsOpen(true);
      }}/> : null}
      </div>
    </div>
  );
};

