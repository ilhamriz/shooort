import { deleteApi, patchApi, postApi } from "./base";

export const createLink = (options) => postApi("/create", options);
export const deleteLink = (alias, options) =>
  deleteApi(`/alias/tinyurl.com/${alias}`, options);
export const archiveLink = (options) => patchApi("/archive", options);
