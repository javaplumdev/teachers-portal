import { subjectData } from './subjectsData.js';

const addSubject = document.getElementById('addSubject');
const subjectNameHolder = document.getElementById('subjectNameHolder');
const generateCode = document.getElementById('generateCode');
const subjectCode = document.getElementById('subjectCode');
const subjectHolder = document.querySelector('.subjectHolder');

// Generate UID
function uuidv4() {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
		(
			c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
		).toString(16)
	);
}

generateCode.addEventListener('click', () => {
	subjectCode.value = Math.floor(Math.random() * 1000000000);
});

addSubject.addEventListener('click', () => {
	const subjectContainer = document.createElement('div');

	if (
		subjectNameHolder.value === '' ||
		!subjectNameHolder.value.trim() ||
		subjectCode.value === '' ||
		!subjectCode.value.trim()
	) {
		alert('Enter a value');
	} else {
		subjectData.push({
			subjectId: uuidv4(),
			subjectName: subjectNameHolder.value,
			subjectCode: subjectCode.value,
			subjectTest: [],
			subjectStudents: [],
			subjectActivities: [],
		});

		subjectData.map((item) => {
			subjectContainer.innerHTML = `
            <div class="subject shadow rounded my-3 p-3">
                <h3>${item.subjectName}</h3>
                <small>${item.subjectTest.length} Lessons</small>
                <small>${item.subjectStudents.length} Assignments</small>
                <small>${item.subjectActivities.length} Students</small>
            </div>
        `;
		});

		subjectHolder.appendChild(subjectContainer);
	}

	subjectNameHolder.value = '';
	subjectCode.value = '';
});
