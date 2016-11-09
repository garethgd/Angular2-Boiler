$(document).ready(function(){

	var productComponent = Vue.extend({
		template: '#person'
	});

	//Register Component

	Vue.component('product', productComponent);

   new Vue({
	el: '#products',
	data:{
		'message': 'Hello World',
		'software' : ['tablet' , 'android' , 'ios' , 'ios' , 'ios' , 'ios' , 'ios' , 'ios'],
		'image' : 'images/tablet-tea.jpg'
	},
	methods:{
		
	}
});

})


