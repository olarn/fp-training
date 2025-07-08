# TypeScript Functional Programming Learning Project

A TypeScript project for learning functional programming concepts using fp-ts library. This project contains various examples and exercises covering fundamental FP concepts like monads, functors, monoids, and more.

## 🎯 Learning Objectives

This project covers:
- **Algebraic Data Types (ADT)**: Either, Option, List
- **Type Classes**: Functor, Monad, Monoid, Group, Semigroup, Magma
- **Functional Programming Patterns**: Composition, Currying, Pattern Matching
- **IO Operations**: Pure functional side effects
- **Category Theory Concepts**: Basic category theory implementations and basic Lambda Calculus

## 📋 Prerequisites

### System Requirements
- **Node.js** v18.x or later
- **npm** v9.x or later
- **Visual Studio Code** (Recommended)

### Verify Installation
```bash
# Check Node.js version
node --version  # Should be v18.x or later

# Check npm version
npm --version   # Should be v9.x or later
```

## 🚀 Quick Start

1. **Clone the repository:**
```bash
git clone <repository-url>
cd code
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run tests to verify setup:**
```bash
npm test
```

## 📁 Project Structure

```
src/
├── adt/                   # Algebraic Data Types
│   ├── either/            # Either monad implementations
│   ├── option/            # Option monad implementations
│   └── list/              # List implementations
├── category_theory/       # Category theory concepts
├── compose/               # Function composition
├── currying/              # Currying examples
├── either/                # Either monad examples
├── functor/               # Functor implementations
├── group/                 # Group theory examples
├── io/                    # IO monad examples
├── linkedList/            # Linked list implementations
├── magma/                 # Magma and monoid examples
├── option/                # Option monad examples
├── recursion/             # Recursion examples
├── typeclass/             # Type class implementations
└── _lab/                  # Lab exercises and requirements
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm test` | Run all tests with Jest (watch mode + coverage) |
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build TypeScript project |

## 📚 Learning Modules

### 1. Algebraic Data Types (ADT)
- **Either**: Error handling with `Left` and `Right`
- **Option**: Nullable value handling with `Some` and `None`
- **List**: Functional list operations

### 2. Functional Patterns
- **Composition**: Function composition with `pipe`
- **Currying**: Partial function application
- **Pattern Matching**: Using `ts-pattern`

### 3. Type Classes
- **Semigroup**: Associative operations
- **Monoid**: Associative operations with identity
- **Functor**: `map` operations
- **Monad**: `flatMap` (aka chain in fp-ts) operations

### 4. Lab Exercises
- **_lab**: Practical exercises and real-world applications
- **Card Approval System**: Business logic implementation with FP concepts
- **Data Processing**: CSV and Excel file handling with functional patterns

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run specific test file
npx jest src/adt/either/either.test.ts

# Run tests with coverage
npx jest --coverage
```

### Test Structure
Each module contains:
- Implementation file (`.ts`)
- Test file (`.test.ts`)
- Completed version (`.finish.ts`) for reference

## 🔧 Development Setup

### Recommended VSCode Extensions

#### Essential Extensions
1. **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)** - Code linting
2. **[TypeScript and JavaScript Language Features](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)** - TypeScript support
3. **[Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)** - Run Jest tests
4. **[Jest Snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets)** - Jest code snippets

#### Optional Extensions
5. **[Vitest](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer)** - Alternative test runner
6. **[Test Explorer UI](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer)** - Test explorer interface

### VSCode Settings
Add to your VSCode settings (File > Preferences > Settings > Open Settings JSON):

```json
{
  "editor.formatOnSave": true,
  "typescript.tsdk": "node_modules/typescript/lib",
  "jest.autoRun": {
    "watch": true,
    "onSave": "test-file"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

## 📦 Dependencies

### Core Dependencies
- **fp-ts** (^2.16.10) - Functional programming utilities
- **ts-pattern** (^5.7.1) - Pattern matching for TypeScript
- **ws** (^8.18.3) - WebSocket client & server
- **papaparse** (^5.5.3) - CSV parsing

### Development Dependencies
- **TypeScript** (^5.8.3) - TypeScript compiler
- **Jest** (^30.0.4) - Testing framework
- **ts-jest** (^29.4.0) - TypeScript support for Jest
- **ESLint** (^9.30.1) - Code linting
- **@typescript-eslint/eslint-plugin** (^8.36.0) - TypeScript ESLint rules
- **@typescript-eslint/parser** (^8.36.0) - TypeScript ESLint parser
- **Nodemon** (^3.1.10) - Development server

## 🎓 Learning Path

### Beginner Level
1. Start with `src/adt/` - Understand basic data types
2. Move to `src/functor/` - Learn about functors
3. Practice with `src/option/` - Handle nullable values

### Intermediate Level
4. Study `src/either/` - Error handling
5. Explore `src/compose/` - Function composition
6. Learn `src/currying/` - Partial application

### Advanced Level
7. Dive into `src/io/` - Side effects
8. Study `src/typeclass/` - Type classes
9. Explore `src/category_theory/` - Mathematical foundations

## 🐛 Troubleshooting

### Common Issues

**TypeScript compilation errors:**
```bash
npm run build
```

**Test failures:**
```bash
# Clear Jest cache
npx jest --clearCache
npm test
```

**ESLint issues:**
```bash
# Fix auto-fixable issues
npx eslint --fix src/
```

## 📝 Contributing

When contributing to this project:

1. Follow functional programming principles
2. Write comprehensive tests for new features
3. Use TypeScript strict mode
4. Follow the established code structure
5. Update documentation as needed

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

**Happy Learning! 🚀**

For questions or issues, please refer to the course materials or contact your instructor.
