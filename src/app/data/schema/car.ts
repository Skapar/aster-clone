interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  features: Features;
  seller: Seller;
}

interface Features {
  transmission: string;
  fuelType: string;
  mileage: number;
  seatingCapacity: number;
  autopilot?: boolean;
}

interface Seller {
  name: string;
  contact: Contact;
}

interface Contact {
  phone: string;
  email: string;
}
