import { URL_BASE } from "../constants/url";
import { VehicleType } from "../types/vehicles.type";

async function api(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  vehicle?: string
): Promise<VehicleType | Error> {
  return fetch(`${URL_BASE}/${url}`, {
    method,
    body: JSON.stringify({ image_b64: vehicle }),
    headers: { "Content-Type": "application/json" }
  })
    .then((response) => {
      console.log(response.ok);
      if (!response.ok) {
        console.log("error", response.statusText);
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(
      (data) => (data.prediction as string).toLocaleLowerCase() as VehicleType
    )
    .catch((error) => {
      throw new Error(error.message);
    });
}
export default api;
