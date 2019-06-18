export default function(data: string):string {
	return data
		.split(' ')
		.map(part => part.charAt(0).toUpperCase() + part.substr(1).toLowerCase())
		.join('')
}