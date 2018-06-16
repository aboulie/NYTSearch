
$(document).ready(function(){

    numberOfRecords;

    var searchTerm = $('#search-term').val();
    var numberOfRecords = $('#number-of-records').val();
    var startYear;
    var endYear;
    var search = $('#submit').on('click', function(){
        
    });
    var clearResults;

    console.log(numberOfRecords);


    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
  'api-key': "f22d6d35cb4e4274af6aa57019dfce45",
  //Be sure to change the title search below! 'q' means the "search query term".//
  'q': "drugs",
  //Articles to be pulled begin at the date put here. Format is YYYYMMDD.//
  'begin_date': "19600101",
  //Articles to be pulled end at the date here. Format is YYYYMMDD.//
  'end_date': "19800101",
    });

    $.ajax({
        url: url,
        method: 'GET',
    }).then(function(response) {



        console.log(response);

    })

    



});


