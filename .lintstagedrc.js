const path = require('path');

const checkFormat = filenames => {
	const relataiveFileNames = filenames
		.map(f => path.relative(process.cwd(), f))
		.join(' ');
	return `pnpm prettier --write ${relataiveFileNames} --ignore-unknown`;
};

const checkLint = filenames => {
	const relataiveFileNames = filenames
		.map(f => path.relative(process.cwd(), f))
		.join(' --file ');
	return `next lint --fix --file ${relataiveFileNames}`;
};

module.exports = {
	'*': [checkFormat, checkLint],
};
