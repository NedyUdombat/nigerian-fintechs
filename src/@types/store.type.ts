export type Dispatch = (args: { type: string; payload?: unknown }) => {
  type: string;
  payload?: unknown;
};
