const onIndexProfileSuccess = function (response) {
  $('#all-profiles-page').show()
  $('#update-form').hide()
  const indexProfiles = response.dog
  console.log(response)

  let profilesHtml = ''

  indexProfiles.forEach((dog) => {
    profilesHtml += `
                      <div id=${dog._id}>
                
                       <h3>Name: ${dog.name}</h3> 
                        <div>
                          <p>Gender: ${dog.gender}</p>
                          <p>Birthday: ${dog.age}</p> 
                          <p>Type: ${dog.type}</p>
                          <p>Notes: ${dog.notes}</p> 
                        </div>
                    
                      </div>

                    <section class="update-profile-list">
                    <p>Need to update ${dog.name}'s profile? Fill out the form and click 'Update'! </p> 
                    
                      <form class="update-profile-list" data-id=${dog._id}>
                            <input name="dog[name]" type="text" placeholder="Dog Name" required>
                            <input name="dog[age]" type="text" placeholder="00/00/00" required>
                            <input name="dog[gender]" type="text" placeholder="Gender" required>
                            <input name="dog[type]" type="text" placeholder="Labrador" required>
                            <input name="dog[notes]" type="text" placeholder="He likes to swim!" required>

                        </form>
                        <button type="submit" id="update-button" data-id=${dog._id}>Update ${dog.name}'s profile </button>
                        <button id="delete-profile" data-id=${dog._id}>Delete ${dog.name}'s Profile</button>
                        
                    </section>
                        <br>
                    `
  })
  $('#view-all-profiles').html(profilesHtml)
}
