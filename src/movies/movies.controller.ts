import { Controller, Delete, Get, Param, Post, Patch, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

  constructor(private readonly MoviesService: MoviesService) { }

  @Get()
  getAll() {
    return this.MoviesService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: number) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: number) {
    return this.MoviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.MoviesService.create(movieData);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData) {
    return this.MoviesService.update(movieId, updateData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.MoviesService.deleteOne(movieId);
  }
}