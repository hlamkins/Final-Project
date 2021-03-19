import AnimalCard from "../components/AnimalCard";
import React from "react";
const Animals = [];
//   "id": 50893907,
//   "organization_id": "CO342",
//   "url": "https://www.petfinder.com/dog/jackie-50893907/co/broomfield/rocky-mountain-puppy-rescue-co342/?referrer_id=69cafa16-e721-4650-87f3-140b44c10ba4",
//   "type": "Dog",
//   "species": "Dog",
//   "breeds": {
//       "primary": "Chihuahua",
//       "secondary": "Pug",
//       "mixed": true,
//       "unknown": false
//   },
//   "colors": {
//       "primary": null,
//       "secondary": null,
//       "tertiary": null
//   },
//   "age": "Adult",
//   "gender": "Male",
//   "size": "Small",
//   "coat": null,
//   "attributes": {
//       "spayed_neutered": true,
//       "house_trained": true,
//       "declawed": null,
//       "special_needs": false,
//       "shots_current": false
//   },
//   "environment": {
//       "children": null,
//       "dogs": true,
//       "cats": null
//   },
//   "tags": [],
//   "name": "JACKIE",
//   "description": "Jackie is a sweet little very sweet little boy but he is really scared of people right now. He gets...",
//   "organization_animal_id": null,
//   "photos": [
//       {
//           "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50893907/1/?bust=1615927070&width=100",
//           "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50893907/1/?bust=1615927070&width=300",
//           "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50893907/1/?bust=1615927070&width=600",
//           "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50893907/1/?bust=1615927070"
//       }
//   ],
//   "primary_photo_cropped": {
//       "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50893907/1/?bust=1615927070&width=300",
//       "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50893907/1/?bust=1615927070&width=450",
//       "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50893907/1/?bust=1615927070&width=600",
//       "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50893907/1/?bust=1615927070"
//   },
//   "videos": [],
//   "status": "adoptable",
//   "status_changed_at": "2021-03-16T20:38:21+0000",
//   "published_at": "2021-03-16T20:38:21+0000",
//   "distance": null,
//   "contact": {
//       "email": "rmprcontact@gmail.com",
//       "phone": "(720) 443-3748",
//       "address": {
//           "address1": null,
//           "address2": null,
//           "city": "Broomfield",
//           "state": "CO",
//           "postcode": "80020",
//           "country": "US"
//       }
//   },
//   "_links": {
//       "self": {
//           "href": "/v2/animals/50893907"
//       },
//       "type": {
//           "href": "/v2/types/dog"
//       },
//       "organization": {
//           "href": "/v2/organizations/co342"
//       }
//   }
// },
// {
//   "id": 50892015,
//   "organization_id": "OK15",
//   "url": "https://www.petfinder.com/dog/gracie-50892015/nj/belleville/friends-with-four-paws-ok15/?referrer_id=69cafa16-e721-4650-87f3-140b44c10ba4",
//   "type": "Dog",
//   "species": "Dog",
//   "breeds": {
//       "primary": "Chihuahua",
//       "secondary": "Pug",
//       "mixed": true,
//       "unknown": false
//   },
//   "colors": {
//       "primary": "Black",
//       "secondary": null,
//       "tertiary": null
//   },
//   "age": "Young",
//   "gender": "Female",
//   "size": "Small",
//   "coat": "Short",
//   "attributes": {
//       "spayed_neutered": true,
//       "house_trained": true,
//       "declawed": null,
//       "special_needs": false,
//       "shots_current": true
//   },
//   "environment": {
//       "children": true,
//       "dogs": true,
//       "cats": true
//   },
//   "tags": [],
//   "name": "Gracie",
//   "description": "Meet  Gracie! This one is perfect! Housetrained, walks well on a leash, gets along with all the dogs, and does...",
//   "organization_animal_id": null,
//   "photos": [
//       {
//           "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/2/?bust=1615918684&width=100",
//           "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/2/?bust=1615918684&width=300",
//           "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/2/?bust=1615918684&width=600",
//           "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/2/?bust=1615918684"
//       },
//       {
//           "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/1/?bust=1615918668&width=100",
//           "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/1/?bust=1615918668&width=300",
//           "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/1/?bust=1615918668&width=600",
//           "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/1/?bust=1615918668"
//       },
//       {
//           "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/3/?bust=1615918699&width=100",
//           "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/3/?bust=1615918699&width=300",
//           "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/3/?bust=1615918699&width=600",
//           "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/3/?bust=1615918699"
//       },
//       {
//           "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/4/?bust=1615918706&width=100",
//           "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/4/?bust=1615918706&width=300",
//           "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/4/?bust=1615918706&width=600",
//           "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/4/?bust=1615918706"
//       }
//   ],
//   "primary_photo_cropped": {
//       "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/2/?bust=1615918684&width=300",
//       "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/2/?bust=1615918684&width=450",
//       "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/2/?bust=1615918684&width=600",
//       "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50892015/2/?bust=1615918684"
//   },
//   "videos": [],
//   "status": "adoptable",
//   "status_changed_at": "2021-03-16T18:19:13+0000",
//   "published_at": "2021-03-16T18:19:13+0000",
//   "distance": null,
//   "contact": {
//       "email": "adoptioninfo@friendswithfourpaws.org",
//       "phone": null,
//       "address": {
//           "address1": null,
//           "address2": null,
//           "city": "Belleville",
//           "state": "NJ",
//           "postcode": "07109",
//           "country": "US"
//       }
//   },
//   "_links": {
//       "self": {
//           "href": "/v2/animals/50892015"
//       },
//       "type": {
//           "href": "/v2/types/dog"
//       },
//       "organization": {
//           "href": "/v2/organizations/ok15"
//       }
//   }
// },]
const Save = () => {
  return (
    <div className="row" style={{ width: '100%' }}>
      {Animals.map(Animal  => (
        <AnimalCard key={Animal.id}{...Animal}/>
      ))}
    </div>
  );
};

export default Save;
