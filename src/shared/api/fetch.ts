import { URL_BASE } from "../constants/url";

async function api<T>(url: string): Promise<T> {
  return fetch(`${URL_BASE}/${url}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<{ data: T }>;
    })
    .then((data) => {
      return data.data;
    })
    .catch((error: Error) => {
      console.log(error); // todo: display error message
      throw error; /* <-- rethrow the error so consumer can still catch it */
    });
}
export default api;
