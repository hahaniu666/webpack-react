function Content() {
	var dom = document.getElementById('root');
	var content = document.createElement('div');
	content.innerText = 'content';
	dom.append(content);


	let a = { a: 10 };
	console.log('a', a)
	let b = { b: 10 };
	console.log('b', b)
	let obj = {
		a: 10
	};
	console.log('obj', obj)
	obj[b] = 20;
	console.log('obj1', obj, obj[b])
	console.log(obj[a]);


	var arr = [3, 2, 4, 9, 8, 5, 5, 8, 7, 7];
	let newArr = [...new Set(arr)].sort();
	console.log(newArr);



	let c = {};
	c.toString();

	console.log(c.toString())
	c = 'c';

	console.log(c = 'c')
	c.toString();

	console.log(c.toString())


	function bar(x = y, y = 2) {
		return [x, y];
	}
	// bar();

	class Animal {
		constructor() {
			this.type = "animal";
		}
		say(val) {
			setTimeout(() => {
				console.log(this);
				console.log(this.type + ' says ' + val);
			}, 1000)
		}
	}
	var animal = new Animal();

	class Animal1 {
		constructor() {
			this.type = "animal1";
		}
		say(val) {
			setTimeout(() => {
				console.log(this);
				console.log(this.type + ' says ' + val);
			}, 1000)
		}
	}
	var animal1 = new Animal1();
	animal.say("hi");
	animal1.say("hi");

	Promise.resolve()
		.then(() => {
			return new Error('error!!!')
		})
		.then((res) => {
			console.log('then: ', res)
		})
		.catch((err) => {
			console.log('catch: ', err)
		})

		const first = () => (new Promise((resolve, reject) => {
			console.log(33);
			let p = new Promise((resolve, reject) => {
				console.log(77);
				setTimeout(() => {
					console.log(55);
					resolve(66);
				}, 0)
				resolve(11);
			});
			resolve(22);
			p.then((arg) => {
				console.log('arg1',arg);
			});
		}));
		
		first().then((arg) => {
			console.log('arg2',arg);
		});
		console.log(44);
}
// export default Content;

module.exports = Content;