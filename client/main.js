document.addEventListener('DOMContentLoaded', function() {
    var fetchButton = document.getElementById('fetchButton');

    fetchButton.addEventListener('click', function() {
        const url = 'https://www.propertyfinder.ae/_next/data/VitBX2Pi5vMvssw-E_FOG/en/search.json?l=10393&c=2&fu=0&rp=y&ob=mr';
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("Initial Data:", data.pageProps.searchResult.properties);
                
                fetch('http://localhost:3000/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data.pageProps.searchResult.properties)
                })
                .then(response => response.json())
                .then(serverData => {
                    console.log("Server Data:", serverData);
                })
                .catch(error => {
                    console.error('Error while sending data to the server:', error);
                });
            })
            .catch(error => {
                console.error('Error while fetching initial data:', error);
            });
    });
});
