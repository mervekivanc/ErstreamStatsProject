var user = $.cookie('user');
console.log(user);
function KeySpec(user){
if (user == 'tmdvod')
   return 'CJOOvoZnTrGJ4XLivBU6zEqpRBWFvNLV';
else if (user == 'turkuvaz')
   return 'U3kzrRgq415d8iJVNj2IjBFBAu6F3wld';
else if (user == 'ahaber')
   return 'kHhYOL0DjrpcQfBsmONIicPCr8tGyizV';
else if (user == 'aspor')
   return 'BjuLNBymy8lXlJmOvw15uzSZ6XmLnHsp';
else if (user == 'atv')
   return 'mr6qnnCOvEeH9aV0LsTF8F6XQtCnWZeR';
else if (user == 'sabah')
   return 'HtrkW6igApMklJYOF4g4AxLyrsOuXfJV';

else if (user == 'digiturk-vod')
   return 'eXkplDx5J7whNTKujL8tAeQGP8GTueDP';
else if (user == 'digicombined')
   return 'grieRUGmd7dby2omZxhhtsRzzVamXnRZ';

else if (user == 'trtworld')
   return 'rMzBGI9JFVj3uowClTDrHev4fmiEFiOG';
else if (user == 'buguntv')
   return '3VPSdJjN5S2qlbQi2VSmIZkYbOhTPace';
else if (user == 'filmbox')
   return 'RmMirwvLGwO2oPtXUWVObcQDqLXc4pBA';
else if (user == 'lg')
   return 'DLJwvaWleoe7aW7W6ZVG7jExLFkW613H';
else if (user == 'tv8')
   return '1OSSXVVJCNU1NoLMIyCAW0Rg5pTgwjN0';

else if (user == 'aljazeera')
   return '0KhJmZQIIw1ZpGO3Sq9RLkN5Nm0YTBRN';

else if (user == 'tjk')
   return 'DI3IJ4CDXvfoKSroFyBr8CHZqfLSmkeC';
else if (user == 'tv8group')
   return 'y8xBuTZ9VVvpHbfatfVrGPvozTJixwTc';
else if (user == 'digiturk-hls')
   return 'DXBBDdjKTg8oOBvh3YjiDyzDvGSJf7Cu';

else if (user == 'dtdrm')
   return 'Ch7M2q7TkoMtpwVvDhBvJHZ1JWDlQuxK';
else if (user == 'dttr')
   return 'ixxeYuCbdqqHUZuS9tR9bbhPVFJwqU8K';
else if (user == 'ligtv4k')
   return 'D72MWeDhGOY442Cyb4GiCo0UZcO8fhNd';
else if (user == 'ligtvvr')
   return '9aFaP8GEP8piRKf7TngUmYApSbgjUqJe';
else if (user == 'ingestlive')
   return 'OmVYKm4S2Svw5dHfJGtO2jM7d6vprIUz';

else if (user == 'planet')
   return 'D2hKA3onS2AmrllDJLCY7XX7zzyJtLyB';
else if (user == 'abudhabi')
   return 'juEPGjwUbkIEBsWnzdV9gu8UDh90Q5Jm';

else if (user == 'snappy')
   return 'pYT9s6X5cBDITY5GQ1czRs0lC0Lishym';
else if (user == 'tbf')
   return '5HsuORbUIdy3KqejwQxSnAuId65bNoHF';

else if (user == 'starmena')
   return 'PIAzzCL1NIfmlbt0EtUIp0tacSRg9Dpd';
else if (user == 'lifetime')
   return 'gnFBb3yBJAOL6Fz5E1HpRC9R8dKF9vgk';
else if (user == 'ingestlive')
   return 'OmVYKm4S2Svw5dHfJGtO2jM7d6vprIUz';

else if (user == 'planet')
   return 'D2hKA3onS2AmrllDJLCY7XX7zzyJtLyB';
else if (user == 'abudhabi')
   return 'juEPGjwUbkIEBsWnzdV9gu8UDh90Q5Jm';
}

$.cookie('ptc',KeySpec(user));

var u = ($.cookie('user')).toUpperCase();
$('.username').text(u);


