//Following is triggered after click event
	
	document.getElementById("submit").addEventListener("click", function() {
		document.getElementById("lists").innerHTML ="";
		var name = document.getElementById("search").value;
		var area = document.getElementById("areaToSearch").value;
		var URL = "https://duunitori.fi/api/v1/jobentries?search="+name+"&area="+area+"&sho=1&format=rss";

		var header;
		var title;
		var publisher;
		var link;
		var publishedDate;
		var description;
		var description2;

//some flaws 
//validatation of input is not implemented because of the excuse that I have written in the mail :) ... I have not implemeted functionality to add two or more search parameter
		$.get(URL, function (data) {
    		$(data).find("item").each(function () { 
		        var element = $(this);
		        header = element.find("title").text();
		        title = header.substring(0, header.indexOf(","))
		        publisher = header.substring(header.indexOf(",") + 2)
		        link = element.find("link").text();
		        publishedDate = element.find("pubDate").text().substring(0,16);
		        description = element.find("description").text(); 
		        description2 = description.substring(description.indexOf("/>") +2 );
		     
		    	 $("#content ul").append('<li> <a href="'+link+'"> <span class="Title">'+title+' </span> <span class="Publisher">'+publisher+'</span> <span class="PublishedDate">'+publishedDate+' </span> <span class="Description">'+description2+'</span> </a> </li>');

    			});
			});
		});			