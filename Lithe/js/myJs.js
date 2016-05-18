window.onload=function(){


	load_template();

	set_container();

    set_scroll();		   

	set_filimg();

	set_img_less();

	set_filters();

	
}

function raise_up($this){
	//calculate heights to fit the img
	var parentHeight=$this.parent().height();
	var hHeight=$this.children("h3").height();
	var pHeight=parentHeight-hHeight;
	
	$this.css('backgroundColor','rgba(75, 75, 74, 0.8)');
	//add padding to smooth the layout
	$this.children("p").show().animate({height:pHeight-60},500);
	$this.children(".hover-footer").show().animate({height:30},500);
};

function set_filimg(){
	$('.filimg:not(.img-less)').mouseenter(function(){raise_up($(this).children('.hover-page'))});

	$('.filimg:not(.img-less)').mouseleave(function(){

		var $this = $(this).children(".hover-page");
		//increase background opacity for better reading experience.
		$this.css('backgroundColor','rgba(75, 75, 74, 0.5)');
		//clearQueue() is for truncing all the redundent animation due to fast mouseenter/leave
		$this.children("p").animate({height:0},300,function(){$(this).hide();$this.children('*').clearQueue();});
		$this.children(".hover-footer").animate({height:0},300).hide();
	});
}

function set_img_less(){
	window.setTimeout(function() {
		$('.img-less').each(function(){
		    raise_up($(this).children('.hover-page'));
		    $(this).children('.hover-page').css('backgroundColor','rgba(75,74,74,0.9)');
		});
	},100);
}

function set_scroll(){
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		        var target = $(this.hash);
		        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		        if (target.length) {
		            $('html,body').animate({scrollTop: target.offset().top}, 1000);
		        	return false;
		        }
			}
		});
	});

	$('.quotes').quovolver({
		equalHeight   : true
	});
}

function set_filters(){
	jQuery(function ($) {
	    // fancybox
	    $(".fancybox").fancybox({
	        modal: true, // disable regular nav and close buttons
	        // add buttons helper (requires buttons helper js and css files)
	        helpers: {
	            buttons: {}
	        } 
	    });
	    // filter selector
	    $(".filter").on("click", function () {
	        var $this = $(this);
	        // if we click the active tab, do nothing
	        if ( !$this.hasClass("active") ) {
	            $(".filter").removeClass("active");
	            $this.addClass("active"); // set the active tab
	            // get the data-rel value from selected tab and set as filter
	            var $filter = $this.data("rel"); 
	            // if we select view all, return to initial settings and show all
	            $filter == 'all' ? 
	                $(".fancybox")
	                .attr("data-fancybox-group", "gallery")
	                .not(":visible")
	                .fadeIn() 
	            : // otherwise
	                $(".fancybox")
	                .fadeOut(0)
	                .filter(function () {
	                    // set data-filter value as the data-rel value of selected tab
	                    return $(this).data("filter") == $filter; 
	                })
	                // set data-fancybox-group and show filtered elements
	                .attr("data-fancybox-group", $filter)
	                .fadeIn(1000); 
	        } // if
	    }); // on
	}); // ready
}

function set_container(){
	$(document).ready(function() {
	    	 
	      $("#owl-demo").owlCarousel({
	        autoPlay: 4000,
	        items : 4,
	        itemsDesktop : [1199,3],
	        itemsDesktopSmall : [979,3]
	      });

	    });

	$(function(){

			// Instantiate MixItUp:

			$('#Container').mixItUp();

		});
}
var columns=['#column1','#column2','#column3'];
function load_template(){

	var news = [
        { categories: "category-1 category-3", img_status: "" ,img_link : "Resources/pic/1.jpg", title : "习近平：加快构建中国特色哲学社会科学",
        paragraphs:"新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、中央军委主席习近平17日上午在京主持召开哲学社会科学工作座谈会并发表重要讲话。他强调，一个没有发达的自然科学的国家不可能走在世界前列，一个没有繁荣的哲学社会科学的国家也不可能走在世界前列。坚持和发展中国特色社会主义，哲学社会科学具有不可替代的重要地位，哲学社会科学工作者具有不可替代的重要作用。坚持和发展中国特色社会主义，必须高度重视哲学社会科学，结合中国特色社会主义伟大实践，加快构建中国特色哲学社会科学。", 
        time_dev:'22 hours ago', source_link: 'http://news.ifeng.com/a/20160517/48786384_0.shtml'
        },
        { categories: "category-1 category-2", img_status: "img-less" ,img_link : "Resources/HK/bgImg.jpg", title : "张德江将参观香港科学园 了解创新科技情况",
        paragraphs:"香港科学园区是香港高新科技以及应用科技的一个研发基地，从2001年开始启用，目前分为三期一共有600多家的企业进驻，提供一万三千多个就业岗位，主要以创新科技企业为主。张德江此行也是要了解香港创新科技的一个发展情况，目前香港特区政府也是大力推展创新科技的发展，科学园区也是扮演着非常重要的角色。科学园区将会在今年夏天建成亚洲最大的数据信息中心，也是提供给软件的开发者以及学术研究来使用的。张德江此行也会到里面参观部分的创科企业，听取一个最新科研成果。以上是我们在现场了解到的最新情形，先把时间交还给您，亚蒨。", 
        time_dev:'30 minutes', source_link: 'http://news.ifeng.com/a/20160518/48794685_0.shtml'
        },
        { categories: "category-1 category-3", img_status: "" ,img_link : "Resources/World/2/pics/1.jpg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        paragraphs:"Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri",
        time_dev:'2 days ago', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { categories: "category-1 category-2", img_status: "" ,img_link : "Resources/HK/4/pics/1.jpg", title : "张德江抵达香港画面",
        paragraphs:"5月17日中午，全国人大委员长张德江专机抵达香港，香港特别行政区行政长官梁振英、中央人民政府驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。"
        ,time_dev:'2 days ago', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { categories: "category-2", img_status: "" ,img_link : "Resources/World/3/pics/1.jpg", title : "RNC chairman: Third-party run would be a 'suicide mission'",
        paragraphs:"Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri",
        time_dev:'2 days ago', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { categories: "category-3", img_status: "" ,img_link : "Resources/World/1/pics/1.jpeg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        paragraphs:"They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,",
        time_dev:'3 days ago', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },	
        { categories: "category-3", img_status: "" ,img_link : "Resources/World/4/pics/1.jpg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        paragraphs:"They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,",
        time_dev:'3 days ago', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        }
    ];

    
    
    
	
	var $template=$('#block_template');

	//use 3 column template. 
	for(i=0;i<news.length;i++)
	{	
		m=lowest_column(i);
		$(columns[m]).append($template.tmpl(news[i]));
		setTimeout(function(){}, 10)
	}


    
    
}

function lowest_column(x){
	
	var h=[];

	for(j=0;j<3;j++){
		h[j]=$(columns[j]).height();
	}
	
	min=Math.min(h[0],h[1]);
	min=Math.min(min,h[2]);
	
	for(j=0;j<3;j++){
		if(min==h[j]){
			alert(min+'   '+j);
			return j;
		}
			
	}
		
	

	return 0;
}

