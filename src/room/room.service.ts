import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';
import { VoteDto } from './dto/vote.dto';

@Injectable()
export class RoomService {
  rooms: Room[] = [];

  create({ name }: CreateRoomDto): Room {
    const room = new Room(name);
    this.rooms.push(room);

    return room;
  }

  findAll(): Room[] {
    return this.rooms;
  }

  findOne(id: string): Room {
    return this.rooms.find((room) => room.id === id);
  }

  update(id: string, updateRoomDto: UpdateRoomDto): Room {
    const roomToUpdate = this.findOne(id);
    roomToUpdate.name = updateRoomDto.name;

    return roomToUpdate;
  }

  remove(id: string): Room {
    const roomToRemove = this.findOne(id);
    this.rooms.filter((room) => room.id !== id);

    return roomToRemove;
  }

  vote(roomId: string, dto: VoteDto): void {
    const room = this.findOne(roomId);
    room.votes[dto.userId] = dto.vote;
  }

  revealVotes(roomId: string): string {
    const room = this.findOne(roomId);
    const votes = Object.values(room.votes).filter((vote) => vote !== null);
    const average = votes.reduce((acc, vote) => acc + vote, 0) / votes.length;

    room.votes.clear();

    return average.toFixed(2);
  }
}
