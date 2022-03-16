import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { response } from 'express';

import { CreateMessageDTO } from './dto/create-message-dto';
import { MessageService } from './service/message.service';

@Controller('messages')
export class MessagesController {
  constructor(private messageService: MessageService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDTO, @Res() response) {
    this.messageService
      .createMessage(createMessageDto)
      .then((message) => {
        response.status(HttpStatus.CREATED).json(message);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'Error en la creacion del mensaje...' });
      });
  }

  @Get()
  getAll() {
    this.messageService
      .getAll()
      .then((messagesList) => {
        response.status(HttpStatus.OK).json(messagesList);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'Error en la obtenciòn del mensaje...' });
      });
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() upadateMessageDto: CreateMessageDTO,
    @Res() response,
  ) {
    this.messageService
      .updateMessage(id, upadateMessageDto)
      .then((message) => {
        response.status(HttpStatus.OK).json(message);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'Error en la ediciòn del mensaje...' });
      });
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() response) {
    this.messageService
      .remove(id)
      .then((message) => {
        response.status(HttpStatus.OK).json(message);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'Error en la eliminacion del mensaje...' });
      });
  }
}
