import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDTO } from '../dto/create-message-dto';
import { Message } from '../entities/message.entity';

@Injectable()
export class MessageService {
  constructor(@InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  getAll(): Promise<Message[]> {
    return this.messageRepository.find();
  }
  
  createMessage(message: CreateMessageDTO): Promise<Message> {
    const newMessage: Message = new Message();
    newMessage.mensaje = message.message;
    newMessage.nick = message.nick;

    return this.messageRepository.save(newMessage);
  }

  findOne(id: string): Promise<Message> {
    return this.messageRepository.findOne(id);
  }

  async updateMessage(idMessage: string, message: CreateMessageDTO) {
    const updateMessage = await this.messageRepository.findOne(idMessage);
    updateMessage.mensaje = message.message;
    updateMessage.nick = message.nick;

    return await this.messageRepository.save(updateMessage);
  }

  async remove(id: string): Promise<void> {
    await this.messageRepository.delete(id);
  }
}
