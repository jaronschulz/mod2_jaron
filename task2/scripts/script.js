function convertParty(party) {

    if (party == "R") {
        return "Republicans";
    } else if (party == "D") {
        return "Democrats";
    } else {
        return "Indipendent";
    }

}

$.getJSON("data/senate.json", function(data) {

    politicians = data.results[0].members;
    x = " ";
    for (var i = 0; i < politicians.length; i++) {
        var row = $("<tr>");
        var p = politicians[i];
        var fullname = [p.first_name, p.middle_name, p.last_name].filter(function(v) { return v !== null }).join(" ");
        var link = $("<a>").text(fullname).attr("href", p.url);


        $("<td>").append(link).appendTo(row);
        $("<td>").text(convertParty(p.party)).appendTo(row);
        $("<td>").text(p.state).appendTo(row);
        $("<td>").addClass("text-right").text(p.seniority).appendTo(row)
        
        $("<td>").addClass("text-right").text(p.votes_with_party_pct + " \%").appendTo(row);




        $("table tbody").append(row);
    };
});