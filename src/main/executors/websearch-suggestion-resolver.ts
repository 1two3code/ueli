import axios from "axios";

export default function getWebearchSuggestions(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
}
