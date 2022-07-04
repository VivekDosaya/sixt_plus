import { useEffect } from "react";
import { allDocuments } from "firebase-setup/queries";
import { COLLECTION_NAMES } from "enums/collectionNames";

const useInitialFiltersLoad = (
  setListedProperties,
  setMinimumPercent,
  setMaximumPercent,
  setMinimumPrice,
  setMaximumPrice,
  setPriceRange,
  setRentalYieldRange,
  setPlatformList
) => {
  return useEffect(() => {
    allDocuments(COLLECTION_NAMES.LISTINGS).then((res) => {
      let list = res.docs.map((doc) => {
        return { ...doc.data(), distanceFromUser: 0 };
      });
      setListedProperties(list);
      let minPrice = Number.MAX_VALUE;
      let maxPrice = Number.MIN_VALUE;
      let minPercent = Number.MAX_VALUE;
      let maxPercent = Number.MIN_VALUE;
      const platformMap = {};

      list.forEach((val) => {
        let price = val?.details?.total_tokens || 0;
        let rentPercent = val.rent || 0;
        minPrice = Math.min(minPrice, price);
        maxPrice = Math.max(maxPrice, price);
        minPercent = Math.min(minPercent, rentPercent);
        maxPercent = Math.max(maxPercent, rentPercent);
        if (val["platform"]) {
          platformMap[val["platform"]] = 1;
        }
      });
      setMinimumPercent(minPercent);
      setMaximumPercent(maxPercent);
      setMinimumPrice(minPrice);
      setMaximumPrice(maxPrice);
      setPriceRange([minPrice, maxPrice]);
      setRentalYieldRange([minPercent, maxPercent]);
      setPlatformList(Object.keys(platformMap));
    });
  }, []);
};

export default useInitialFiltersLoad;
