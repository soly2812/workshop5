export type NodeState = {
  killed: boolean;
  x: Value | null;
  decided: boolean | null;
  k: number | null;
  receivedValues: {} | null;
};

export type Value = 0 | 1 | "?";
