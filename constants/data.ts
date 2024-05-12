import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";


export type Filter = {
  id: number;
  state: string;
  experience: string;
  keywords: string;
  lastUpdated: string;
};
export type Job = {
  id: string;
  jobUrl: string;
  title: string;
  company: string;
  location: string;
  description: string;
  site: string;
  jobUrlDirect: string;
};


export const filters: Filter[] = [
  {
    id: 1,
    state: "New York",
    experience: "5 years",
    keywords: "JavaScript, React, Node.js",
    lastUpdated: "2 hours ago",
  },
  {
    id: 2,
    state: "San Francisco",
    experience: "3 years",
    keywords: "Python, Django, Machine Learning",
    lastUpdated: "1 day ago",
  },
  {
    id: 3,
    state: "Chicago",
    experience: "7 years",
    keywords: "Java, Spring, Microservices",
    lastUpdated: "3 days ago",
  },
  {
    id: 4,
    state: "Austin",
    experience: "2 years",
    keywords: "Ruby, Rails, PostgreSQL",
    lastUpdated: "1 week ago",
  },
  {
    id: 5,
    state: "Seattle",
    experience: "4 years",
    keywords: "C#, .NET, Azure",
    lastUpdated: "2 weeks ago",
  }
];



export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
  {
    id: 11,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
  
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  state: string;
  city: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  // {
  //   title: "Dashboard",
  //   href: "/dashboard",
  //   icon: "dashboard",
  //   label: "Dashboard",
  // },
  {
    title: "Filters",
    href: "/dashboard/filter",
    icon: "profile",
    label: "profile",
  },
  {
    title: "Job Board",
    href: "/dashboard/jobBoard",
    icon: "user",
    label: "user",
  },
  // {
  //   title: "Employee",
  //   href: "/dashboard/employee",
  //   icon: "employee",
  //   label: "employee",
  // },
 
  {
    title: "Applications",
    href: "/dashboard/applications",
    icon: "kanban",
    label: "kanban",
  },
  
];
