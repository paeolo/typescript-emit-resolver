/**
 * Use typescript emited metadata to get the type
 *
 * @param ctor
 * @param key
 */
export const getDesignType = (ctor: Function, key: string) => {
  const type = Reflect.getMetadata('design:type', ctor.prototype, key);
  return type?.name;
}

/**
 * Get the resolver
 *
 * @param ctor
 * @param key
 */
export const getDesignTypeAlt = (ctor: Function, key: string) => {
  const resolver = Reflect.getMetadata('design:resolver', ctor.prototype, key);
  return resolver().name;
}


/**
 * Dummy decorator
 *
 * @param target
 * @param key
 */
export const property = (target: any, key: string) => {

}

/**
 * Manually set a type resolver
 *
 * @param target
 * @param key
 */
export const resolve = (resolver: () => Function) => Reflect.metadata('design:resolver', resolver);
