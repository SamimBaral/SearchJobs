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
		var count = 0;

//some flaws 
//I have not implemeted functionality to add two or more search parameter
		$.get(URL, function (data) {
			count = 0;
    			$(data).find("item").each(function () { 
    				count++;
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
    			if(count === 0) {
				$("#content ul").append('<li> <a href="https://duunitori.fi/"> <span class="Title"> Search result not found. </span> <span class="Publisher">Please try again with different input.</span></a> </li>');
			}
		});
		
	    });			
