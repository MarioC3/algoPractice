const isCyclic = (input) => {
	const seen = new Set();

	const cyclicHelper = (value) => {
		if (typeof value !== "object" || value === null) return false;

		if (seen.has(value)) return true;

		seen.add(value);
		return Object.values(value).some(cyclicHelper);
	};

	return cyclicHelper(input);
};

const escape_quote = /"/g;

const jsonStringify = (val) => {
	if (isCyclic(val))
		throw new TypeError("Converting circular structure to JSON");

	if (typeof val === "bigint")
		throw new TypeError("Do not know how to serialize a BigInt");

	if (val === null) return "null";

	const type = typeof val;

	if (type === "number") {
		if (Number.isNaN(val) || !Number.isFinite(val)) return "null";
		return String(val);
	}

	if (type === "boolean") return String(val);

	if (type === "function" || type === "symbol" || type === "undefined")
		return undefined;

	if (type === "string") return `"${val.replace(escape_quote, '\\"')}"`;

	if (typeof val.toJSON === "function") return jsonStringify(val.toJSON());

	if (Array.isArray(val)) {
		const arrayVals = val.map((item) => {
			if (
				item === undefined ||
				typeof item === "function" ||
				typeof item === "symbol"
			) {
				return String(null);
			} else {
				return jsonStringify(item);
			}
		});
		return `[${arrayVals.join(",")}]`;
	}

	const objEntries = Object.entries(val)
		.map(([objKey, objVal]) => {
			const ignoreEntry =
				objVal === undefined ||
				typeof objVal === "function" ||
				typeof objVal === "symbol" ||
				typeof objKey === "symbol";

			if (ignoreEntry) return;

			return `"${objKey}":${jsonStringify(objVal)}`;
		})
		.filter((entriesVal) => entriesVal !== undefined);

	return `{${objEntries.join(",")}}`;
};
