import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

import toast from "react-hot-toast";
export function useDeleteCabin() {
  const queryClient = useQueryClient();
  //useMutation to delete data on the supabase db
  // and call invalidateQueries on the react query cache to make it invalid
  // and cause the refresh of the data when
  // a cabin is successfully deleted
  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteCabin };
}
