window.onload=function(){

	load_template();

	
	set_container();

    set_scroll();		   

	//set_filimg();

	//set_img_less();

	//set_filters();
	alert(1);
}


var columns=['#column1','#column2','#column3'];

// function set_img_less(){
// 	window.setTimeout(function() {
// 		$('.img-less').each(function(){
// 		    fall_down($(this).siblings('.hidden-page'));
// 		    $(this).children('.hidden-page').css('backgroundColor','rgba(75,74,74,0.9)');
// 		});
// 	},100);
// }

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
	        	$(".filter").find('.active').removeClass("bg-danger");
	        	$(".filter").find('.active').addClass("bg-primary");
	            $(".filter").find('.active').removeClass("active");
	            
	            $this.addClass("active");
	            
	             // set the active tab
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

function load_template(){
	var news = [
        { hid_id: "id1" , categories: "category-1 category-3", img_status: "img" ,img_link : "Resources/pic/1.jpg", title : "习近平：加快构建中国特色哲学社会科学",
        demo_paragraph:"新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、中央军委主席习近平17日上午在京主持召开哲学社会科学工作座谈会并发表重要讲话。", 
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电中共中央总书记、国家主席、他强调，一个没有发达的自然科学的国家不可能走在世界前列，一个没有繁荣的哲学社会科学的国家也不可能走在世界前列。坚持和发展中国特色社会主义，哲学社会科学具有不可替代的重要地位，哲学社会科学工作者具有不可替代的重要作用。坚持和发展中国特色社会主义，必须高度重视哲学社会科学，结合中国特色社会主义伟大实践，加快构建中国特色哲学社会科学。他强调，一个没有发达的自然科学的国家不可能走在世界前列，一个没有繁荣的哲学社会科学的国家也不可能走在世界前列。坚持和发展中国特色社会主义，哲学社会科学具有不可替代的重要地位，哲学社会科学工作者具有不可替代的重要作用。坚持和发展中国特色社会主义，必须高度重视哲学社会科学，结合中国特色社会主义伟大实践，加快构建中国特色哲学社会科学。他强调，一个没有发达的自然科学的国家不可能走在世界前列，一个没有繁荣的哲学社会科学的国家也不可能走在世界前列。坚持和发展中国特色社会主义，哲学社会科学具有不可替代的重要地位，哲学社会科学工作者具有不可替代的重要作用。坚持和发展中国特色社会主义，必须高度重视哲学社会科学，结合中国特色社会主义伟大实践，加快构建中国特色哲学社会科学。",time_dev:'22 hours', source_link: 'http://news.ifeng.com/a/20160517/48786384_0.shtml'
        },
        { hid_id: "id2" , categories: "category-1 category-2", img_status: "" ,img_link : "Resources/HK/bgImg.jpg", title : "张德江将参观香港科学园 了解创新科技情况",
        demo_paragraph:"香港科学园区是香港高新科技以及应用科技的一个研发基地，从2001年开始启用，目前分为三期一共有600多家的企业进驻，提供一万三千多个就业岗位，主要以创新科技企业为主。", 
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、张德江此行也是要了解香港创新科技的一个发展情况，目前香港特区政府也是大力推展创新科技的发展，科学园区也是扮演着非常重要的角色。科学园区将会在今年夏天建成亚洲最大的数据信息中心，也是提供给软件的开发者以及学术研究来使用的。张德江此行也会到里面参观部分的创科企业，听取一个最新科研成果。以上是我们在现场了解到的最新情形，先把时间交还给您，亚蒨。张德江此行也是要了解香港创新科技的一个发展情况，目前香港特区政府也是大力推展创新科技的发展，科学园区也是扮演着非常重要的角色。科学园区将会在今年夏天建成亚洲最大的数据信息中心，也是提供给软件的开发者以及学术研究来使用的。张德江此行也会到里面参观部分的创科企业，听取一个最新科研成果。以上是我们在现场了解到的最新情形，先把时间交还给您，亚蒨。",time_dev:'30 minutes', source_link: 'http://news.ifeng.com/a/20160518/48794685_0.shtml'
        },
        { hid_id: "id3" , categories: "category-1 category-3", img_status: "img" ,img_link : "Resources/World/2/pics/1.jpg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        demo_paragraph:"Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri",
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、",time_dev:'2 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { hid_id: "id4" , categories: "category-1 category-2", img_status: "img" ,img_link : "Resources/HK/4/pics/1.jpg", title : "张德江抵达香港画面",
        demo_paragraph:"5月17日中午，全国人大委员长张德江专机抵达香港，香港特别行政区行政长官梁振英、中央人民政府驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。",
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、",time_dev:'2 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { hid_id: "id5" , categories: "category-2", img_status: "" ,img_link : "Resources/World/3/pics/1.jpg", title : "RNC chairman: Third-party run would be a 'suicide mission'",
        demo_paragraph:"Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri",
        all_paragraphs: "Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.",time_dev:'2 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { hid_id: "id6" , categories: "category-3", img_status: "" ,img_link : "Resources/World/1/pics/1.jpeg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        demo_paragraph:"They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,",
        all_paragraphs: "They can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another party",time_dev:'3 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },	
        { hid_id: "id7" , categories: "category-3", img_status: "img" ,img_link : "Resources/World/4/pics/1.jpg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        demo_paragraph:"They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,",
        all_paragraphs: "They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,",time_dev:'3 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },{ hid_id: "id8" , categories: "category-1 category-3", img_status: "" ,img_link : "Resources/pic/1.jpg", title : "习近平：加快构建中国特色哲学社会科学",
        demo_paragraph:"新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、中央军委主席习近平17日上午在京主持召开哲学社会科学工作座谈会并发表重要讲话。", 
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电中共中央总书记、国家主席、他强调，一个没有发达的自然科学的国家不可能走在世界前列，一个没有繁荣的哲学社会科学的国家也不可能走在世界前列。坚持和发展中国特色社会主义，哲学社会科学具有不可替代的重要地位，哲学社会科学工作者具有不可替代的重要作用。坚持和发展中国特色社会主义，必须高度重视哲学社会科学，结合中国特色社会主义伟大实践，加快构建中国特色哲学社会科学。他强调，一个没有发达的自然科学的国家不可能走在世界前列，一个没有繁荣的哲学社会科学的国家也不可能走在世界前列。坚持和发展中国特色社会主义，哲学社会科学具有不可替代的重要地位，哲学社会科学工作者具有不可替代的重要作用。坚持和发展中国特色社会主义，必须高度重视哲学社会科学，结合中国特色社会主义伟大实践，加快构建中国特色哲学社会科学。他强调，一个没有发达的自然科学的国家不可能走在世界前列，一个没有繁荣的哲学社会科学的国家也不可能走在世界前列。坚持和发展中国特色社会主义，哲学社会科学具有不可替代的重要地位，哲学社会科学工作者具有不可替代的重要作用。坚持和发展中国特色社会主义，必须高度重视哲学社会科学，结合中国特色社会主义伟大实践，加快构建中国特色哲学社会科学。",time_dev:'22 hours', source_link: 'http://news.ifeng.com/a/20160517/48786384_0.shtml'
        },
        { hid_id: "id9" , categories: "category-1 category-2", img_status: "" ,img_link : "Resources/HK/bgImg.jpg", title : "张德江将参观香港科学园 了解创新科技情况",
        demo_paragraph:"香港科学园区是香港高新科技以及应用科技的一个研发基地，从2001年开始启用，目前分为三期一共有600多家的企业进驻，提供一万三千多个就业岗位，主要以创新科技企业为主。", 
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、张德江此行也是要了解香港创新科技的一个发展情况，目前香港特区政府也是大力推展创新科技的发展，科学园区也是扮演着非常重要的角色。科学园区将会在今年夏天建成亚洲最大的数据信息中心，也是提供给软件的开发者以及学术研究来使用的。张德江此行也会到里面参观部分的创科企业，听取一个最新科研成果。以上是我们在现场了解到的最新情形，先把时间交还给您，亚蒨。张德江此行也是要了解香港创新科技的一个发展情况，目前香港特区政府也是大力推展创新科技的发展，科学园区也是扮演着非常重要的角色。科学园区将会在今年夏天建成亚洲最大的数据信息中心，也是提供给软件的开发者以及学术研究来使用的。张德江此行也会到里面参观部分的创科企业，听取一个最新科研成果。以上是我们在现场了解到的最新情形，先把时间交还给您，亚蒨。",time_dev:'30 minutes', source_link: 'http://news.ifeng.com/a/20160518/48794685_0.shtml'
        },
        { hid_id: "id10" , categories: "category-1 category-3", img_status: "" ,img_link : "Resources/World/2/pics/1.jpg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        demo_paragraph:"Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri",
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、",time_dev:'2 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { hid_id: "id11" , categories: "category-1 category-2", img_status: "" ,img_link : "Resources/HK/4/pics/1.jpg", title : "张德江抵达香港画面",
        demo_paragraph:"5月17日中午，全国人大委员长张德江专机抵达香港，香港特别行政区行政长官梁振英、中央人民政府驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。",
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、",time_dev:'2 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { hid_id: "id12" , categories: "category-2", img_status: "" ,img_link : "Resources/World/3/pics/1.jpg", title : "RNC chairman: Third-party run would be a 'suicide mission'",
        demo_paragraph:"Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri",
        all_paragraphs: "Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.",time_dev:'2 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { hid_id: "id13" , categories: "category-3", img_status: "" ,img_link : "Resources/World/1/pics/1.jpeg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        demo_paragraph:"They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,",
        all_paragraphs: "They can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another party",time_dev:'3 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },	
        { hid_id: "id14" , categories: "category-3", img_status: "" ,img_link : "Resources/World/4/pics/1.jpg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        demo_paragraph:"They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,",
        all_paragraphs: "They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,",time_dev:'3 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },{ hid_id: "id15" , categories: "category-1 category-3", img_status: "" ,img_link : "Resources/pic/1.jpg", title : "习近平：加快构建中国特色哲学社会科学",
        demo_paragraph:"新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、中央军委主席习近平17日上午在京主持召开哲学社会科学工作座谈会并发表重要讲话。", 
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电中共中央总书记、国家主席、他强调，一个没有发达的自然科学的国家不可能走在世界前列，一个没有繁荣的哲学社会科学的国家也不可能走在世界前列。坚持和发展中国特色社会主义，哲学社会科学具有不可替代的重要地位，哲学社会科学工作者具有不可替代的重要作用。坚持和发展中国特色社会主义，必须高度重视哲学社会科学，结合中国特色社会主义伟大实践，加快构建中国特色哲学社会科学。他强调，一个没有发达的自然科学的国家不可能走在世界前列，一个没有繁荣的哲学社会科学的国家也不可能走在世界前列。坚持和发展中国特色社会主义，哲学社会科学具有不可替代的重要地位，哲学社会科学工作者具有不可替代的重要作用。坚持和发展中国特色社会主义，必须高度重视哲学社会科学，结合中国特色社会主义伟大实践，加快构建中国特色哲学社会科学。他强调，一个没有发达的自然科学的国家不可能走在世界前列，一个没有繁荣的哲学社会科学的国家也不可能走在世界前列。坚持和发展中国特色社会主义，哲学社会科学具有不可替代的重要地位，哲学社会科学工作者具有不可替代的重要作用。坚持和发展中国特色社会主义，必须高度重视哲学社会科学，结合中国特色社会主义伟大实践，加快构建中国特色哲学社会科学。",time_dev:'22 hours', source_link: 'http://news.ifeng.com/a/20160517/48786384_0.shtml'
        },
        { hid_id: "id16" , categories: "category-1 category-2", img_status: "" ,img_link : "Resources/HK/bgImg.jpg", title : "张德江将参观香港科学园 了解创新科技情况",
        demo_paragraph:"香港科学园区是香港高新科技以及应用科技的一个研发基地，从2001年开始启用，目前分为三期一共有600多家的企业进驻，提供一万三千多个就业岗位，主要以创新科技企业为主。", 
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、张德江此行也是要了解香港创新科技的一个发展情况，目前香港特区政府也是大力推展创新科技的发展，科学园区也是扮演着非常重要的角色。科学园区将会在今年夏天建成亚洲最大的数据信息中心，也是提供给软件的开发者以及学术研究来使用的。张德江此行也会到里面参观部分的创科企业，听取一个最新科研成果。以上是我们在现场了解到的最新情形，先把时间交还给您，亚蒨。张德江此行也是要了解香港创新科技的一个发展情况，目前香港特区政府也是大力推展创新科技的发展，科学园区也是扮演着非常重要的角色。科学园区将会在今年夏天建成亚洲最大的数据信息中心，也是提供给软件的开发者以及学术研究来使用的。张德江此行也会到里面参观部分的创科企业，听取一个最新科研成果。以上是我们在现场了解到的最新情形，先把时间交还给您，亚蒨。",time_dev:'30 minutes', source_link: 'http://news.ifeng.com/a/20160518/48794685_0.shtml'
        },
        { hid_id: "id17" , categories: "category-1 category-3", img_status: "" ,img_link : "Resources/World/2/pics/1.jpg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        demo_paragraph:"Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri",
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、",time_dev:'2 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { hid_id: "id18" , categories: "category-1 category-2", img_status: "" ,img_link : "Resources/HK/4/pics/1.jpg", title : "张德江抵达香港画面",
        demo_paragraph:"5月17日中午，全国人大委员长张德江专机抵达香港，香港特别行政区行政长官梁振英、中央人民政府驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。",
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、",time_dev:'2 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { hid_id: "id19" , categories: "category-2", img_status: "" ,img_link : "Resources/World/3/pics/1.jpg", title : "RNC chairman: Third-party run would be a 'suicide mission'",
        demo_paragraph:"Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri",
        all_paragraphs: "Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.",time_dev:'2 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { hid_id: "id20" , categories: "category-3", img_status: "" ,img_link : "Resources/World/1/pics/1.jpeg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        demo_paragraph:"They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,",
        all_paragraphs: "They can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another party",time_dev:'3 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },	
        { hid_id: "id21" , categories: "category-3", img_status: "" ,img_link : "Resources/World/4/pics/1.jpg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        demo_paragraph:"They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,",
        all_paragraphs: "They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,",time_dev:'3 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },{ hid_id: "id22" , categories: "category-1 category-3", img_status: "" ,img_link : "Resources/pic/1.jpg", title : "习近平：加快构建中国特色哲学社会科学",
        demo_paragraph:"新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、中央军委主席习近平17日上午在京主持召开哲学社会科学工作座谈会并发表重要讲话。", 
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电中共中央总书记、国家主席、他强调，一个没有发达的自然科学的国家不可能走在世界前列，一个没有繁荣的哲学社会科学的国家也不可能走在世界前列。坚持和发展中国特色社会主义，哲学社会科学具有不可替代的重要地位，哲学社会科学工作者具有不可替代的重要作用。坚持和发展中国特色社会主义，必须高度重视哲学社会科学，结合中国特色社会主义伟大实践，加快构建中国特色哲学社会科学。他强调，一个没有发达的自然科学的国家不可能走在世界前列，一个没有繁荣的哲学社会科学的国家也不可能走在世界前列。坚持和发展中国特色社会主义，哲学社会科学具有不可替代的重要地位，哲学社会科学工作者具有不可替代的重要作用。坚持和发展中国特色社会主义，必须高度重视哲学社会科学，结合中国特色社会主义伟大实践，加快构建中国特色哲学社会科学。他强调，一个没有发达的自然科学的国家不可能走在世界前列，一个没有繁荣的哲学社会科学的国家也不可能走在世界前列。坚持和发展中国特色社会主义，哲学社会科学具有不可替代的重要地位，哲学社会科学工作者具有不可替代的重要作用。坚持和发展中国特色社会主义，必须高度重视哲学社会科学，结合中国特色社会主义伟大实践，加快构建中国特色哲学社会科学。",time_dev:'22 hours', source_link: 'http://news.ifeng.com/a/20160517/48786384_0.shtml'
        },
        { hid_id: "id23" , categories: "category-1 category-2", img_status: "" ,img_link : "Resources/HK/bgImg.jpg", title : "张德江将参观香港科学园 了解创新科技情况",
        demo_paragraph:"香港科学园区是香港高新科技以及应用科技的一个研发基地，从2001年开始启用，目前分为三期一共有600多家的企业进驻，提供一万三千多个就业岗位，主要以创新科技企业为主。", 
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、张德江此行也是要了解香港创新科技的一个发展情况，目前香港特区政府也是大力推展创新科技的发展，科学园区也是扮演着非常重要的角色。科学园区将会在今年夏天建成亚洲最大的数据信息中心，也是提供给软件的开发者以及学术研究来使用的。张德江此行也会到里面参观部分的创科企业，听取一个最新科研成果。以上是我们在现场了解到的最新情形，先把时间交还给您，亚蒨。张德江此行也是要了解香港创新科技的一个发展情况，目前香港特区政府也是大力推展创新科技的发展，科学园区也是扮演着非常重要的角色。科学园区将会在今年夏天建成亚洲最大的数据信息中心，也是提供给软件的开发者以及学术研究来使用的。张德江此行也会到里面参观部分的创科企业，听取一个最新科研成果。以上是我们在现场了解到的最新情形，先把时间交还给您，亚蒨。",time_dev:'30 minutes', source_link: 'http://news.ifeng.com/a/20160518/48794685_0.shtml'
        },
        { hid_id: "id24" , categories: "category-1 category-3", img_status: "" ,img_link : "Resources/World/2/pics/1.jpg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        demo_paragraph:"Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri",
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、",time_dev:'2 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { hid_id: "id25" , categories: "category-1 category-2", img_status: "" ,img_link : "Resources/HK/4/pics/1.jpg", title : "张德江抵达香港画面",
        demo_paragraph:"5月17日中午，全国人大委员长张德江专机抵达香港，香港特别行政区行政长官梁振英、中央人民政府驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。",
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、",time_dev:'2 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { hid_id: "id26" , categories: "category-2", img_status: "" ,img_link : "Resources/World/3/pics/1.jpg", title : "RNC chairman: Third-party run would be a 'suicide mission'",
        demo_paragraph:"Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri",
        all_paragraphs: "Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.",time_dev:'2 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { hid_id: "id27" , categories: "category-3", img_status: "" ,img_link : "Resources/World/1/pics/1.jpeg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        demo_paragraph:"They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,",
        all_paragraphs: "They can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another party",time_dev:'3 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },	
        { hid_id: "id28" , categories: "category-3", img_status: "" ,img_link : "Resources/World/4/pics/1.jpg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        demo_paragraph:"They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,",
        all_paragraphs: "They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,",time_dev:'3 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },{ hid_id: "id29" , categories: "category-1 category-3", img_status: "" ,img_link : "Resources/pic/1.jpg", title : "习近平：加快构建中国特色哲学社会科学",
        demo_paragraph:"新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、中央军委主席习近平17日上午在京主持召开哲学社会科学工作座谈会并发表重要讲话。", 
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电中共中央总书记、国家主席、他强调，一个没有发达的自然科学的国家不可能走在世界前列，一个没有繁荣的哲学社会科学的国家也不可能走在世界前列。坚持和发展中国特色社会主义，哲学社会科学具有不可替代的重要地位，哲学社会科学工作者具有不可替代的重要作用。坚持和发展中国特色社会主义，必须高度重视哲学社会科学，结合中国特色社会主义伟大实践，加快构建中国特色哲学社会科学。他强调，一个没有发达的自然科学的国家不可能走在世界前列，一个没有繁荣的哲学社会科学的国家也不可能走在世界前列。坚持和发展中国特色社会主义，哲学社会科学具有不可替代的重要地位，哲学社会科学工作者具有不可替代的重要作用。坚持和发展中国特色社会主义，必须高度重视哲学社会科学，结合中国特色社会主义伟大实践，加快构建中国特色哲学社会科学。他强调，一个没有发达的自然科学的国家不可能走在世界前列，一个没有繁荣的哲学社会科学的国家也不可能走在世界前列。坚持和发展中国特色社会主义，哲学社会科学具有不可替代的重要地位，哲学社会科学工作者具有不可替代的重要作用。坚持和发展中国特色社会主义，必须高度重视哲学社会科学，结合中国特色社会主义伟大实践，加快构建中国特色哲学社会科学。",time_dev:'22 hours', source_link: 'http://news.ifeng.com/a/20160517/48786384_0.shtml'
        },
        { hid_id: "id30" , categories: "category-1 category-2", img_status: "" ,img_link : "Resources/HK/bgImg.jpg", title : "张德江将参观香港科学园 了解创新科技情况",
        demo_paragraph:"香港科学园区是香港高新科技以及应用科技的一个研发基地，从2001年开始启用，目前分为三期一共有600多家的企业进驻，提供一万三千多个就业岗位，主要以创新科技企业为主。", 
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、张德江此行也是要了解香港创新科技的一个发展情况，目前香港特区政府也是大力推展创新科技的发展，科学园区也是扮演着非常重要的角色。科学园区将会在今年夏天建成亚洲最大的数据信息中心，也是提供给软件的开发者以及学术研究来使用的。张德江此行也会到里面参观部分的创科企业，听取一个最新科研成果。以上是我们在现场了解到的最新情形，先把时间交还给您，亚蒨。张德江此行也是要了解香港创新科技的一个发展情况，目前香港特区政府也是大力推展创新科技的发展，科学园区也是扮演着非常重要的角色。科学园区将会在今年夏天建成亚洲最大的数据信息中心，也是提供给软件的开发者以及学术研究来使用的。张德江此行也会到里面参观部分的创科企业，听取一个最新科研成果。以上是我们在现场了解到的最新情形，先把时间交还给您，亚蒨。",time_dev:'30 minutes', source_link: 'http://news.ifeng.com/a/20160518/48794685_0.shtml'
        },
        { hid_id: "id31" , categories: "category-1 category-3", img_status: "" ,img_link : "Resources/World/2/pics/1.jpg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        demo_paragraph:"Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri",
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、",time_dev:'2 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { hid_id: "id32" , categories: "category-1 category-2", img_status: "" ,img_link : "Resources/HK/4/pics/1.jpg", title : "张德江抵达香港画面",
        demo_paragraph:"5月17日中午，全国人大委员长张德江专机抵达香港，香港特别行政区行政长官梁振英、中央人民政府驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。驻香港联络办公室主任张晓明与香港各界代表到机场迎接。",
        all_paragraphs: "新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、新华社北京5月17日电 （记者吴晶、华春雨）中共中央总书记、国家主席、",time_dev:'2 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { hid_id: "id33" , categories: "category-2", img_status: "" ,img_link : "Resources/World/3/pics/1.jpg", title : "RNC chairman: Third-party run would be a 'suicide mission'",
        demo_paragraph:"Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri",
        all_paragraphs: "Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.Muslims enteri Donald J. Trump is calling for a total and complete shutdown of Muslims enteri Donald J.",time_dev:'2 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },
        { hid_id: "id34" , categories: "category-3", img_status: "" ,img_link : "Resources/World/1/pics/1.jpeg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        demo_paragraph:"They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,",
        all_paragraphs: "They can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another partyThey can try to hijack another party and get on the ballot, but, look,They can try to hijack another party",time_dev:'3 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        },	
        { hid_id: "id35" , categories: "category-3", img_status: "" ,img_link : "Resources/World/4/pics/1.jpg", title : "Donald Trump: Ban all Muslim travel to U.S.. ",
        demo_paragraph:"They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot, but, look,",
        all_paragraphs: "They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,They can try to hijack another party and get on the ballot, but, look,They can try to hijack another party and get on the ballot,",time_dev:'3 days', source_link: 'http://edition.cnn.com/2015/12/07/politics/donald-trump-muslim-ban-immigration/'
        }
    ];

    
    
    
	
	var $img_template=$('#img_template');
	var $imgless_template=$('#imgless_template');

	//use 3 column template. 
	for(i=0;i<news.length;i++)
	{	
		m=lowest_column(i);
		if(news[i].img_status=='img')
			$(columns[m]).append($img_template.tmpl(news[i]));
		else
			$(columns[m]).append($imgless_template.tmpl(news[i]));
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
			return j;
		}
			
	}
		
	

	return 0;
}

