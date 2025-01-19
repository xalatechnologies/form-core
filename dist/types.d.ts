export interface BaseControl {
    id: string;
    type: 'text' | 'number' | 'select' | 'checkbox' | 'radio' | 'textarea';
    label: string;
    required?: boolean;
    disabled?: boolean;
    defaultValue?: any;
    placeholder?: string;
    validationRules?: ValidationRule[];
}
export interface ValidationRule {
    type: 'required' | 'min' | 'max' | 'pattern' | 'custom';
    value?: any;
    message: string;
    validator?: (value: any) => boolean;
}
export interface ValidationResult {
    valid: boolean;
    errors: string[];
}
export interface FormState {
    values: Record<string, any>;
    errors: Record<string, string[]>;
    touched: Record<string, boolean>;
    isValid: boolean;
    isSubmitting: boolean;
}
//# sourceMappingURL=types.d.ts.map