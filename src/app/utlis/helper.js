
import axios from "axios";
export const makeRequest = async (
  url,
  method = "get",
  data = null,
  customHeaders = {}
) => {
  try {
    const config = {
      url,
      method,
      data,
      headers: {
        ...customHeaders
      }
      // params: {
      //   [queryParamName]: queryParamValue
      // }
    }
    const response = await axios(config)
    return response.data
  } catch (error) {
    console.error("Request Error:", error)
    throw error
  }
}
