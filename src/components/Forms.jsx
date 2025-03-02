import { useContext, useState } from "react";
import { IconLink } from "./Icons";
import Button from "./Button";
import { DataContext } from "../providers/DataProvider";
import { SnackbarContext } from "../providers/SnackbarProvider";
import { createLink } from "@/api/api";

const Forms = () => {
  const { links, updateLinks } = useContext(DataContext);
  const { setSnackbar } = useContext(SnackbarContext);
  const [loading, setLoading] = useState(false);
  const [inputLink, setInputLink] = useState("");

  const shortenLink = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const payload = { data: { url: inputLink } };
      const response = await createLink(payload);

      const object = {
        ...response?.data,
        hits: 0,
      };
      const newData = [object, ...links];

      updateLinks(newData);
      setLoading(false);
      setInputLink("");
      setSnackbar("successfully shorten your link");
    } catch (error) {
      setLoading(false);
      setSnackbar(error?.response?.data?.errors[0], "error");
      console.error("Error shortening URL:", error);
    }
  };

  const handleInput = (event) => {
    setInputLink(event.target.value);
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
          value={inputLink}
          onChange={handleInput}
          className="w-full text-text-primary text-sm rounded-lg p-2 ps-3 outline-none"
          placeholder="Paste a link to shorten"
          required
        />
      </div>
      <Button
        loading={loading}
        disabled={!inputLink || loading}
        intent={!inputLink ? "primary_disable" : "primary"}
        className="sm:w-[154px]"
      >
        Shorten Link
      </Button>
    </form>
  );
};

export default Forms;
