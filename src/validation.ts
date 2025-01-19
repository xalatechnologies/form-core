import type { ValidationRule, ValidationResult, BaseControl } from './types';

export const validate = (value: any, rules: ValidationRule[]): ValidationResult => {
  const errors: string[] = [];

  // Check required first
  const requiredRule = rules.find(rule => rule.type === 'required');
  if (requiredRule && (!value || (typeof value === 'string' && !value.trim()))) {
    return {
      valid: false,
      errors: [requiredRule.message]
    };
  }

  // Only check other rules if value exists
  if (value) {
    for (const rule of rules) {
      if (rule.type === 'required') continue;

      switch (rule.type) {
        case 'min':
          if (typeof value === 'number' && value < rule.value) {
            errors.push(rule.message);
          }
          break;
        case 'max':
          if (typeof value === 'number' && value > rule.value) {
            errors.push(rule.message);
          }
          break;
        case 'pattern':
          if (typeof value === 'string' && !new RegExp(rule.value).test(value)) {
            errors.push(rule.message);
          }
          break;
        case 'custom':
          if (rule.validator && !rule.validator(value)) {
            errors.push(rule.message);
          }
          break;
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
};

export const validateControl = (control: BaseControl, value: any): ValidationResult => {
  if (!control.validationRules) {
    return { valid: true, errors: [] };
  }

  return validate(value, control.validationRules);
};