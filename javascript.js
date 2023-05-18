<script src="script.js">// Example car listings data (replace this with your real data)
        const carListings = [
            {
                make: 'Toyota',
                model: 'Camry',
                price: '$25,000',
                image: 'toyota_camry.jpg'
            },
            {
                make: 'Honda',
                model: 'Civic',
                price: '$20,500',
                image: 'honda_civic.jpg'
            },
            // Add more car listings here...
        ];
        
        // Function to generate HTML for car listings
        function generateCarListingsHTML(listings) {
            return listings.map(listing => `
                <div class="car-listing">
                    <img src="${listing.image}" alt="${listing.make} ${listing.model}">
                    <h4>${listing.make} ${listing.model}</h4>
                    <p>Price: ${listing.price}</p>
                </div>
            `).join('');
        }
        
        // Get the car listings container element
        const carListingsContainer = document.getElementById('car-listings');
        
        // Generate and insert the car listings HTML into the container
        carListingsContainer.innerHTML = generateCarListingsHTML(carListings);
        </script>