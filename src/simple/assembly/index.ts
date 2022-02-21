import { storage, Context, u128, ContractPromiseBatch, logging } from "near-sdk-as"

// read the given key from account (contract) storage
export function readString(key: string): string|null {
  if (storage.hasKey(key)) {
    let value:string|null = storage.getString(key);
    return (value !== null)? value : "";
  } else {
    return "";
  }
}

export function readI32(key: string): i32 {
  return storage.getPrimitive<i32>(key, 0);
}

export function readU32(key: string): u32 {
  return storage.getPrimitive<u32>(key, 0);
}

export function readI64(key: string): i64 {
  return storage.getPrimitive<i64>(key, 0);
}

export function readU64(key: string): u64 {
  return storage.getPrimitive<u64>(key, 0);
}

// todo: readF32() and readF64()


export function readU128(key: string): u128|null {
  return storage.get<u128>(key);
}


/** unknonwn doesn't work here.  ERROR TS2304: Cannot find name 'unknown'. */
// export function readSome(key:string):unknown {
//   return storage.getSome(key);
// }

// export function read(key: string):unknown {
//   if (storage.hasKey(key)) {
//     return storage.get(key);
//   } 
// } 


/** 
 * write to contract storage
 */ 
export function writeString(key: string, value: string): string {
  storage.set(key, value)
  return `✅ Data saved. ( ${storageReport()} )`
}

export function writeNumber(key: string, value: number): string {
  storage.set(key, value)
  return `✅ Data saved. ( ${storageReport()} )`
}

export function writeI32(key:string, value:i32): string {
  storage.set<i32>(key, value);
  return `✅ Data saved. ( ${storageReport()} )`;
}

export function writeU32(key:string, value:u32): string {
  storage.set<u32>(key, value);
  return `✅ Data saved. ( ${storageReport()} )`;
}

export function writeU64(key:string, value:u64): string {
  storage.set<u64>(key, value);
  return `✅ Data saved. ( ${storageReport()} )`;
}

export function writeF32(key:string, value:f32): string {
  storage.set<f32>(key, value);
  return `✅ Data saved. ( ${storageReport()} )`;
}

export function writeF64(key:string, value:f64): string {
  storage.set<f64>(key, value);
  return `✅ Data saved. ( ${storageReport()} )`;
}

export function writeU128(key:string, value:u128): string {
  storage.set<u128>(key, value);
  return `✅ Data saved. ( ${storageReport()} )`;
}


/**
 * unfortunately, assemblyscript does not seem to have `any` and `unknown` like typescript.  (ERROR TS2304: Cannot find name 'any'.)
 * otherwise, we would be able to write something like this.
 */
// export function write(key: string, value: any): string {
//   storage.set(key, value)
//   return `✅ Data saved. ( ${storageReport()} )`
// }

/** 
 * unfortunately, this does not work, although i would have expected generic to work
 */
// export function writeGeneric<Type>(key:string, value:Type):string {
//   storage.set<Type>(key, value);
//   return `✅ Data saved. ( ${storageReport()} )`
// }



// private helper method used by read() and write() above
export function storageReport(): string {
  return `storage [ ${Context.storageUsage} bytes ]`
}
