import {
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

/**
 * Checks the property does not exist
 */
export function IsNotPresent(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isNotPresent',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          // verify the property is not present in the body object
          return value === undefined;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} should not be present in the body of the request.`;
        },
      },
    });
  };
}
