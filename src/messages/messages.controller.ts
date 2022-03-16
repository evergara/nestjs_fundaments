import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateMessageDTO } from './dto/create-message-dto';

@Controller('messages')
export class MessagesController {
  @Post()
  create(@Body() createMessageDto: CreateMessageDTO) {
    return `Mensaje creaso ${createMessageDto.message}`;
  }

  @Get()
  getAll() {
    return `lista de mensaje....`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createMessageDto: CreateMessageDTO) {
    return `Mensaje actualizado ${id} es ${createMessageDto.message}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} mensajes`;
  }
}