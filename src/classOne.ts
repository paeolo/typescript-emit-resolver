import { property, resolve } from './utils';
import ClassTwo from './classTwo';

export default class ClassOne {
  @property
  @resolve(() => ClassTwo)
  property: ClassTwo;
}
