import { useContext, useEffect, useState } from "react";
import { DataContext } from "../providers/DataProvider";
import moment from "moment";
import Action from "./Action";
import { IconCalendar, IconCopy, IconDelete } from "./Icons";
import { SnackbarContext } from "../providers/SnackbarProvider";
import { ConfirmationContext } from "@/providers/ConfirmationProvider";

const ListItems = () => {
  const { API_URL, API_KEY, links } = useContext(DataContext);
  const { setSnackbar } = useContext(SnackbarContext);
  const { setConfirmation } = useContext(ConfirmationContext);

  const copyURL = (url) => {
    navigator.clipboard.writeText(url);
    setSnackbar("successfully copied");
  };

  const confirmDelete = () => {
    setConfirmation({
      open: true,
      title: "Delete link?",
      caption:
        "This action cannot be undone. This will permanently delete your link.",
      buttonText: ["Cancel", "Delete Link"],
      confirmCallback: () => deleteData(),
    });
  };

  const deleteData = () => {
    console.log("deleted");
    setConfirmation((state) => ({ ...state, open: false }));
    setSnackbar("successfully delete link");
    // TODO: API DELETE
  };

  return (
    <div className="w-full max-w-[750px] flex flex-col gap-4">
      {links.length > 0
        ? links.map((link) => (
            <div
              key={link?.alias}
              className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 bg-card rounded-lg"
            >
              <div className="flex-auto flex flex-col min-[425px]:flex-row gap-x-4 gap-y-2">
                <div className="w-fit h-fit p-1 rounded-full border-[1px] border-gray-400">
                  <img
                    src={`https://s2.googleusercontent.com/s2/favicons?sz=40&domain=${link?.url}`}
                    className="w-6 md:w-8 h-6 md:h-8 min-w-6 rounded-full"
                    alt="Website Icon"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href={link?.tiny_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-blue-600 font-semibold hover:underline line-clamp-1 break-all"
                  >
                    shooort/{link?.alias}
                  </a>
                  <a
                    href={link?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline line-clamp-1 break-all"
                  >
                    {link?.url}
                  </a>
                  <div className="mt-6 flex items-center gap-1 text-xs">
                    <div>
                      <IconCalendar />
                    </div>
                    <span>
                      {moment(link?.created_at).format("MMM DD, YYYY")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 self-end sm:self-auto">
                <Action
                  name="Copy"
                  icon={<IconCopy />}
                  onClick={() => copyURL(link?.tiny_url)}
                />
                <Action
                  name="Delete"
                  icon={<IconDelete />}
                  intent="secondary"
                  onClick={() => confirmDelete()}
                />
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default ListItems;
