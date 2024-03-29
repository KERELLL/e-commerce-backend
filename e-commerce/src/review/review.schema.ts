import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import * as mongoose from 'mongoose';
// import { Product } from 'src/product/product.schema';

@Schema({ collection: 'Review' })
export class Review extends Document {
  @Prop()
  comment: string;

  @Prop()
  rating: number;

  @Prop()
  username: string;

  @Prop()
  productId: string;

  @Prop()
  createdAt: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
