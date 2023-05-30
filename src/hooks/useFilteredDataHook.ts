import { useEffect, useState } from "react";
import { IDataItemProps, data } from "../constants/data";

const useFilteredDataHook = (filteredProp: string) => {
  const [list, setList] = useState<IDataItemProps[]>([]);

  useEffect(() => {
    if (filteredProp) {
      const updatedData = data.TrendingNow.filter(
        (item: IDataItemProps) =>
          item.Category.replace(/\s/g, "") === filteredProp.replace(/\s/g, "")
      );
      setList(updatedData);
    }
  }, [filteredProp]);

  return list;
};

export default useFilteredDataHook;
