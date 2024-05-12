"use client";
import { fetchFilters, fetchJobs } from "@/apiInstance";
import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/user-tables/client";
import { Filter, Job, users } from "@/constants/data";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/lib/firebase";
import { useState, useEffect } from "react";
import { UserContext } from "@/apiInstance/useAuth";

const breadcrumbItems = [{ title: "Job Board", link: "/dashboard/jobBoard" }];
export default function Page() {
  const [data, setData] = useState<Job[]>([]);
  const  [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>();
  const auth = getAuth(app);


  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //@ts-ignore
      setUser(user);
    });
    
    return () => unsubscribe();
  }, [auth]);
  useEffect(() => {
    if(user){
      console.log(user);
      fetchJobs(user?.uid).then((res) => {
        setData(res);
      });
    }
  }, [user]);
  return (
    user && data? (
    <>
    <UserContext.Provider value={user}>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={data} setData={setData}/>
      </div>
    </UserContext.Provider>
    </>
  ) : (
    <div>Loading...</div>
  )

  );
}
