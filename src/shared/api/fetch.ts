import { URL_BASE } from "../constants/url";

async function api(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  vehicle?: string
): Promise<string | ErrorConstructor> {
  return fetch(`${URL_BASE}/${url}`, {
    method,
    body: vehicle,
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<{ classification: string }>;
    })
    .then((data) => {
      return data.classification;
    })
    .catch((error: Error) => {
      console.log(error); // todo: display error message
      return Error; /* <-- rethrow the error so consumer can still catch it */
    });
}
export default api;
