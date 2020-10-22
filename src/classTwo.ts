import { property, resolve } from './utils';
import ClassOne from './classOne';

export default class ClassTwo {
  @property
  @resolve(() => ClassOne)
  property: ClassOne;
}
