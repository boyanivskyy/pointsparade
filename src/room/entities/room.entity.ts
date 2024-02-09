import { v4 as uuidv4 } from 'uuid';

export class Room {
  id: string;
  name: string;
  guests: Guest[];
  votes: Map<Guest['id'], Vote>;

  createdAt: Date;
  updatedAt: Date;

  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.votes = new Map<Guest['id'], Vote>();
  }
}

export class Guest {
  id: string;
  name: string;
}

export class Vote {
  vote: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(val: number) {
    this.vote = val;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
