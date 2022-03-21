import { storage, logging } from "near-sdk-as";

// --- contract code goes below

export function incrementCounter(value: i32): void {
  const newCounter = storage.getPrimitive<i32>("counter", 0) + value;
  storage.set<i32>("counter", newCounter);
  logging.log("Counter is now: " + newCounter.toString());
}

export function decrementCounter(value: i32): void {
  const newCounter = storage.getPrimitive<i32>("counter", 0) - value;
  storage.set<i32>("counter", newCounter);
  logging.log("Counter is now: " + newCounter.toString());
}

export function getCounter(): i32 {
  return storage.getPrimitive<i32>("counter", 0);
}


export function resetCounter(): void {
  let counter = storage.getPrimitive<i32>("counter", 0);
  logging.log("counter value beforehand: " + counter.toString());
  storage.set<i32>("counter", 0);
  logging.log("Counter is reset!");
}


export function flawedCounter(value: i32): void {
  storage.set<i32>("counter", value);
  logging.log("Counter is now: " + value.toString());
}

export function readCounter(): i32 {
  return storage.getPrimitive<i32>("counter", 0);
}
