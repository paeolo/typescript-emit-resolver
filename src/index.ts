import 'reflect-metadata';
import {
  getDesignType,
  getDesignTypeAlt
} from './utils';
import ClassOne from './classOne';
import ClassTwo from './classTwo';

console.log(`Hello World! ${ClassOne.name} and ${ClassTwo.name};)`);

console.log(`--`);

console.log(`${ClassOne.name} property is of type ${getDesignType(ClassOne, 'property')}`);
console.log(`${ClassTwo.name} property is of type ${getDesignType(ClassTwo, 'property')}`);

console.log(`--`);
console.log(`But wait! Using resolvers maybe...`)
console.log(`--`);

console.log(`${ClassOne.name} property is of type ${getDesignTypeAlt(ClassOne, 'property')}`);
console.log(`${ClassTwo.name} property is of type ${getDesignTypeAlt(ClassTwo, 'property')}`);
console.log(`--`);
