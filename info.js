
const ElizabethCampaignInfo = {District : "TN House District 61",
platformStatements :{
    taxes: "Fight to keep our taxes low",
    jobs : "grow our local economy with new jobs",
    infrastucture : "Promote solutions to address our transportation & infrastructure needs",
    healthCare : "Offer more Tennesseans access to market-based healthcare while opposing Obamacare mandates",
    crime : "Uphold the sanctity of life & maintain our Tennessee values",
    },
donationForm : ["www.donationform.org"],
events : ["1/7/2019"],
volunteers : [{
    name : "Danny",
    address : "Franklin, TN",
    email : "findme@yahoo.com",
    phoneNo : "+1 615-111(1111)",
    availability : "only on Sunday",
    activies : "Attend calls",
    }],
biography : " Elizabeth Seagner DOB : 7/10/1956, Education:Attended, United States Army War College, 1998 Attended, United States Army Command and General Staff College, Middle Tennessee State University, 1976",
imageGallery : {
        head : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjiWluTuaAPqUU6E3BVN0q8a_Gwwz6XpjOQhSIr9rRQYHO_O1Zw",
        family :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjiWluTuaAPqUU6E3BVN0q8a_Gwwz6XpjOQhSIr9rRQYHO_O1Zw",
        constituents : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjiWluTuaAPqUU6E3BVN0q8a_Gwwz6XpjOQhSIr9rRQYHO_O1Zw"
    },
missionStatement : "Represent our county with integrity & restore credibility to our county's house seat",
urlForVote : "www.vote-elizabeth.org"
}


console.log(ElizabethCampaignInfo)

//change or add image
function addToImageGallery (key, newImage) {
    ElizabethCampaignInfo["imageGallery"][key] = newImage
}

function changeBiography (newBiography) {
    ElizabethCampaignInfo["biography"] =newBiography
}

function changePlatform (topic, newPlatformStatement) {
    ElizabethCampaignInfo["platformStatements"][topic] = newPlatformStatement
}
function addEvent(eventDate){
ElizabethCampaignInfo.events.push(eventDate)
}

function addDonation (newURL){
    ElizabethCampaignInfo.donationForm.push (newURL)
}


function changeVolunteerInfo (volunteerName, key, valueVolunteer)
{
    const array  = ElizabethCampaignInfo.volunteers
    array.forEach(element => {
        if (element.name = volunteerName)
            element[key] = valueVolunteer
    }); 
}

function addNewVolunteer(volunteerName, volunteerAddress, volunteerEmail, volunteerPhoneNo, volunteerAvailability, volunteerActivities ) {
    ElizabethCampaignInfo.volunteers.push({
        name : volunteerName,
        address : volunteerAddress,
        email : volunteerEmail,
        phoneNo : volunteerPhoneNo,
        availability : volunteerAvailability,
        activies : volunteerActivities,
    })
}


changeVolunteerInfo("Danny", 'address', "Brentwood TN")
addNewVolunteer("Tom","Franklin, TN", "tom@gmail.com", "615-222-2222","All the time", "anything")
//add New Platform
changePlatform("school", "Provide healthy meal")
//change platform
changePlatform("taxes", "Minimize tax rate")
changeBiography ("A New Biography")
addToImageGallery("head", "NewImage")
addEvent("1/1/19")
addDonation("www.NewdonationLink.org")

console.log(ElizabethCampaignInfo)
