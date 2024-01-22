// API Docs: https://www.thebluealliance.com/apidocs/v3

// TBAInterface funcitons to pull data from TheBlueAlliance.com
var teams = null;
var schedule = null;
var authKey = "uTHeEfPigDp9huQCpLNkWK7FBQIb01Qrzvt4MAjh9z2WQDkrsvNE77ch6bOPvPb6";

function getEvents(year) {
	return getAPIDataFromURL("https://www.thebluealliance.com/api/v3/events/" + year + "/simple");
}

function getTeams(eventCode) {
	return getAPIDataFromURL("https://www.thebluealliance.com/api/v3/event/" + eventCode + "/teams/simple");
}

function getMatches(eventCode) {
	return getAPIDataFromURL("https://www.thebluealliance.com/api/v3/event/" + eventCode + "/matches/simple");
}

function getAPIDataFromURL(url) {
	if (authKey) {
		var xmlhttp = new XMLHttpRequest();
		var url = url;
		xmlhttp.open("GET", url, true);
		xmlhttp.setRequestHeader("X-TBA-Auth-Key", authKey);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = this.responseText;
				return JSON.parse(response);
			}
		};
		// Send request
		xmlhttp.send();
	}
}
