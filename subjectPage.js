const subjectPageHolder = document.querySelector('.subject-page-holder');

const subjectDataStorage = localStorage.getItem('subject');
const subjectDataStorageFinal = JSON.parse(subjectDataStorage);
const subjectID = localStorage.getItem('subjectId');

console.log(subjectID);

const subject = subjectDataStorageFinal.filter(
	(item) => item.subjectId === subjectID
);

subject.map((item) => {
	subjectPageHolder.innerHTML = `
	<div class="mt-5">
		<h1 class="border p-3 rounded">${item.subjectName}</h1>
	</div>`;
});

console.log(subject);
