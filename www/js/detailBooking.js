document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
 
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;
    const tripType = document.getElementById('trip-type').value;
    const guests = document.getElementById('guests').value;
    const arrivalDate = document.getElementById('arrival-date').value;
    const leavingDate = document.getElementById('leaving-date').value;
 
    // Determine the price based on destination and trip type
    let price;
    switch(destination.toLowerCase()) {
       case 'kuala lumpur':
          switch(tripType.toLowerCase()) {
             case 'single':
                price = 'RM500';
                break;
             case 'couple':
                price = 'RM900';
                break;
             case 'family':
                price = 'RM1500';
                break;
             default:
                price = 'N/A';
          }
          break;
       case 'pulau pinang':
          switch(tripType.toLowerCase()) {
             case 'single':
                price = 'RM200';
                break;
             case 'couple':
                price = 'RM700';
                break;
             case 'family':
                price = 'RM1300';
                break;
             default:
                price = 'N/A';
          }
          break;
       case 'terengganu':
          switch(tripType.toLowerCase()) {
             case 'single':
                price = 'RM300';
                break;
             case 'couple':
                price = 'RM1100';
                break;
             case 'family':
                price = 'RM1600';
                break;
             default:
                price = 'N/A';
          }
          break;
       case 'melaka':
          switch(tripType.toLowerCase()) {
             case 'single':
                price = 'RM250';
                break;
             case 'couple':
                price = 'RM800';
                break;
             case 'family':
                price = 'RM1400';
                break;
             default:
                price = 'N/A';
          }
          break;
       default:
          price = 'N/A'; // default case if destination does not match any
    }
 
    // Add booking to the booking list
    const bookingList = document.getElementById('booking-list-items');
    const bookingRow = document.createElement('tr');
    bookingRow.innerHTML = `
       <td>${name}</td>
       <td>${email}</td>
       <td>${destination.charAt(0).toUpperCase() + destination.slice(1)}</td>
       <td>${tripType.charAt(0).toUpperCase() + tripType.slice(1)}</td>
       <td>${guests}</td>
       <td>${arrivalDate}</td>
       <td>${leavingDate}</td>
       <td>${price}</td>
    `;
    bookingList.appendChild(bookingRow);
 
    // Show booking list and hide booking form
    document.getElementById('page-create').classList.add('inactive');
    document.getElementById('page-account').classList.remove('inactive');
 });
 
 // Event listeners for navigation buttons
 document.getElementById('home').addEventListener('click', function() {
    setActivePage('page-home');
 });
 
 document.getElementById('feed').addEventListener('click', function() {
    setActivePage('page-feed');
 });
 
 document.getElementById('create').addEventListener('click', function() {
    setActivePage('page-create');
 });
 
 document.getElementById('account').addEventListener('click', function() {
    setActivePage('page-account');
 });
 
 function setActivePage(activePageId) {
    const pages = ['page-home', 'page-feed', 'page-create', 'page-account'];
    pages.forEach(pageId => {
       if (pageId === activePageId) {
          document.getElementById(pageId).classList.remove('inactive');
          document.getElementById(pageId).classList.add('active');
       } else {
          document.getElementById(pageId).classList.remove('active');
          document.getElementById(pageId).classList.add('inactive');
       }
    });
 }