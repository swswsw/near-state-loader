#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"

echo
echo
echo ---------------------------------------------------------
echo "Step 1: Call 'view' functions on the contract"
echo ---------------------------------------------------------
echo

#near view $CONTRACT getCounter
near call $CONTRACT getCounter '{}' --accountId $CONTRACT
#near call $CONTRACT incrementCounter '{"key": "value", "value":10}' --accountId $CONTRACT
#near call $CONTRACT resetCounter '{}' --accountId $CONTRACT
#near call $CONTRACT readCounter '{}' --accountId $CONTRACT
#near call $CONTRACT flawedCounter '{"key": "value", "value": 3}' --accountId $CONTRACT

exit 0
