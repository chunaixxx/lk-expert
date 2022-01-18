const numberSuffix = number => {
	switch (true) {
		case number >= 11 && number <= 19:
			return 'лет'
		case Math.floor(number / 10) === 1:
			return 'год'
		case Math.floor(number / 10) >= 2 && Math.floor(number / 10) <= 4:
			return 'года'
		default:
			return 'лет'
	}
}

export default numberSuffix
