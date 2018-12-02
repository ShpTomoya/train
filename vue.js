// イベントバスを作成
var bus = new Vue();

/* * *
header-start
* * */
// v-playingという名前のカスタムディレクティブを定義
Vue.directive('playing', function (el, binding) {
	// ディレクティブの値に応じて要素のplay/pauseメソッドを実行する
	el[binding.value ? 'play' : 'pause']();
});
// トリガーのVueインスタンス
new Vue({
	el: '#start',
	methods: {
		openModal: function () {
			// 独自イベントclick.trigerを発火
			bus.$emit('click.trigger');
		}
	}
})
// モーダルのインスタンス
new Vue({
	el: '#modal',
	data: {
		opened: false
	},
	methods: {
		open: function () {
			this.opened = true;
		},
		close: function () {
			this.opened = false;
		}
	},
	// データ、算出プロパティ、メソッドが準備できたら実行
	created: function () {
		bus.$on('click.trigger', this.open);
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
		showText1: function () {
			this.moreText1 = true;
			this.btnMore1 = false;
		},
		showText2: function () {
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
		btnText1: function () {
			return this.moreText1 ? 'less' : 'more';
		},
		btnText2: function () {
			return this.moreText2 ? 'less' : 'more';
		},
		btnText3: function () {
			return this.moreText3 ? 'less' : 'more';
		}
	},
	methods: {
		btn1: function () {
			this.moreText1 = !this.moreText1;
		},
		btn2: function () {
			this.moreText2 = !this.moreText2;
		},
		btn3: function () {
			this.moreText3 = !this.moreText3;
		}
	}
})
