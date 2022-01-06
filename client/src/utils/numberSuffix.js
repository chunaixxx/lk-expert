const numberSuffix = number => {
	if (number >= 11 && number <= 19) return 'лет'
	if (Math.floor(number / 10) === 1) return 'год'
	if (Math.floor(number / 10) >= 2 && Math.floor(number / 10) <= 4)
		return 'года'
	else return 'лет'
}

export default numberSuffix
