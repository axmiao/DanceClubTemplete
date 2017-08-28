$(function(){
	// banner;
	var bannerSwiper = new Swiper('.ban-swiper-container',{
		loop:true,
		effect:'fade',
		autoplay:10000,
		speed:2000,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		pagination:'.swiper-pagination',
		autoplayDisableOnInteraction:false,
		fade:{
			crossFade:false,
		},
		paginationClickable:true
	});

	// 阅读更多；
	var newsdata = {
		data:[
			{
				title:'苏幕遮·怀旧',
				des:'碧云天，黄叶地。秋色连波，波上寒烟翠。山映斜阳天接水。芳草无情，更在斜阳外。黯乡魂，追旅思。夜夜除非，好梦留人睡。明月楼高休独倚。酒入愁肠，化作相思泪。',
				md:'12-04',
				year:'2011'
			},
			{
				title:'木兰花令',
				des:'人生若只如初见，何事秋风悲画扇？等闲变却故人心，却道故人心易变。骊山语罢清宵半，泪雨零铃终不怨。何如薄幸锦衣郎，比翼连枝当日愿。',
				md:'12-07',
				year:'2071'
			},
			{
				title:'长相思',
				des:'山一程，水一程，身向榆关那畔行，夜深千帐灯。风一更，雪一更，聒碎乡心梦不成，故园无此声。',
				md:'12-04',
				year:'2011'
			},
			{
				title:'画堂春',
				des:'一生一代一双人，争教两处销魂。相思相望不相亲，天为谁春。浆向蓝桥易乞，药成碧海难奔。若容相访饮牛津，相对忘贫。',
				md:'12-04',
				year:'2011'
			}

		]
	}
	$('.newsmore,.readmore').on('click',function(){
		$.each(newsdata.data,function(index,item){
			var newslist = $('<div class="news-list">'+
				'<div class="item-block">' + 
					'<div class="item-info">' +
						'<a href="#" class="item-a break">' + item.title + '</a>' +
						'<div class="item-des">' + item.des +
						'</div>' +
					'</div>' + 
					'<div class="item-date">' +
						'<span class="md">' + item.md + '</span>' +
						'<span class="year">' +item.year + '</span>' +
					'</div>' +
				'</div>' +						
			'</div>') 
			newslist.appendTo($('.news .inner'));
		})
	});

	// 缓加载效果；
	new WOW().init();

	// 输入框的label颜色变化；
	placeholder('.formblock-s input');
	placeholder('.formblock-b textarea');

	function placeholder(ele){
		$(ele).on('focus',function(){
		
			$(this).siblings('label').addClass('light');
			$(this).on('input',function(){
				$(this).siblings('label').removeClass('light').addClass('hide');
			})
			$(this).on('blur',function(){
				if($(this).val() == ''){
					$(this).siblings('label').removeClass('hide');
					$(this).siblings('label').removeClass('light');				
				}else{
					$(this).siblings('label').removeClass('light').addClass('hide');
				}
			})

		})
	}

	// 点击发送；
	$('#subBtn1').on('click',function(){
		var a = $('.nes');
		var b = $('.tips-error');
		var c = 0;
		for(var i = 0; i < a.length; i++){
			if(a.eq(i).val()==''){
				b.eq(i).show();
				c++;
			}else{
				b.eq(i).hide();
			}
		}
		if(c == 0){
			$('.tips-seccess').addClass('tips-show');
			$('.nes').val('');
			$('.nec').removeClass('hide');
		}
	})

	// 移动端menu弹出效果；
	var isMenuDown = false;
	$('.menudown').on('click',function(){
		if(isMenuDown == false){
			$('.menu-open').addClass('hiden');
			$('.menu-close').removeClass('hiden');
			$('.down').removeClass('down').addClass('up');
			$(".menu-ph").show().removeClass('menuhide').addClass('menushow');
			isMenuDown = true;
			return;
		}else{
			$('.menu-open').removeClass('hiden');
			$('.menu-close').addClass('hiden');
			$('.up').removeClass('up').addClass('down');
			$('.menu-ph').removeClass('menushow').addClass('menuhide');
			setTimeout(function(){
				$('.menu-ph').hide();
			},300);
			isMenuDown = false;
			return;
		}
	})

	// 返回顶部；
	addEventListener('scroll',function(){
		var scrollt = window.scrollY;
		if(scrollt >= 200){
			$('#toTop').show();
			$('#toTop').on('click',function(){
				$('body,html').stop().animate({scrollTop:0},500);
			})
		}else{
			$("#toTop").hide();
		}
	})

	// 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	var point = new BMap.Point(116.4489641892,39.8988930242);
	map.centerAndZoom(point, 17);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
	var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
	map.addControl(top_left_control);        
	map.addControl(top_left_navigation);  
	var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);               // 将标注添加到地图中
})