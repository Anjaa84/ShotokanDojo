import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { InsertContactMessage } from "@shared/schema";

export function useSendMessage() {
  const mutation = useMutation({
    mutationFn: async (contactData: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", contactData);
      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch relevant queries if needed
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
    },
  });

  return {
    sendMessage: mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
