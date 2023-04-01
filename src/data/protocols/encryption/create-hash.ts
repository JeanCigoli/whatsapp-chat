export interface CreateHash {
  hash(params: CreateHash.Params): CreateHash.Result;
}

export namespace CreateHash {
  export type Params = string;
  export type Result = Promise<string>;
}
