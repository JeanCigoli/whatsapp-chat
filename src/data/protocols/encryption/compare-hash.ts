export interface CompareHash {
  compare(params: CompareHash.Params): CompareHash.Result;
}

export namespace CompareHash {
  export type Params = { plainText: string; encrypted: string };
  export type Result = Promise<boolean>;
}
