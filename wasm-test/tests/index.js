import assert from "assert";
import { hello } from "../build/debug.js";
assert.strictEqual(!!hello(), true);
