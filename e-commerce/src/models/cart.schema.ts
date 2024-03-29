import { Prop, Schema } from '@nestjs/mongoose';
import { Product } from '../product/product.schema';
import * as mongoose from 'mongoose';

@Schema()
export class Cart {
  @Prop()
  userId: string;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' } })
  product: Product;
}
