const jsonStringify = (val) => {
	if (Array.isArray(val)) {
		const arrayVals = val.map((item) => jsonStringify(item));
		return `[${arrayVals.join(",")}]`;
	}

	if (typeof val === "object" && val !== null) {
		const objEntries = Object.entries(val).map(
			([objKey, objVal]) => `"${objKey}":${jsonStringify(objVal)}`
		);

		return `{${objEntries.join(",")}}`;
	}

	if (typeof val === "string") {
		return `"${val}"`;
	}

	if (val === Infinity || Number.isNaN(val)) {
		return String(null);
	}

	return String(val);
};

const value = NaN;
const result = jsonStringify(value);
console.log(result);
