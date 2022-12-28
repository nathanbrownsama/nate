async function fetchData() {
  const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': 'ae012059a6msh5f02879c5b80ac2p1c8d6cjsn8da25ff295ba',
		'X-RapidAPI-Host': 'api4yaware-yaware-data.p.rapidapi.com'
	}
};

fetch('https://api4yaware-yaware-data.p.rapidapi.com/account/json/v2/getAbsentEmployees?access_key=undefined', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    const options = {
