/**
 * Maps portfolio work entry IDs to their muted highlight video loops in /public/videos.
 * Used for hover-to-play previews on ProjectCard and the homepage live reel.
 */
export const projectVideos: Record<string, string> = {
	'save-file-0': '/videos/save-file-0-teaser.mp4',
	'boop-n-burn': '/videos/bnb-hero.mp4',
	'the-one-bullet-job': '/videos/obj-hero.mp4',
	kit: '/videos/kit-highlight.mp4',
	'fallguys-mobile': '/videos/fall-guys-mobile.mp4',
	'man-of-medan': '/videos/man-of-medan-highlight.mp4',
	'little-hope': '/videos/little-hope-highlight.mp4',
	hyenas: '/videos/hyenas.mp4',
	'lego-dimensions': '/videos/lego-dimensions-highlight.mp4',
	'lego-city-undercover': '/videos/lego-city-undercover-highlight.mp4',
	'alex-kidd': '/videos/alex-kidd.mp4',
	'bravo-team': '/videos/bravo-team-highlight.mp4',
	foreclosed: '/videos/foreclosed.mp4',
	hidden_agenda: '/videos/hidden-agenda-highlight.mp4',
	legacy: '/videos/legacy-highlight.mp4',
	'merge-dragons': '/videos/merge-dragons-highlight.mp4',
	'my-time-at-portia': '/videos/my-time-at-portia-highlight.mp4',
	the_inpatient: '/videos/the-inpatient-highlight.mp4',
};

export const studioProjectMap: Record<string, { label: string; ids: string[] }> = {
	cig: { label: 'Cloud Imperium Games', ids: ['cloud-imperium-games'] },
	unity: { label: 'Unity', ids: ['fallguys-mobile', 'merge-dragons'] },
	ca: { label: 'Creative Assembly', ids: ['hyenas'] },
	supermassive: {
		label: 'Supermassive Games',
		ids: ['man-of-medan', 'little-hope', 'bravo-team', 'the_inpatient', 'hidden_agenda'],
	},
	merge: { label: 'Merge Games', ids: ['alex-kidd', 'foreclosed', 'monster-harvest', 'smalland'] },
	tt: { label: 'TT Games', ids: ['lego-dimensions', 'lego-city-undercover'] },
	ki10: {
		label: 'Ki10 Games',
		ids: ['save-file-0', 'boop-n-burn', 'the-one-bullet-job', 'skill-check', 'kit'],
	},
};
