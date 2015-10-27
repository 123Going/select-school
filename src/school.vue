<style lang="less">
@color-54: rgba(0,0,0,.54);
@color-36: rgba(0,0,0,.36);
@border-color: #e8e8e8;
html,body{
	height: 100%;
}
.base-content{
	display: block;
	content: '';
	position: absolute;
	box-sizing: border-box;
}
.border-top{
	.base-content;
	width: 100%;
	left: 0;
	bottom: 0;
	-webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
	border-top: 1px solid @border-color;
}
.common{
	height: 100%;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
}
.school{
	width: 100%;
	height: 100%;
	overflow: hidden;
	color: @color-54;
	line-height: 40px;
	font-size: 12px;

	&>ul:first-child{
		float: left;
	}

	&__prov{
		width: 120px;
		background-color: #fff;
		text-align: center;
		.common;

		.current{
			background-color: #ddd;
		}
	}

	&__list{
		overflow: hidden;
		text-indent: 20px;
		background-color: #f5f5f5;
		.common;
		li{
			position: relative;
		}
		li+li:after{
			.border-top;
		}
	}
}
</style>
<template>
<section class="school">
	<ul class="school__prov">
		<li v-repeat="its:province" v-text="its" v-class="current:index===$index" v-on="click:index=$index"></li>
	</ul>
	<ul class="school__list">
		<li v-repeat="its:school" v-text="its"></li>
	</ul>
</section>
</template>

<script>
var data = require('./school.json');

module.exports = {
	data : function(){
		return {
			index:0,
			province : ["北京市", "天津市", "河北省", "山西省", "内蒙古自治区", "辽宁省", "吉林省", "黑龙江省", "上海市", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西壮族自治区", "海南省", "重庆市", "四川省", "贵州省", "云南省", "西藏自治区", "陕西省", "甘肃省", "青海省", "宁夏回族自治区", "新疆维吾尔自治区"],
			school : data['北京市']
		}
	},
	watch : {
		'index' : function(val){
			this.school = data[this.province[this.index]];
		}
	}
}
</script>