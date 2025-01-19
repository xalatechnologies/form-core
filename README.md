# @xalatechnologies/form-core

Core form controls and validation utilities for the Fylleut form system.

## Installation

```bash
npm install @xalatechnologies/form-core
```

## Features

- Basic form control types
- Validation rules and utilities
- TypeScript support

## Usage

```typescript
import { BaseControl, validateControl } from '@xalatechnologies/form-core';

const textControl: BaseControl = {
  id: 'name',
  type: 'text',
  label: 'Full Name',
  required: true
};

const result = validateControl(textControl, 'John Doe');
console.log(result.valid); // true
```

## Documentation

For detailed documentation, visit our [documentation site](https://docs.fylleut.com/packages/form-core).

## License

MIT
