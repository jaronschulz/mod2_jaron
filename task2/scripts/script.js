// $.getJSON("data/congress-113-senate.json", function(data) {

//     politicians = data.results[0].members;
//     x = " ";
//     for (var i = 0; i < politicians.length; i++) {
//         var row = $("<tr>");
//         var p = politicians[i];
//         var fullname = [p.first_name, p.middle_name, p.last_name].filter(function(v) { return v !== null }).join(" ");
//         var link = $("<a>").text(fullname).attr("href", p.url);


//         $("<td>").append(link).appendTo(row);
//         $("<td>").text(convertParty(p.party)).appendTo(row);
//         $("<td>").text(p.state).appendTo(row);
//         $("<td>").addClass("text-right").text(p.seniority).appendTo(row)

//         $("<td>").addClass("text-right").text(p.votes_with_party_pct + " \%").appendTo(row);




//         $("table tbody").append(row);
//     };
// });



function DataHandler() {

    this.chamber = "";
    this.jsonURL = "";
    this.rawData = "";
    this.members = [];
    this.filterStatus = {
        "D": true,
        "I": true,
        "R": true,
        "state": ""
    };

    //Find out on wich page we are and store into vars
    this.init = function() {

        console.log('initilizing')

        this.chamber = $("body").data("congress");
        this.jsonURL = "data/congress-113-" + this.chamber + ".json";

        console.log(this.jsonURL + " loaded");
        this.loadMembersJson();
        this.loadStateJson();
        this.changeListener();

    }


    //Depending on the Page, we load rawData & call createTable
    this.loadMembersJson = function() {
        var that = this;
        $.getJSON(that.jsonURL, function(response) {
            that.rawData = response;
            that.members = that.rawData.results[0].members;
            that.createTable();
        });
    }

    // Loading States
    this.loadStateJson = function() {
    	var that = this;
    	var optionsArr = [];
    	$.getJSON('data/states.json', function (response) {
    		$(response).each(function(i){
    			response[i];
    			var option = $("<option>").attr('value', response[i].code).text(response[i].name);
    			optionsArr.push(option);
    		});

    		$("#statesFilter").append(optionsArr);

    		console.log(optionsArr)
    	})
    }

    //Converting data (Party)

    this.convertParty = function(party) {

        if (party == "R") {
            return "Republicans";
        } else if (party == "D") {
            return "Democrats";
        } else {
            return "Indipendent";
        }

    }


    // 3. Write var-data into table

    this.createTable = function() {
        var rowArray = [];
        var displayedMembers = this.filterMembers(this.members)

        for (var i = 0; i < displayedMembers.length; i++) {

            var row = $("<tr>");
            var fullname = [displayedMembers[i].first_name, displayedMembers[i].middle_name, displayedMembers[i].last_name].join(" ").replace("  ", " ");
            var link = $("<a>").text(fullname).attr("href", displayedMembers[i].url);


            $("<td>").append(link).appendTo(row);
            $("<td>").text(this.convertParty(displayedMembers[i].party)).appendTo(row);
            $("<td>").text(displayedMembers[i].state).appendTo(row);
            $("<td>").addClass("text-right").text(displayedMembers[i].seniority).appendTo(row)
            $("<td>").addClass("text-right").text(displayedMembers[i].votes_with_party_pct + " \%").appendTo(row);
            rowArray.push(row);

        }

        $("table tbody").html("").append(rowArray);
    }

    // Filter 
    this.filterMembers = function(members) {
        var that = this;
        
        return members.filter(function(member) {

            if (!that.filterStatus[member.party]) {
                return false;

    		}
    		else if (that.filterStatus.state && member.state != that.filterStatus.state) {
    			return false;
    		}
    		else {
    			
            return true;
    		}
    			
    		
        })
    }

    this.changeListener = function() {
        var that = this;
        $("input, select").on('change', function() {
            // .. update the SSOT, 
            that.filterStatus.I = $("#I").is(':checked');
            that.filterStatus.R = $("#R").is(':checked');
            that.filterStatus.D = $("#D").is(':checked');
            that.filterStatus.state = $("#statesFilter").val();
            // .. call createTable
            that.createTable();

        })
    }
};

var dataHandler = new DataHandler();

$(function() {
    dataHandler.init();
})