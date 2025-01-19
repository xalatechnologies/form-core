const validate = (value, rules) => {
    const errors = [];
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
            if (rule.type === 'required')
                continue;
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
const validateControl = (control, value) => {
    if (!control.validationRules) {
        return { valid: true, errors: [] };
    }
    return validate(value, control.validationRules);
};

export { validate, validateControl };
//# sourceMappingURL=index.esm.js.map
