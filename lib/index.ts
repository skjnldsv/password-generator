import randomInt from 'random-int'
import { shuffle } from 'd3-array'

import {animals} from './models/animals'
import {colours} from './models/colours'
import {fruits} from './models/fruits'
import {nouns} from './models/nouns'
import {numbers} from './models/numbers'
import {vegetables} from './models/vegetables'

import noSpecialChar from './filters/noSpecialChar'
import upperCaseFirstLetter from './filters/upperCaseFirstLetter'

const randFromSet = function(set: Array<string>): Array<string> {
	return set[randomInt(0, set.length - 1)].split(' ')
}

const generate = function(length: number = 4, customSet?: Array<string>): string {
	const randSet = [animals, colours, fruits, numbers, vegetables]
	const defaultSet = [nouns]

	const result = []
	while(result.length < length) {
		// use custom set if defined
		// or use randSet set only if required set has not yet 
		// been used
		if (customSet || result.length >= defaultSet.length) {
			let set = customSet || randSet[randomInt(0, randSet.length - 1)]
			result.push(...randFromSet(set))
		// always include one of each defaultSet
		} else {
			let set = defaultSet[result.length]
			result.push(...randFromSet(set))
		}
	}

	// if last pushed entry have multiple word,
	// make sure we have the proper length
	const slicedResult = result.slice(0, length)

	// filter and format
	const formattedResult = slicedResult
		.map(noSpecialChar)
		.map(upperCaseFirstLetter)
	
	// shuffle the array
	return shuffle(formattedResult)
}

export default generate