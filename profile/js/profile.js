// get user profile id
const profileUID = location.search.split('=')[1];
fb.getUserProfile(profileUID);

const profileName = js.getEl("profile-display-name");
const profileBio = js.getEl("profile-bio");

const profileEmail = js.getEl("profile-display-email");

const profileLocation = js.getEl("profile-display-location");

const profileButton = js.getEl("update-profile");

function displayProfile(userName, userInfo) {

	// display the user profile name
	profileName.value = userName;

	// add other other fields

	if (userInfo.bio) {
		profileBio.value = userInfo.bio;
	}
    
    if (userInfo.email){
        profileEmail.value = userInfo.email;
    }
    
    if (userInfo.location){
        profileLocation.value = userInfo.location;
    }

}

profileButton.onclick = function() {
	// helper: user id, field name 
	fb.updateProfile(profileUID, 'displayName', profileName.value);
	fb.updateProfile(profileUID, 'bio', profileBio.value);
    fb.updateProfile(profileUID, 'email', profileEmail.value);
    fb.updateProfile(profileUID, 'location', profileLocation.value);
};


function profileLoggedIn(uid) {
	if (uid == profileUID) {
		profileButton.style.display = 'block';
	}
}