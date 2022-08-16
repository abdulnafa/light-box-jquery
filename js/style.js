$(document).ready(function () {

    var mainindex;
    var total = 0;
    $(".oneImage").on("click", function () {

        var clickedIndex = "";
        clickedIndex = $(this).index();
        clickedIndex++;


        $(".boxMainDiv").show();
        var data = $(".fourImages").html();
        total = $(".oneImage").length;
        $(".mainDiv").html(`${data}<div class="next">
        <i class="fa-solid fa-angle-right"></i>
      </div>
      <div class="previous">
        <i class="fa-solid fa-angle-left"></i>
      </div>
      <div class="counting"><span class="changeNo"></span><span>/${total}</span></div>`);
        $(".counting .changeNo").html(clickedIndex);
        $(".mainDiv .oneImage").removeClass("oneImage").addClass("innerImagesDiv");

        $(".dotsImagesDiv").html(data);
        $(".dotsImagesDiv .oneImage").removeClass("oneImage").addClass("dotInner");
        $(".mainDiv div.innerImagesDiv:nth-child(" + clickedIndex + ")").addClass("active");
        $(".dotsImagesDiv div.dotInner:nth-child(" + clickedIndex + ")").addClass("active");


    });


    $(".crossDiv").on("click", function () {

        $(".boxMainDiv").hide();
        $(".mainDiv").empty();
        $(".dotsImagesDiv").empty();

    });


    $(document).on("click", ".mainDiv .next", function () {
        var elementShow = "";
        var currentIndex = $(".dotsImagesDiv .dotInner.active").index();
        elementShow = $(".dotsImagesDiv .dotInner.active").index();
        elementShow = elementShow + 2;

        console.log(currentIndex);
        if (currentIndex == total - 1) {
            $(".counting .changeNo").html(1);
            $(".dotsImagesDiv .dotInner").removeClass("active").first().addClass("active");
            $(".mainDiv .innerImagesDiv").removeClass("active").first().addClass("active");
        } else {
            $(".dotsImagesDiv .dotInner.active").removeClass("active").next().addClass("active");
            $(".mainDiv .innerImagesDiv.active").removeClass("active").next().addClass("active");
            $(".counting .changeNo").html(elementShow);
        }




    });

    $(document).on("click", ".mainDiv .previous", function () {

        var elementShow = "";
        var currentIndex = $(".dotsImagesDiv .dotInner.active").index();
        elementShow = $(".dotsImagesDiv .dotInner.active").prev().index();
        elementShow = elementShow + 1;

        if (currentIndex == 0) {
            $(".counting .changeNo").html(4);
            $(".dotsImagesDiv .dotInner").removeClass("active").last().addClass("active");
            $(".mainDiv .innerImagesDiv").removeClass("active").last().addClass("active");
        } else {
            $(".dotsImagesDiv .dotInner.active").removeClass("active").prev().addClass("active");
            $(".mainDiv .innerImagesDiv.active").removeClass("active").prev().addClass("active");
            $(".counting .changeNo").html(elementShow);
        }



    });

});