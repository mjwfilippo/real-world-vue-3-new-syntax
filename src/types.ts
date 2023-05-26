// Contain all the types we want to use for this app

export interface EventItem {
	id: number
	category: string
	title: string
	description: string
	location: string
	date: string
	time: string
	petsAllowed: boolean
	organizer: string
}