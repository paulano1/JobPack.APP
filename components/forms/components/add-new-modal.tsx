"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import states from "states-us";
import { addFilter } from "@/apiInstance";
import { Filter } from "@/constants/data";
import { useContext } from "react";
import { UserContext } from "@/apiInstance/useAuth";
import { Country, State, City }  from 'country-state-city';
import FuzzySearch from 'fuzzy-search';

interface AddNewFilterProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (filterData: Filter) => void;
  loading: boolean;
}
const getUsCities = () => {
  const country = Country.getCountryByCode("US");
  
  return State.getStatesOfCountry(country?.isoCode).flatMap((state) =>
    //@ts-ignore
    City.getCitiesOfState(country?.isoCode, state.isoCode).map(
      (city) => `${city.name}, ${state.isoCode}`
    )
  );
};
const usCities = getUsCities();
const searcher = new FuzzySearch(usCities, [""], { caseSensitive: false });


export const AddNewFilter: React.FC<AddNewFilterProps> = ({
  isOpen,
  onClose,
  onSubmit,
  loading,
}) => {
  const user = useContext(UserContext);
  const [error, setError] = useState<string>("");
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    keywords: "",
    state: "",
    experience: "",
  });
  const [stateSuggestions, setstateSuggestions] = useState<string[]>([]);
  const cities = getUsCities();
  useEffect(() => {
    setError("");
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let filterData : Filter = {
      id: 1,
      keywords: formData.keywords,
      state: formData.state,
      experience: formData.experience,
      lastUpdated: ""
    };
    if(user === null) return;
    addFilter(user?.uid, filterData).catch((error) => {
      setError("Search Already Exists!");
    }).finally(() => {
      onSubmit(filterData);
      setFormData({
        keywords: "",
        state: "",
        experience: "",
      });
      onClose();
    }); 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handlestateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const stateInput = e.target.value.toLowerCase();
    const matchingCities = searcher.search(stateInput);
    setstateSuggestions(matchingCities.slice(0, 5));
    handleChange(e);
  };

  return (
    <Modal title="Add New Filter" isOpen={isOpen} onClose={onClose} description={""}>
      <div className="text-red-500 text-sm">{error}</div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="keywords" className="block mb-1">
            Keywords ( comma separated )
          </label>
          <input
            id="keywords"
            name="keywords"
            type="text"
            value={formData.keywords}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="state" className="block mb-1">
            City, US only ( Leave blank for all States )
          </label>
          <input
            id="state"
            name="state"
            type="text"
            value={formData.state}
            onChange={handlestateChange}
            list="stateList"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
          <datalist id="stateList">
            {stateSuggestions.map((state) => (
              <option key={state} value={state} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="experience" className="block mb-1">
            Experience
          </label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border border-gray -300 rounded-md px-3 py-2"
          >
            <option value="">Select Experience</option>
            <option value="entry-level">Entry Level</option>
            <option value="mid-level">Mid Level</option>
            <option value="senior-level">Senior Level</option>
          </select>
        </div>
        <div className="pt-6 space-x-2 flex items-center justify-end w-full">
          
          <Button disabled={loading} variant="default" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
};