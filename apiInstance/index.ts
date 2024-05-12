import { Filter, Job } from '@/constants/data';
import axios from 'axios';
import { app } from '@/lib/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const ApiConfig = {
    baseURL: 'https://jobpack-production.up.railway.app/api',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
};

const apiInstance = axios.create(ApiConfig);

// Fetch filters for the authenticated user
export const fetchFilters = async (userId : string | null) => {
    if (!userId) {
        throw new Error('User is not authenticated');
    }
    try {
        const response = await apiInstance.get(`/user/filters?userId=${userId}`);
        let data: Filter[] = response.data.map((filter: any) => {
            return {
                id: filter.id,
                keywords: filter.keywords,
                state: filter.state,
                experience: filter.experience,
                lastUpdated: filter.lastUpdated,
            };
        });
        return data;
    }
    catch (error) {
        console.error('Error fetching filters:', error);
        throw error;
    }
};

// Add a new filter for the authenticated user
export const addFilter = async (userId : string | null, filter: Filter) => {
    if (!userId) {
        throw new Error('User is not authenticated');
    }
    const response = await apiInstance.post(`/user/filters?userId=${userId}`, filter);
    return response.data;
};

// Delete a filter for the authenticated user
export const deleteFilter = async (userId : string | null, filterId: string) => {
    if (!userId) {
        throw new Error('User is not authenticated');
    }
    try {
        const response = await apiInstance.delete(`/user/filters?userId=${userId}&filterId=${filterId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting filter:', error);
        throw error;
    }
};

export const AddUser = async (userId: string | null, userName: string) => {
    if (!userId) {
        throw new Error('User is not authenticated');
    }
    const response = await apiInstance.post(`/user`, { userId, userName });
    return response.data;
}

export const fetchJobs = async (userId: string | null) => {
    if (!userId) {
        throw new Error('User is not authenticated');
    }
    try {
        const response = await apiInstance.get(`/user/jobs?userId=${userId}`);
        return response.data as Job[];
    } catch (error) {
        console.error('Error fetching jobs:', error);
        throw error;
    }
}


export const addToApplied = async (userId: string | null, jobId: string) => {
    if (!userId) {
        throw new Error('User is not authenticated');
    }
    const response = await apiInstance.post(`/user/applied?userId=${userId}&jobId=${jobId}`);
    return response.data;
}

export const fetchApplied = async (userId: string | null) => {
    if (!userId) {
        throw new Error('User is not authenticated');
    }
    const response = await apiInstance.get(`/user/applied?userId=${userId}`);
    return response.data;
}