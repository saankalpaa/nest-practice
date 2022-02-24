import { Tracing } from 'trace_events';

export class CreateItemDto {
  readonly name: string;
  readonly description: Tracing;
  readonly qty: number;
}
