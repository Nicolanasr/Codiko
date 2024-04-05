type BlogsType = {
	title: string;
	slug: string;
	body: string;
	shortDescription?: string;
	image?: string;
	createdDate: string;
	totalViews?: number;
	relatedBlogs?: string[];
	keywords: string[];
	author?: string;
	type: string;
};
