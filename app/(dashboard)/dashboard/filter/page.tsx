"use client";
import BreadCrumb from "@/components/breadcrumb";
import { FilterComponent } from "@/components/forms/user-profile-stepper/filter-component";
import { Filter, filters } from "@/constants/data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchFilters } from "@/apiInstance";
import { createContext, useEffect, useState } from "react";

import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/lib/firebase";
import { UserContext } from "@/apiInstance/useAuth";


const breadcrumbItems = [{ title: "Filters", link: "/dashboard/filter" }];
export default function Page() {
  const [data, setData] = useState<Filter[]>([]);
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
      fetchFilters(user?.uid).then((res) => {
        setData(res);
      });
    }
  }, [user]);
  return (
    loading && user ? (
      <UserContext.Provider value={user}>
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <FilterComponent data={data} setData={setData} />
      </div>
    </ScrollArea>
    </UserContext.Provider>
  ) : (
    <div>Loading...</div>
  )

  );
}
