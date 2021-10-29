
async function fetchApi() {
    let fetchData = await fetch('https://tobitheme.net/api/characters.json');
    return await fetchData.json();
}


    fetchApi().then (

data => {
    document.getElementById('characters_name').innerHTML = 'Name: ' + data['data'][0]['name'];
    document.getElementById('characters_house').innerHTML = 'House: ' + data['data'][0]['house'];
    document.getElementById('characters_gender').innerHTML = 'Gender: ' + data['data'][0]['gender'];
    document.getElementById('characters_dob').innerHTML = 'Date of birth: ' + data['data'][0]['dateOfBirth'];
    document.getElementById('characters_ancestry').innerHTML = 'Ancestry: ' + data['data'][0]['ancestry'];
    document.getElementById('characters_eyeColour').innerHTML = 'Eye colour: ' + data['data'][0]['eyeColour'];
    document.getElementById('characters_hairColour').innerHTML = 'Hair colour: ' +  data['data'][0]['hairColour'];
    document.getElementById('characters_img').innerHTML = data['data'][0]['image'];

}
)
