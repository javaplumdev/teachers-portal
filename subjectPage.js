import { subjectData } from './subjectsData.js';

const subjectId = localStorage.getItem('subjectId');

const subjectPageHolder = document.querySelector('.subject-page-holder');

subjectPageHolder.innerHTML = 'Subject page';

const sample = subjectData.map((item) => {
	return item;
});

console.log(subjectData);
console.log(sample);
