! function(window, undefined) {
	/**************************
	 *
	 * @parame {data}   json
	 *  @parame {id}  string
	 *
	 ***********************/
	sMenuTree = function(option) {
		return new sMenuTree.prototype.init(option);
	}
	sMenuTree.prototype = {
		constructor: sMenuTree,
		html: '',
		init: function(option) {
			if(option.data != null && option.data && option.id != '') {
				this.tree(option.data);
				document.querySelector(option.id).innerHTML = this.html;
				option.cb && option.cb();
			} else {
				console.log('sMenuTree init error:请检查配置文件')
			}
		},
		tree: function(data) {
			this.html += '<ul><i></i>';
			for(var i = 0, l = data.length; i < l; i++) {
				this.html += '<li data-check="' + data[i].check + '" menucode="' + data[i].menucode + '">';
				if(typeof data[i].href == 'undefined' || this.trim(data[i].href) == '') {
					this.html += '<a href="javascript:;">';
				} else {
					this.html += '<a href="' + data[i].href + '">';
				}

				this.html += '<span class="' + data[i].className + '"></span><span>' + data[i].name + '</span>';
				if(data[i].list != null && data[i].list.length > 0) {
					this.html += '<i class="arrow icon-angle-right"></i></a>';
				} else {
					this.html += '<i></i></a>';
				}
				if(data[i].list != null && data[i].list.length > 0) {
					this.tree(data[i].list);
				}
				this.html += '</li>';
			}
			this.html += '</ul>';

		},
		extend: function(copy, target) {
			for(var attr in target) {
				copy[attr] = target[attr];
			}
			return copy;
		},
		trim: function(str) {
			return str.replace(/(^\s*)|(\s*$)/g, "");
		},
	}
	sMenuTree.prototype.init.prototype = sMenuTree.prototype;


	/************************
	 @param {#id} 目标元素的id
	 ************************/
	navBarClick = function(obj) {
		return new navBarClick.prototype.init(obj);
	}
	navBarClick.prototype = {
		constructor: navBarClick,
		init: function(obj) {
			var obj = document.querySelector(obj);
			obj.querySelectorAll('li').forEach(function(item, index) {
				item.addEventListener('click', function(e) {
					e.stopPropagation();
					if(item.className == '') {
						item.parentNode.querySelectorAll('li').forEach(function(it) {
							it.className = '';
						});
						item.className = 'open';
					} else {
						item.className = '';
					}
				})
			})
		}
	}
	navBarClick.prototype.init.prototype = navBarClick.prototype;


	/*******************************
	 @param {#id} string 目标ID
	 兼容火狐浏览器
	 *****************************/
	compatibleBarClick = function(obj) {
		return new compatibleBarClick.prototype.init(obj);
	}
	compatibleBarClick.prototype = {
		constructor: navBarClick,
		init: function(obj) {
			var $this = this;
			var liArr = document.querySelector(obj).querySelectorAll('li');
			for(var i = 0, l = liArr.length; i < l; i++) {
				(function(i) {
					var item = liArr[i];
					item.addEventListener('click', function(e) {
						e.stopPropagation();
						if(item.className == '') {
							$this.clearAll(item);
							item.className = 'open';
						} else {
							item.className = '';
						}
					})
				})(i)
			}
		},
		clearAll:function(obj){
			var cliArr = obj.parentNode.querySelectorAll('li');
			for(var c = 0, cl = cliArr.length; c < cl; c++) {
				(function(c) {
					cliArr[c].className = '';
				})(c)
			}
		}
	}
	compatibleBarClick.prototype.init.prototype = compatibleBarClick.prototype;

	/**********
	*导航一系列的模拟数据
	***********/
	var headBar = [{
	    "name": "",
	    "check": "stats",
	    "href": "",
	    "className": "icon-angle-down",
	    "list": [{
	        "name": "登出",
	        "check": 'stats',
	        "href": "javascript:logout();"
	        //"className": ' icon-envelope-alt'
	        //"list": []
	    }]
	}];
	var navBar = [{"name":"业务员","check":"stats","href":"","className":"icon-book","menucode":"R10001","list":[{"name":"货品档案管理","check":"stats","href":"","className":"","menucode":"R10001_P10001","list":[{"name":"新增与修改货品档案","check":"stats","href":"inventory","className":"","menucode":"R10001_P10001_51764460","list":[]}]},{"name":"客户建档案管理","check":"stats","href":"","className":"","menucode":"R10001_P10002","list":[{"name":"新增与修改客户档案","check":"stats","href":"customer","className":"","menucode":"R10001_P10002_81392339","list":[]}]},{"name":"销售订单生成","check":"stats","href":"","className":"","menucode":"R10001_P10003","list":[]},{"name":"跟单管理","check":"stats","href":"","className":"","menucode":"R10001_P10004","list":[{"name":"待发货订单","check":"stats","href":"dispatch/wait","className":"","menucode":"R10001_P10004_72684350","list":[]},{"name":"发货状态","check":"stats","href":"dispatch/status","className":"","menucode":"R10001_P10004_71343497","list":[]}]},{"name":"供应商档案管理","check":"stats","href":"","className":"","menucode":"R10001_P10005","list":[{"name":"新增与修改供应商档案","check":"stats","href":"supplier","className":"","menucode":"R10001_P10005_42662482","list":[]}]}]},{"name":"采购员","check":"stats","href":"","className":"icon-book","menucode":"R10002","list":[{"name":"供应商档案管理","check":"stats","href":"","className":"","menucode":"R10002_P10005","list":[{"name":"新增与修改供应商档案","check":"stats","href":"supplier","className":"","menucode":"R10002_P10005_42662482","list":[]}]},{"name":"货品采购","check":"stats","href":"","className":"","menucode":"R10002_P10006","list":[{"name":"采购下单","check":"stats","href":"purchaseorder","className":"","menucode":"R10002_P10006_61073521","list":[]}]}]},{"name":"管理员","check":"stats","href":"","className":"icon-book","menucode":"R10006","list":[{"name":"岗位与职能授权管理","check":"stats","href":"","className":"","menucode":"R10006_P10013","list":[{"name":"岗位与职能授权","check":"stats","href":"system","className":"","menucode":"R10006_P10013_61261443","list":[]}]},{"name":"基础系统设置","check":"stats","href":"","className":"","menucode":"R10006_P10014","list":[{"name":"基础系统设置","check":"stats","href":"set","className":"","menucode":"R10006_P10014_32432845","list":[]}]}]},{"name":"仓管员","check":"stats","href":"","className":"icon-book","menucode":"R10003","list":[{"name":"货品入库","check":"stats","href":"","className":"","menucode":"R10003_P10007","list":[{"name":"采购待收","check":"stats","href":"inbound/purchase","className":"","menucode":"R10003_P10007_41460503","list":[]},{"name":"合格入库","check":"stats","href":"inbound","className":"","menucode":"R10003_P10007_42939663","list":[]}]},{"name":"货品出库","check":"stats","href":"","className":"","menucode":"R10003_P10008","list":[{"name":"货品出库指令","check":"stats","href":"outbound/dispatch","className":"","menucode":"R10003_P10008_52336346","list":[]},{"name":"货品出库记录","check":"stats","href":"outbound","className":"","menucode":"R10003_P10008_92519387","list":[]}]}]},{"name":"会计员","check":"stats","href":"","className":"icon-book","menucode":"R10004","list":[{"name":"货品入库","check":"stats","href":"","className":"","menucode":"R10004_P10007","list":[{"name":"采购待收","check":"stats","href":"inbound/purchase","className":"","menucode":"R10004_P10007_41460503","list":[]},{"name":"合格入库","check":"stats","href":"inbound","className":"","menucode":"R10004_P10007_42939663","list":[]}]},{"name":"货品出库","check":"stats","href":"","className":"","menucode":"R10004_P10008","list":[{"name":"货品出库指令","check":"stats","href":"outbound/dispatch","className":"","menucode":"R10004_P10008_52336346","list":[]},{"name":"货品出库记录","check":"stats","href":"outbound","className":"","menucode":"R10004_P10008_92519387","list":[]}]}]},{"name":"人事专员","check":"stats","href":"","className":"icon-book","menucode":"R10005","list":[{"name":"人事档案管理","check":"stats","href":"","className":"","menucode":"R10005_P10012","list":[{"name":"新增与修改人事档案","check":"stats","href":"employee","className":"","menucode":"R10005_P10012_91047509","list":[]}]}]}];
	sMenuTree({
	    data: navBar,
	    id: '#nav-list',
	    cb: function () {
	        compatibleBarClick('#nav-list');
	        var menucode = $("#menucode").val();
	        var arr = menucode.split("_");

	        if (arr.length > 1) {
	            var one = arr[0], two = one + "_" + arr[1], three = menucode;
	            $("li[menucode='" + one + "']").addClass("open");
	            $("li[menucode='" + two + "']").addClass("open");
	            $("li[menucode='" + menucode + "']>a").addClass("ckd");
	        } else {
	            var two = arr[0], three = menucode;
	            $("li[menucode='" + two + "']").addClass("open");
	        }
	    }
	});

	sMenuTree({
	    data: headBar,
	    id: '#head-bar',
	    cb: function () {
	        compatibleBarClick('#head-bar');
	    }
	});


}(window, undefined)
