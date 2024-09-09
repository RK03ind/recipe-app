import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

const useGetItems = (url: string) => {
  return useQuery({
    queryKey: [url],
    queryFn: () => fetchData(url),
  });
};

export default useGetItems;
