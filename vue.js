// header-start
new Vue({
	el: '#start',
	methods: {
		sayStart: function() {
			alert('Let\'s get started!!');
		}
	}
})

// sec4
new Vue({
	el: '#sec4',
	data: {
		moreText1: false,
		moreText2: false,
		btnMore1: true,
		btnMore2: true
	},
	methods: {
		showText1: function() {
			this.moreText1 = true;
			this.btnMore1 = false;
		},
		showText2: function() {
			this.moreText2 = true;
			this.btnMore2 = false;
		}
	}
})

// sec5
new Vue({
	el: '#sec5',
	data: {
		moreText1: false,
		moreText2: false,
		moreText3: false
	},
	computed: {
		btnText1: function() {
			return this.moreText1 ? 'less' : 'more';
		},
		btnText2: function() {
			return this.moreText2 ? 'less' : 'more';
		},
		btnText3: function() {
			return this.moreText3 ? 'less' : 'more';
		}
	},
	methods: {
		btn1: function() {
			this.moreText1 = !this.moreText1;
		},
		btn2: function() {
			this.moreText2 = !this.moreText2;
		},
		btn3: function() {
			this.moreText3 = !this.moreText3;
		}
	}
})
