import axios from "axios";
import { useContext, useState } from "react";
import { IconLink } from "./Icons";
import Button from "./Button";
import { DataContext } from "../providers/DataProvider";
import { SnackbarContext } from "../providers/SnackbarProvider";

const Forms = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { links, setLinks } = useContext(DataContext);
  const { setSnackbar } = useContext(SnackbarContext);
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");

  const shortenLink = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const payload = { url: link };
      const response = await axios.post(`${API_URL}/create`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      const object = {
        ...response?.data?.data,
        hit: 0,
      };
      const newData = [...links, object];

      setLinks(newData);
      setLoading(false);
      setLink("");
      setSnackbar("successfully shorten your link");
      localStorage.setItem("links", JSON.stringify(newData));
    } catch (error) {
      setLoading(false);
      setSnackbar(error?.response?.data?.errors[0], "error");
      console.error("Error shortening URL:", error);
    }
  };

  const handleInput = (event) => {
    setLink(event.target.value);
    event.preventDefault();
  };

  return (
    <form
      onSubmit={shortenLink}
      className="flex flex-col min-[500px]:flex-row justify-between gap-6 w-full max-w-[600px] bg-card p-2 rounded-2xl"
    >
      <div className="relative flex-auto flex min-h-11">
        <div className="flex items-center ps-3 pointer-events-none">
          <IconLink />
        </div>
        <input
          type="url"
          value={link}
          onChange={handleInput}
          className="w-full text-text-primary text-sm rounded-lg p-2 ps-3 outline-none"
          placeholder="Paste a link to shorten"
          required
        />
      </div>
      <Button
        loading={loading}
        disabled={!link}
        intent={!link ? "primary_disable" : "primary"}
        className="sm:w-[154px]"
      >
        Shorten Link
      </Button>
    </form>
  );
};

export default Forms;
