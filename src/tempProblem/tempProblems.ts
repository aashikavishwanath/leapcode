export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	javaVideoId?: string;
	pythonVideoId?: string;
};

export const problems: Problem[] = [
	{
		id: "contains-duplicate",
		title: "Contains Duplicate",
		difficulty: "Hard",
		category: "Array",
		order: 1,
		javaVideoId: "4oZsPXG9B94",
		pythonVideoId: "qJSPYnS35SE"
	},
	{
		id: "3-sum",
		title: "3Sum",
		difficulty: "Medium",
		category: "Two Pointers",
		order: 2,
		javaVideoId: "qJSPYnS35SE",
	},
	{
		id: "longest-substring",
		title: "Longest Substring",
		difficulty: "Medium",
		category: "Sliding Window",
		order: 3,
		javaVideoId: "3IETreEybaA",
	},
	{
		id: "two-sum",
		title: "Two Sum",
		difficulty: "Easy",
		category: "Array",
		order: 4,
		javaVideoId: "BoHO04xVeU0",
		pythonVideoId: "KLlXCFG5TnA",
	},
	{
		id: "search-a-2d-matrix",
		title: "Search a 2D Matrix",
		difficulty: "Hard",
		category: "Binary Search",
		order: 5,
		javaVideoId: "ZfFl4torNg4",
	},
	{
		id: "container-with-most-water",
		title: "Container With Most Water",
		difficulty: "Medium",
		category: "Two Pointers",
		order: 6,
		javaVideoId: "4oZsPXG9B94",
	},
	{
		id: "merge-intervals",
		title: "Merge Intervals",
		difficulty: "Medium",
		category: "intervals",
		order: 7,
		javaVideoId: "4oZsPXG9B94",
	},
	{
		id: "maximum-depth-of-binary-tree",
		title: "Maximum Depth of Binary Tree",
		difficulty: "Easy",
		category: "Tree",
		order: 8,
		javaVideoId: "4qYTqOiRMoM",
	},
	{
		id: "best-time-to-buy-and-sell-stock",
		title: "Best Time to Buy and Sell Stock",
		difficulty: "Easy",
		category: "Array",
		order: 9,
		javaVideoId: "4oZsPXG9B94",
	},
	{
		id: "subsets",
		title: "Subsets",
		difficulty: "Hard",
		category: "Backtracking",
		order: 10,
		javaVideoId: "4oZsPXG9B94",
	},
    
];