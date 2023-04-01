import { CreateHash, CompareHash } from '@/data/protocols/encryption';
import bcrypt from 'bcrypt';

export class Hash implements CreateHash, CompareHash {
  compare(params: CompareHash.Params): CompareHash.Result {
    return bcrypt.compare(params.plainText, params.encrypted);
  }

  hash(params: string): CreateHash.Result {
    return bcrypt.hash(params, 10);
  }
}
