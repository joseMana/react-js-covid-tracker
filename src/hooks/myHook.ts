import { useEffect, useState } from "react";
import Country from "../models/Country";

let selectedCountries: Country[] = [];

const useReview = () => {
  const [newSelectedCountryList, setNewSelectedCountryList] = useState<Country[]>(selectedCountries);
  const [avgRating, setAvgRating] = useState<string>("");

  useEffect(() => {
    if(newSelectedCountryList.length > 0)
    {
      const computedRating = newSelectedCountryList[newSelectedCountryList.length-1].countryCode;
      setAvgRating(computedRating);
    }
  }, [newSelectedCountryList]);

  return {
    newSelectedCountryList,
    avgRating,
    addCountry(country: Country) {
      setNewSelectedCountryList([...newSelectedCountryList, country]);
    },
    removeCountry(id: string) {
      // const reviewListCopy = [...newReviewList];
      // const reviewIdx = reviewListCopy.findIndex((r: Review) => r.id === id);
      // reviewListCopy.splice(reviewIdx, 1);
      // setNewCountryList(reviewListCopy);
    },
  };
};

export default useReview;
