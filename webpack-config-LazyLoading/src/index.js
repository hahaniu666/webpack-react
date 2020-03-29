// 第一种
// function getComponent() {
//     return import(/* webpackChunkName:"lodash" */ 'lodash').then(({ default: _ }) => {
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['mu', 'feng'], '-');
//         return element;
//     })
// }

// document.addEventListener('click', () => {
//     getComponent().then(element => {
//         document.body.appendChild(element);
//     });
// })

// getComponent().then(element => {
//     document.body.appendChild(element);
// });

//  第二种

async function getComponent() {
	const { default: _ } = await import(/* webpackChunkName:"lodash" */ 'lodash');
	const element = document.createElement('div');
	element.innerHTML = _.join(['mu', 'feng1'], '-');
	return element;
}

document.addEventListener('click', () =>{
	getComponent().then(element => {
		document.body.appendChild(element);
	});
})
