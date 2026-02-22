export interface Store {
  id: string
  name: string
  address: string
  hours: string
  image: string
  mapLink: string
}

export const stores: Store[] = [
  {
    id: 's1',
    name: 'Colombo City Centre',
    address: 'Level 2, Colombo City Centre, Colombo 02',
    hours: 'Mon-Sun 10am - 9pm',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=Colombo+City+Centre',
  },
  {
    id: 's2',
    name: 'Kandy City Centre',
    address: 'Level 1, Kandy City Centre, Kandy',
    hours: 'Mon-Sun 10am - 8pm',
    image:
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=Kandy+City+Centre',
  },
  {
    id: 's3',
    name: 'Havelock City Mall',
    address: 'Ground Floor, Havelock City Mall, Colombo 05',
    hours: 'Mon-Sun 10am - 9pm',
    image:
      'https://images.unsplash.com/photo-1582037928769-181f2422618e?w=800&q=80',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=Havelock+City+Mall',
  },
]
