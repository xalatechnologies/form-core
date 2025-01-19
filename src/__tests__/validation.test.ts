import { describe, expect, test } from '@jest/globals';
import { validate, validateControl } from '../validation';
import type { BaseControl } from '../types';

describe('validation', () => {
  test('required validation', () => {
    const rules = [{
      type: 'required' as const,
      message: 'Field is required'
    }];

    expect(validate('', rules)).toEqual({
      valid: false,
      errors: ['Field is required']
    });

    expect(validate('test', rules)).toEqual({
      valid: true,
      errors: []
    });
  });

  test('validateControl', () => {
    const control: BaseControl = {
      id: 'test',
      type: 'text',
      label: 'Test Field',
      validationRules: [
        {
          type: 'required',
          message: 'Required field'
        },
        {
          type: 'pattern',
          value: '^[A-Z]+$',
          message: 'Only uppercase letters allowed'
        }
      ]
    };

    expect(validateControl(control, '')).toEqual({
      valid: false,
      errors: ['Required field']
    });

    expect(validateControl(control, 'test')).toEqual({
      valid: false,
      errors: ['Only uppercase letters allowed']
    });

    expect(validateControl(control, 'TEST')).toEqual({
      valid: true,
      errors: []
    });
  });
});