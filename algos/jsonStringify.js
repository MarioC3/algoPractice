const jsonStringify = (val) => {
	if (Array.isArray(val)) {
		const arrayVals = val.map((item) => {
			if (
				item === undefined ||
				typeof item === "function" ||
				typeof item === "symbol"
			) {
				return String(null);
			} else {
				jsonStringify(item);
			}
		});
		return `[${arrayVals.join(",")}]`;
	}

	if (typeof val === "object" && val !== null) {
		const objEntries = Object.entries(val).map(([objKey, objVal]) => {
			if (typeof objKey === "string") {
				if (
					objVal !== undefined &&
					typeof objVal !== "function" &&
					typeof objVal !== "symbol"
				) {
					return `"${objKey}":${jsonStringify(objVal)}`;
				}
			}
		});

		return `{${objEntries.join(",")}}`;
	}

	if (typeof val === "string") {
		return `"${val}"`;
	}

	if (val === Infinity || Number.isNaN(val)) {
		return String(null);
	}

	if (typeof val === "bigint") {
		throw new TypeError("Do not know how to serialize a BigInt");
	}

	if (
		typeof val === "function" ||
		typeof val === "symbol" ||
		value === undefined
	) {
		return undefined;
	}

	if (val instanceof Map || val instanceof Set) {
		return String({});
	}

	return String(val);
};

const value = Symbol("");
const result = jsonStringify(value);
console.log(result);
