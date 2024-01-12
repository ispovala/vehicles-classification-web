import { URL_BASE } from "../constants/url";
import { VehicleType } from "../types/vehicles.type";

async function api(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  vehicle?: string
): Promise<VehicleType | Error> {
  return fetch(`${URL_BASE}/${url}`, {
    method,
    body: vehicle,
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<{ classification: VehicleType }>;
    })
    .then((data) => {
      return data.classification;
    })
    .catch(() => {
      throw new Error("Error");
    });
}
export default api;
