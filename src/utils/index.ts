export const kebabCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/'/g, "") // Remove apostrophes
    .replace(/[^a-z0-9]+/g, "-") // Replace spaces and special characters with hyphens
    .replace(/(^-|-$)/g, "") // Remove leading and trailing hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
