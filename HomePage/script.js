let indianCities=['Agra','Ahmedabad','Ajmer','Alappuzha','Allahabad','Amravati','Amritsar','Aurangabad','Bengaluru','Bhopal','Bhubaneswar','Chandigarh','Chennai','Coimbatore','Cuttack','Darjeeling','Dehradun','DelhiNCR','Dharamshala','Gangtok','Goa','Gorakhpur','Guntur','Guwahati','Gwalior','Haridwar','Hyderabad','Indore','Jabalpur','Jaipur','Jalandhar','Jammu','Jamnagar','Jamshedpur','Jhansi','Jodhpur','Junagadh','Kanpur','Khajuraho','Khamgaon','Kharagpur','Kochi','Kolhapur','Kolkata','Kota','Lucknow','Ludhiana','Madurai','Manali','Mangalore','Manipal','Meerut','Mumbai','Mussoorie','Mysore','Nagpur','Nainital','Nashik','Neemrana','Ooty','Palakkad','Patiala','Patna','Puducherry','Pune','Pushkar','Raipur','Rajkot','Ranchi','Rishikesh','Salem','Shimla','Siliguri','Srinagar','Surat','Thrissur','Tirupati','Trichy','Trivandrum','Udaipur','Vadodara','Varanasi','Vellore','Vijayawada','Visakhapatnam'];

const getcity=document.getElementById('country');
getcity.style.width='80%';
getcity.style.margin='auto';
// getcity.style.display='flex';
indianCities.forEach(element => {
    let newEle=document.createElement('div');
    newEle.style.fontSize='2rem';
    newEle.className='cities';
    newEle.innerHTML=element;
    getcity.appendChild(newEle);
});
