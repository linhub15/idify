import assert from "assert";
import { get_data } from "../build/debug.js";
assert.strictEqual(!!get_data(), true);
