import { UUID } from "crypto";

export type Gender =
  | "female"
  | "male"
  | "non-binary"
  | "prefer not to say"
  | "other";

export interface Address {
  street: string;
  houseNumber: string;
  zipIndex: string;
  city: string;
  country: string;
}

export interface User {
  id: UUID;
  firstName: string;
  lastName: string;
  email: string;
  birthday: Date;
  gender: Gender;
  city: string;
}

export interface Company {
  id: UUID;
  name: string;
  address: Address;
  email: string;
  contactPhone: string;
}

export interface Event {
  id: UUID;
  title: string;
  description: string;
  image: string;
  date: Date;
  location: string;
  totalPlaces: number;
  bookedPlaces: number;
  participationFee: number;
  hostedBy?: Company;
}
