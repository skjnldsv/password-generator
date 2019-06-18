export default function(data: string):string {
	return data.replace(/[$&+,:;=?@#|'<>.^*()%!-]/gi, ' ')
}