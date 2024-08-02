import React, {useState} from 'react';
import PropertyItem from '../PropertyItem/index';
import Filter from '../Filter/index';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const properties = [
  {
    id: 1,
    name: 'Billionaire Hotel & Suites',
    location: 'Plot 20, Block III Resettlement Scheme Layout, Ologede Estate',
    price: 5299,
    image: 'https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image path
    amenities: ['Free WiFi', 'Continental Breakfast', '+ 3 More']
  },
  {
    id: 2,
    name: 'Begonia Hotel',
    location: 'Behind Compass Point Filling Station',
    price: 4399,
    image: 'https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?t=st=1722496903~exp=1722500503~hmac=a02507da44420b492c32831086639bbd2a500320b1b2fd04d29b8a45e2ff11a3&w=1060', // Replace with your image path
    amenities: ['Adequate Parking', 'Private Bathroom', '+ 11 More']
  },
  {
    id: 3,
    name: 'AGA Woods Hotel',
    location: 'Plot 31, NNPC Pipeline Road',
    price: 5599,
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?cs=srgb&dl=pexels-pixabay-271618.jpg&fm=jpg', // Replace with your image path
    amenities: ['Free WiFi', 'Restaurant(s)']
  },
  {
    id: 4,
    name: 'Beni Hotels',
    location: '11/13 Wimo Onatere Street, Off Broad Street',
    price: 4199,
    image: 'https://www.alescoproperty.com/wp-content/uploads/2023/09/visualsofdana-T5pL6ciEn-I-unsplash.jpg', // Replace with your image path
    amenities: ['Restaurant(s)', 'Bar/Lounge']
  },
  {
    id: 5,
    name: 'Extended Stay Grand Hotel',
    location: '21 Oladimeji Alo, Off Freedom Way Beside Canadian Embassy, Lekki Phase 1',
    price: 4199,
    image: 'https://e0.pxfuel.com/wallpapers/513/342/desktop-wallpaper-room-hotel-room.jpg', // Replace with your image path
    amenities: ['Elevator/Lift', 'Bar/Lounge']
  },
  {
    id: 6,
    name: 'Presken Hotel ',
    location: '14/16 Mojidi Street, Off Toyin Street POBox 14603',
    price: 2599,
    image: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?cs=srgb&dl=pexels-pixabay-237371.jpg&fm=jpg', // Replace with your image path
    amenities: ['Restaurant(s)', 'Bar/Lounge']
  },
  {
    id: 7,
    name: 'Demiral Hotel',
    location: 'Plot 38 Block 10 Beside Fun Factory Admiralty Way',
    price: 3799,
    image: 'https://wallpapers.com/images/hd/luxury-hotel-room-apoorv-tikamgarh-unypb6z6lfpb86ck.jpg', // Replace with your image path
    amenities: ['Study Desk', 'King sized bed']
  },
  {
    id: 8,
    name: 'CitiHeight Hotel',
    location: 'No. 6 Sheraton-Opebi Link Road',
    price: 4099,
    image: 'https://edc.h-cdn.co/assets/16/24/2048x1152/hd-aspect-1466014759-hotel-room-lead.jpg', // Replace with your image path
    amenities: ['Bar/Lounge', 'Free WiFi' ]
  },
  {
    id: 9,
    name: 'Grand Ibro Hotel',
    location: '2121 Micheal Okpara Road Opposite Shelter Plaza',
    price: 3199,
    image: 'https://gos3.ibcdn.com/41eb7c7ad8ae11ee8e030a58a9feac02.jpg', // Replace with your image path
    amenities: ['Restaurant(s)', 'Gift Shop ', '+ 5 More']
  },
  {
    id: 10,
    name: 'E-Gold Hotel',
    location: 'No. 2 Sankuru close off Rima Street By El- Amin International School',
    price: 5599,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/517614909.jpg?k=7841fad54696011cf7513d710904d35e57e4c84907a8caf96dffa796f09d1c88&o=&hp=1', // Replace with your image path
    amenities: ['Free WiFi', 'Swimming Pool ']
  },
  {
    id: 11,
    name: 'Royal Cedars Hotels',
    location: 'Valley view inn; Plot 7, block7, Alalubosa G.R.A Ibadan',
    price: 4299,
    image: 'https://cdn.tatlerasia.com/asiatatler/i/hk/2021/07/07032647-most-expensive-hotel-rooms-suites-in-the-world-rosewood-copy_cover_1366x768.jpg', // Replace with your image path
    amenities: ['Free WiFi', 'Complimentary Breakfast', 'Swimming Pool']
  },
  {
    id: 12,
    name: 'The Orchard Hotel',
    location: 'Opposite NDLEA by Golf Club, Onireke G.R.A',
    price: 3099,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/564774025.jpg?k=e10ef0ee30b995605bdce8acfcb27da46326dcc45ef2c930d2d1e9c2bddab906&o=&hp=1', // Replace with your image path
    amenities: ['Restaurant(s)', 'Bar/Lounge ', '+ 3 More']
  },
  {
    id: 13,
    name: 'Handsworth Hotel',
    location: '7/8 young Arabamen Street Farm Bus-stop Sangotedo Off Lekki -Epe Expressway',
    price: 4899,
    image: 'https://d32o55fi9y6lyp.cloudfront.net/mohegansun-preview-3409498884/cms/cache/v2/6349aa49044cc.jpg/1920x1080/fit/80/7415ddf064833541e81c80d7cd17bf5d.jpg', // Replace with your image path
    amenities: ['King sized bed', 'Adequate Parking', '+ 2 More']
  },{
    id: 14,
    name: 'Orient Hotel',
    location: '12 Sudan Street',
    price: 5699,
    image: 'https://pix10.agoda.net/property/56143431/873454785/51312fd39c666f6cc38b530567ff5c81.jpeg?ce=0&s=1024x768', // Replace with your image path
    amenities: ['Bar/Lounge', 'Security']
  },{
    id: 15,
    name: 'Deke Hotel',
    location: 'Plot 79 Karimu Kotun Oyadiran Estate Saboa',
    price: 3999,
    image: 'https://bynder.onthebeach.co.uk/cdn-cgi/image/width=1400,quality=70,fit=cover,format=auto/m/ae3c4c3a7ffdaa4/original/HD-Parque-Cristobal-Gran-Canaria.jpg', // Replace with your image path
    amenities: ['Security', '24 Electricity', '+ 2 More']
  }
];


const PropertyList = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');


  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="property-list-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for Hotels and Rooms..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="property-list-container">
        <Filter className="filter" />
        <div className="property-list">
          {filteredProperties.map(property => (
            <PropertyItem key={property.id} property={property} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
