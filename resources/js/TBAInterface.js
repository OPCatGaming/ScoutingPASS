// API Docs: https://www.thebluealliance.com/apidocs/v3

// TBAInterface funcitons to pull data from TheBlueAlliance.com
var teams = null;
var schedule = null;
var authKey = "uTHeEfPigDp9huQCpLNkWK7FBQIb01Qrzvt4MAjh9z2WQDkrsvNE77ch6bOPvPb6";

async function getEvents(year) {
	return getAPIDataFromURL("https://www.thebluealliance.com/api/v3/events/" + year + "/simple");
}

async function getTeams(eventCode) {
	return getAPIDataFromURL("https://www.thebluealliance.com/api/v3/event/" + eventCode + "/teams/simple");
}

async function getMatches(eventCode) {
	return getAPIDataFromURL("https://www.thebluealliance.com/api/v3/event/" + eventCode + "/matches/simple");
}

async function getAPIDataFromURL(url) {
    return new Promise((resolve, reject) => {
        if (authKey) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", url, true);
            xmlhttp.setRequestHeader("X-TBA-Auth-Key", authKey);
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var response = this.responseText;
                    resolve(JSON.parse(response)); // Resolve the promise with the parsed response
                } else if (this.readyState == 4) {
                    reject(new Error('Request failed with status ' + this.status));
                }
            };
            // Send request
            xmlhttp.send();
        } else {
            reject(new Error('No authKey provided'));
        }
    });
}
