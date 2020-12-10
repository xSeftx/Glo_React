
'use strict';
const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';

const command = employers
	.filter(elem => String(elem).trim() != '')		
	.map(item => {
		let elem = item.trim();
		elem = elem[0].toUpperCase() + elem.slice(1).toLowerCase()
		return  elem
	});

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = (x,y,z) => x+y+z;

const lesson = calcCash(...data.cash),
	sumTech = [...data.react, data.add]

const makeBusiness = (director, allModule, gang, course, teacher='Максим') => {
	console.log(`Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}
Первое, что изучим будет ${data.react[0]}. Он очень похож на HTML!
Технологии которые мы изучим:
${sumTech.join(' ')} и другие`);
}

makeBusiness('Артем', lesson, command, nameCourse);

