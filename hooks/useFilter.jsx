import { useContext } from "react";
import FiltersContext from "../context/filter";

const useFilters = () => {
    return useContext(FiltersContext)
}

export default useFilters