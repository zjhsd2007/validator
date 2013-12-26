(function(win){
	var item = {
		'require':{
			'rules': /.+/,
			'tips' : '该信息为必填项，请填写！',
			'error' : '对不起，必填信息不能为空，请填写！'
		},
		'username':{
			'rules': /^[\u4E00-\u9FA5A-Za-z0-9_\ ]{5,20}$/i,
			'tips' : "5~20个字符，由中文、英文字母和下划线组成。",
			'error' : "对不起，用户名格式不正确。这确的格式如：“robert_yao” 或者 “创业街商户”。",
			'warn': "对不起，该用户名已经被注册。请更换一个用户名，或者使用该用户名<a href=\"login.html\">登录</a>。"
		},
		'password': {
			'rules': /^[a-zA-Z0-9\_\-\~\!\%\*\@\#\$\&\.\(\)\[\]\{\}\<\>\?\\\/\'\"]{3,20}$/,
			'tips' : "3~20个字符，由英文字母，数字和特殊符号组成。",
			'error' : "对不起，您填写的密码有误。"
		},
		'number':{
			'rules': /^[-+]?(0|[1-9]\d*)(\.\d+)?$/,
			'tips': '请输入数字！',
			'error': '对不起，您填写的不是数字。'
		},
		'date':{
			'rules': /^\d{4}\-\d{2}-\d{2}$/,
			'tips': '请填写日期！格式为：1989-09-23',
			'error': '对不起，您填写的日期格式不正确.'
		},
		'money':{
			'rules': /^[-+]?(0|[1-9]\d*)(\.\d+)?$/,
			'tips': '请输入金额！',
			'error': '金额格式不正确。正确格式如：“60” 或 “60.5”。'
		},
		'per':{
			'rules': /^(?:[1-9][0-9]?|100)(?:\.[0-9]{1,2})?$/,
			'tips': '请输入百分比！',
			'error': '对不起，您填写的百分比格式不正确！'
		},
		'email':{
			'rules': /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
			'tips': '请输入您常用的E-mail邮箱号，以便我们联系您，为您提供更好的服务！',
			'error': '对不起，您填写的E-mail格式不正确！正确的格式：yourname@gmail.com。',
			'warn': '对不起，该E-mail帐号已经被注册。请更换一个。'
		},
		'phone':{
			'rules': /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/,
			'tips': '请输入可以联系到您常用的电话号码！',
			'error': '对不起，您填写的电话号码格式不正确！'
		},
		'mobile':{
			'rules': /^[1-9]\d{10}$/,
			'tips': '请输入可以联系到您的手机号码！',
			'error': '对不起，您填写的手机号码格式不正确！'
		},
		'url':{
			'rules': /^(http|https):\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"])*$/,
			'tips': '请输入网站地址！',
			'error': '对不起，您填写的网站地址格式不正确！正确的网站地址如：http://www.yourdomain.com/。'
		},
		'ip':{
			'rules': /^(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5])$/,
			'tips': '请输入IP地址！',
			'error': '对不起，您填写的IP地址格式不正确！正确的IP地址如：192.168.1.1。'
		},
		'zip':{
			'rules':/^[1-9]\d{5}$/,
			'tips': '请输入邮政编码！',
			'error': '对不起，您填写的邮政编码格式不正确！正确的邮政编码如：430051。'
		},
		'qq':{
			'rules':/^[1-9]\d{4,}$/,
			'tips': '请输入您的QQ号！',
			'error': '对不起，您填写的QQ号格式不正确！正确的QQ号如：64392719。'
		},
		'english':{
			'rules':/^[A-Za-z]+$/,
			'tips': '请输入英文字母！',
			'error': '对不起，您填写的内容含有英文字母（A-Z,a-z）以外的字符！'
		},
		'chinese':{
			'rules':/^[\u0391-\uFFE5]+$/,
			'tips': '请输入中文字符！',
			'error': '对不起，您填写的内容含非中文字符！'
		},
		'ce':{
			'rules':/^[-\w\u0391-\uFFE5]+$/,
			'tips': '请输入中文或英文或数字字符！',
			'error': '对不起，您填写的内容不正确！'
		},
		'integer':{
			'rules':/^[-\+]?\d+$/,
			'tips': '请输入整数！',
			'error': '对不起，您填写的内容不是整数！'
		},
		'idcard':{
			'rules':/(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3})|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])(\d{4}|\d{3}[x]))$/,
			'tips': '请输入身份证号码！',
			'error': '对不起，您填写的身份证号码格式不正确！'
		},
		'empty':{
			'rules':/^\s*$/
		},
		'anything':{
			'rules':/^[\s\S]*$/
		}
	};
    
	var oClass = {
		'tip':'tip',                 //提示信息的class
		'tip_pass':'tip-pass',       //验证通过时的提示信息的class
		'tip_error':'tip-error',     //验证没有通过时的提示信息的class
		'item_pass':'item-pass',     //验证通过时的表单元素的class
		'item_error':'item-error'    //验证没有通过时的表单元素的class
	};
	var doc = win.document;
	//引用事件变量，handlers用来存放事件，用处在remove验证项的同时移除相应的事件
	var focusFn,blurFn,changeFn,handlers = [];
	var beTrigger = false;
	var validator = function(opts){
		return new validator.prototype.init(opts);
	};
	validator.prototype = {
		constructor:validator,
		//初始化
		init:function(opts){
			if(typeof opts == 'undefined') return this;
			var _this = this,form = $(opts.form);
			if(!form) return false;
			this.form = form;
			this.items = [];//存放验证项的ID
			this.options = [];//存放验证项的所有参数
            this.ajaxCount = 0;
			addEvent(form,'submit',function(e){
				var len=_this.items.length,i=0,hasError=false,flag;
				//取消默认提交
				preventDefault(e);

                //验证所有项
                validateAll.call(_this,_this.options);

                //如果有ajax验证，那么必须等到全部都有返回结果
                if(_this.ajaxCount > 0){
                    alert('请等待ajax验证返回结果！');
                };

				//判断是否有没有通过的项
				for(;i<len;i++){
					if(hasClass($(_this.items[i]),oClass['item_error'])){
						hasError = true;
						break;
					};
				};

                //执行提交前的函数，如果有的话
                if(opts.beforeSubmit && isFunction(opts.beforeSubmit)) flag = opts.beforeSubmit();

				//如果有没有通过验证的项
				if(flag === false || hasError) return false;
				//否则，选择是以ajax的形式提交，还是默认形式提交
				opts.ajaxSubmit ? ajaxForm(form,opts.afterSubmit) : form.submit();
			});
			//返回this，实现链写
			return this;
		},
		/*************************对外接口**********************************/
		//添加验证项
		add:function(opts){
			var i=0,len=this.options.length,exsit;
			if(!opts) return this;
			//判断新添加的验证项是否已经存在
			for(;i<len;i++){
				if(opts.target === this.options[i].target){
					exsit = true;
					break;
				};
			};
			//如果存在，直接返回
			if(exsit) return this;
			this.items.push(opts.target);
			this.options.push(opts);
            bindHandlers.call(this,opts);
			return this;
		},
		//移除验证项
		remove:function(el){
			var i=0,n,len=this.options.length,element,handler,tip,opt;
			for(;i<len;i++){
				if(el === this.options[i].target){
					n = i;
					break;
				};
			};
			if(n == undefined) return this;
			this.items.splice(n,1);
			opt = this.options.splice(n,1);
			handler = handlers.splice(n,1)[0];
			element = $(el);

            //如果删除的是一个带ajax验证的
            if(opt.action) this.ajaxCount--;

			//获取需要项的提示信息
			tip = $$(oClass['tip'],element.parentNode,'div')[0];

			//移除所有class
			removeClass(element,oClass['item_error']+' '+oClass['item_pass']);

			//移除提示信息，如果存在的话
			tip && tip.parentNode.removeChild(tip);

			//移除绑定的事件处理函数
			removeEvent(element,'focus',handler['focusFn']);
			removeEvent(element,'blur',handler['blurFn']);
			removeEvent(element,'change',handler['changeFn']);
			removeEvent(element,'keyup',handler['keyupFn']);
			return this;
		},
		//重置
		reset:function(){
			var i=0,len = this.items.length,item;
			//移除所有项的class
			for(;i<len;i++){
				item = $((this.items)[i]);
				removeClass(item,oClass['item_error']+' '+oClass['item_pass']);
				item.value = '';
			};
			//移除所有提示信息
			hideAllTip(this.form);
            //重置ajax计数器
            this.ajaxCount = 0;
		},
		//主动触发验证
		trigger:function(el,callback){
			var i=0,n,len=this.options.length,handler;
			for(;i<len;i++){
				if(el === this.options[i].target){
					n = i;
					break;
				};
			};
			if(n == undefined) return this;
			beTrigger = true;
			//validateItem(this.options[n]);
			blurHandler(this.options[n])();
			beTrigger = false;
			callback && callback.call(el);
		},
		extendRule:function(rules){
			extend(item,rules||{});
		}
	};
	validator.prototype.init.prototype = validator.prototype;
	win.validator = validator;
	
	/*************************私有方法**********************************/
	//绑定验证事件
	function bindHandlers(opts){
		var el = $(opts.target),theSame;
		if(opts.sameTo) theSame = $(opts.sameTo);
		focusFn = focusHandler.call(this,opts);
		blurFn = blurHandler.call(this,opts);
		changeFn = changeHandler.call(this,opts);
		keyupFn = keyupHandler.call(this,opts);
		addEvent(el,'focus',focusFn);
		addEvent(el,'blur',blurFn);
		addEvent(el,'keyup',keyupFn);
		if(theSame){
			addEvent(theSame,'blur',function(){
				//由于IE绑定事件执行顺序混乱，所以用setTimeout来排序
				/*setTimeout(function(){
					fireEvent(el,'blur');
				},0);*/
				fireEvent(el,'blur');
			});
		};
		if(el.type == 'select' || el.type == 'file'){
			addEvent(el,'change',changeFn);
		};
		//
		handlers.push({
			'target':opts.target,
			'focusFn':focusFn,
			'blurFn':blurFn,
			'changeFn':changeFn,
			'keyupFn':keyupFn
		});
	};
	function focusHandler(opts){
		return function(){
			var el = $(opts.target),val= el.value,defaultval = el.getAttribute('placeholder')||'';
			if(opts.beforeFocus && isFunction(opts.beforeFocus)) opts.beforeFocus(opts);
			if((hasClass(el,oClass['item_error']) || hasClass(el,oClass['item_pass'])) && !(val === '' || val === defaultval )) return;
			showTip(opts);
		};
	};
	function blurHandler(opts){
        var _this = this;
		return function(){
			var el = $(opts.target),val= el.value,defaultVal = el.getAttribute('placeholder'),flag = true;
            //如果是主动验证的，那么值为空或是默认值的时候也需要验证，而不是重置元素
            //注意beTrigger的值的还原语句不能放在下面的ajax回调里，考虑一下同时两个主动触发ajax验证的情况
            if(!beTrigger && (val === '' || val === defaultVal)){
                resetItem(opts);
                return;
            };
            if(opts.beforeBlur && isFunction(opts.beforeBlur)) flag = opts.beforeBlur(opts);
            if(flag === false){
                showErrorTip(opts);
                return;
            };
            validateItem.call(_this,opts);
            if(opts.afterBlur && isFunction(opts.afterBlur)) opts.afterBlur.call(_this,opts);
		};
	};
	function changeHandler(opts){
		return function(){
			validate(opts) ?  showErrorTip(opts) : showPassTip(opts);
			if(opts.afterChange && isFunction(opts.afterChange)){opts.afterChange.call($(opts.target),opts);};
		};
	};
	function keyupHandler(opts){
		return function(){
			if(opts.onkeypress && isFunction(opts.onkeypress)){opts.onkeypress.call($(opts.target),opts);};
		}
	}
	//表单提交时验证所有
	function validateAll(options){
		for(var i=0,len=options.length;i<len;i++){
            validateItem.call(this,options[i]);
		};
	};
	//验证单个
	function validateItem(opts){
		var hasError,el = $(opts.target),_this = this;

		hasError = validate(opts);
		if(hasError){
			showErrorTip(opts);
		}else{
            //如果需要ajax验证
            if(opts.action){
                _this.ajaxCount++;
                ajaxValidate(opts,function(pass){
                    _this.ajaxCount--;
                    if(!pass){
                        showErrorTip(opts);
                    }else{
                        showPassTip(opts);
                        if(opts.sameTo){
                            toSame(opts);
                        };
                    };
                });
            }else{
                showPassTip(opts);
                //不需要ajax验证
                if(opts.sameTo){
                    toSame(opts);
                };
            };
		};
	};
	//重置单个
	function resetItem(opts){
		var item = $(opts.target),tip = $$(oClass['tip'],item.parentNode,'div')[0];
		removeClass(item,oClass['item_error']+' '+oClass['item_pass']);
		item.value = '';
		hide(tip);
	};
	//验证
	function validate(opts){
		var el = $(opts.target),reg = '',valiFn = opts.valiFn,defaultValue = el.getAttribute('placeholder');
        if(el.value === defaultValue){el.value = '';};
        if(opts.rule_type){
            var type = opts.rule_type, rule_item = type.match(/(\w+)/g);
            for(var i=0;i<rule_item.length;i++){
                type = type.replace(rule_item[i],'chk('+ item[rule_item[i]].rules +',\''+escaping(el.value)+'\')');
            };
            reg = type;
        }else if(opts.rule){
            reg = 'chk('+opts.rule+',\''+escaping(el.value)+'\')';
        }else{
            return;
        };
        return !(valiFn ? (eval(reg) && valiFn.call(el,opts) !== false) : eval(reg));
	};
	//ajax验证
	function ajaxValidate(opts,callback){
		var el = $(opts.target),val = el.value , name = el.name || el.id;
		ajax({
			type: "GET",
			url: opts.action,
			noCache:true,
			data: name +'='+ encodeURIComponent(val),
			onsuccess: function(){
				var data = eval('('+this.responseText+')');
				callback(data.pass);
			}
		});
	};
	//判断两个值是否相同，如重复密码
	function toSame(opts){
		var el = $(opts.target),theSame = $(opts.sameTo),hasPass;
		if(!theSame) return;
		hasPass = hasClass(theSame,oClass['item_pass']);
		if(hasPass){
			//如果通过，再判断两个的值是否相同
			if(el.value === theSame.value){
				//如果相同就显示通过提示信息
				showPassTip(opts);
			}else{
				//否则显示错误提示信息
				showErrorTip(opts);
			};
		};
	};
	function chk(reg,str){
		return reg.test(str);
	};
    //去掉换行符和首尾的空格，将/ \ ' "转义
    function escaping(val){
        return val.replace(/^\s+|\s+$/g,'').replace(/(['"])/g,function(a,b){ return '\\'+b;}).replace(/[\r\n]/g,'')
    };
    function tip(opts,type){
        var rule_type = opts.rule_type && (opts.rule_type.match(/\w+/g))[0];
        var msg = opts[type] || item[rule_type][type] ||'', $el = $(opts.target),$tip =$$(oClass['tip'],$el.parentNode,'div')[0];
        if(!$tip){
            $tip = createTip();
            $el.parentNode.appendChild($tip);
        };
        $tip.innerHTML = '<span>'+msg+'</span>';
        show($tip);

        switch(type){
            case 'tips':
                removeClass($el,oClass['item_error']+' '+oClass['item_pass']);
                removeClass($tip,oClass['tip_error']+' '+oClass['tip_pass']);
                break;
            case 'error' :
                removeClass($el,oClass['item_pass']);
                addClass($el,oClass['item_error']);
                removeClass($tip,oClass['tip_pass']);
                addClass($tip,oClass['tip_error']);
                break;
            case 'pass':
                removeClass($el,oClass['item_error']);
                addClass($el,oClass['item_pass']);
                removeClass($tip,oClass['tip_error']);
                addClass($tip,oClass['tip_pass']);
                break;
        };

        if(opts.no_tip) hide($tip);
    };
	//显示默认提示信息
	function showTip(opts){
        tip(opts,'tips');
	};
	//显示错误提示信息
	function showErrorTip(opts){
        tip(opts,'error');
	};

	//显示通过验证提示信息
	function showPassTip(opts){
        var $el = $(opts.target);
        tip(opts,'pass');
        if($el.value === ''){
            resetItem(opts);
        };
	};
	//隐藏所有提示信息
	function hideAllTip(form){
		var i=0,tips = $$(oClass['tip'],form,'div'),len=tips.length,item;
		for(;i<len;i++){
			item = tips[i];
			item.parentNode.removeChild(item);
		};
	};
	//创建提示信息
	function createTip(){
		var oDiv = document.createElement('div');
		oDiv.className = oClass['tip'];
		return oDiv;
	};
	/*************************常用工具函数**********************************/
	function $(id){
		return typeof id == 'string' ? document.getElementById(id) : id;
	};
	function $$(oClass,parent,nodename){
		var i=0,len=0,re=[],els;
		nodename = nodename || '*';
		parent = parent || doc;
		els = parent.getElementsByTagName(nodename);
		for(len=els.length;i<len;i++){
			if(hasClass(els[i],oClass)) re.push(els[i]);
		};
		return re;
	};
	function isFunction(obj){
		return typeof obj == 'function';
	};
	function trim(str){
		return str.replace(/^\s+|\s+$/,'').replace(/\s+/,' ');
	};
	function preventDefault(e){
		e = e || window.event;
		if(e.preventDefault){
			e.preventDefault();
		}else{
			e.returnValue = false;
		};
	};
	function hasClass(el,oClass){
		oClass  = ' '+ oClass + ' ';
		return (' '+el.className + ' ').indexOf(oClass) > -1 ? true : false;
	};
	function addClass(el,oClass){
		var C = trim(oClass).split(' '),eClass = el.className,i=0,len=C.length;
		for(;i<len;i++){
			if(!hasClass(el,C[i])){
				eClass+=' '+C[i];
			};
		};
		el.className = trim(eClass);
	};
	function removeClass(el,oClass){
		var C = trim(oClass).split(' '),eClass = el.className,i=0,len=C.length;
		for(;i<len;i++){
			if(hasClass(el,C[i])){
				eClass = eClass.replace(C[i],'');
			};
		};
		el.className = trim(eClass);
	};
	function createXhr(){
		if(typeof XMLHttpRequest != 'undefined'){
			return new XMLHttpRequest();
		}else{
			var xhr = null;
			try{
				xhr = new ActiveXObject('MSXML2.XmlHttp.6.0');
				return xhr;
			}catch(e){
				try{
					xhr  = new ActiveXObject('MSXML2.XmlHttp.3.0');
					return xhr;
				}catch(e){
					throw Error('cannot create XMLHttp object!');
				};
			};
		};
	};
	function ajax(opts){
		var set = extend({
			url:'',
			data:'',
			type:'GET',
			timeout:5000,
			onbeforerequest:function(){},
			onsuccess:function(){},
			onnotmodified:function(){},
			onfailure:function(){}
		},opts||{});
		var xhr = createXhr();
		if((set.type).toUpperCase() == 'GET'){
			if(set.data){
				set.url += (set.url.indexOf('?') >= 0 ? '&' : '?') + set.data;
				set.data = null;
			};
			if(set.noCache){
				set.url+=(set.url.indexOf('?') >= 0 ? '&' : '?')+'t='+(+new Date());
			};
		};
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status >= 200 && xhr.status < 300){
					set.onsuccess.call(xhr);
				}else if(xhr.status == 304){
					set.onnotmodified.call(xhr);
				}else{
					set.onfailure.call(xhr);
				};
			};
		};
		xhr.open(set.type,set.url);
		if((set.type).toUpperCase() == 'POST'){
			xhr.setRequestHeader('content-Type','application/x-www-form-urlencoded');
		}
		set.onbeforerequest();
		if(set.timeout){
			setTimeout(function(){
				xhr.onreadystatechange = function(){};
				xhr.abort();
				set.onfailure();
			},set.timeout);
		};
		xhr.send(set.data);
	};
	
	function encodeNameAndValue(sName,sValue){
		return encodeURIComponent(sName)+'='+encodeURIComponent(sValue);
	};
	//序列化表单
	function serializeForm(form){
		var oForm = $(form),els = oForm.elements,len=els.length,i=0;
		var re = [];
		for(;i<len;i++){
			var el = els[i];
			switch(el.type){
				case 'select-one' :
				case 'select-multipe':
					 for(var j=0,l=el.options.length;j<l;j++){
					 	var opt = el.options[j];
						if(opt.selected){
							var v = '';
							if(opt.hasAttribute){
								v = opt.hasAttribute('value') ? opt.value : opt.text;
							}else{
								v = opt.attributes['value'].specified ? opt.value : opt.text;
							};
							re.push(encodeNameAndValue(el.name,v));
						}
					 };
					 break;
				case undefined :
				case 'fieldset' :
				case 'button' :
				case 'submit' :
				case 'reset' :
				case 'file' :
					 break;
				case 'checkbox' :
				case 'radio' :
					 if(!el.checked){
					 	break;
					 };
				default :
					 re.push(encodeNameAndValue(el.name,el.value));
					 break;
			};
		};
		return re.join('&');
	};
	//以ajax的形式提交表单
	function ajaxForm(form,onsuccess){
		ajax({
			type:form.method,
			url:form.action,
			data:serializeForm(form),
			onsuccess:onsuccess
		});
	};
	function hide(el){
		el && (el.style.display = 'none');
	};
	function show(el){
		el && (el.style.cssText = 'inline-block;*display:inline;*zoom:1;');
	};
	function extend(target,source){
		for(var key in source){
			target[key] = source[key];
		};
		return target;
	};
	function addEvent(el,type,fn){
		if(typeof el.addEventListener != 'undefined'){
			el.addEventListener(type,fn,false);
		}else if(typeof el.attachEvent != 'undefined'){
			el.attachEvent('on'+type,fn);
		}else{
			el['on'+type] = fn;
		};
	};
	function removeEvent(el,type,fn){
		if(typeof el.removeEventListener != 'undefined'){
			el.removeEventListener(type,fn,false);
		}else if(typeof el.detachEvent != 'undefined'){
			el.detachEvent('on'+type,fn);
		}else{
			el['on'+type] = null;
		};
	};
	function fireEvent(el,type){
	    if(typeof document.createEventObject == 'object'){
	        return el.fireEvent('on'+type);
	    }else{
	        var e = document.createEvent('HTMLEvents');
	        e.initEvent(type,true,true);
	        return !el.dispatchEvent(e);
	    };
	};
})(window)
