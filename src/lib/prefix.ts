const basePath = process.env.NODE_ENV === "production" ? "/tao-brand" : "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
