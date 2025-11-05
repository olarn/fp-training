# TypeScript Functional Programming Learning Project

A minimal TypeScript project for learning functional programming concepts. It uses Jest for testing, `ts-node`/`nodemon` for development, and `tsc` for builds. Some examples may use `effect` or `ts-pattern` to demonstrate modern FP patterns.

## 🎯 Learning Objectives

This project covers:
- **Functional Programming Patterns**: Composition, Currying, Pattern Matching
- **Algebraic Thinking**: Types and transformations
- **Effectful Programming (optional)**: Side-effects with `effect`

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
cd <project-folder>
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run app to verify setup:**
```bash
npm run dev
```

4. **Run tests to verify unit tests setup:**
```bash
npm run test
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Run `src/app.ts` with ts-node |
| `npm run watch` | Run with nodemon (reload on changes) |
| `npm test` | Run all tests with Jest (default reporter) |
| `npm run test:spec` | Run all tests with spec reporter |
| `npm run test:coverage` | Run all tests with coverage report |
| `npm run test:watch` | Jest watch mode (reload on file changes) |
| `npm run build` | Build TypeScript to `dist/` |

## 📚 Learning Modules

### Examples (may vary by lesson)
- Composition with `pipe`
- Currying and point-free style
- Pattern matching with `ts-pattern`
- Optional: side-effects with `effect`

## 🧪 Testing

### Running Tests
```bash
# Run all tests (default reporter)
npm test

# Run all tests (spec reporter)
npm run test:spec

# Run all tests with coverage
npm run test:coverage

# Run specific test file
npx jest /src/01-TypeScript/typescript.test.ts

# Watch all tests (auto-reload on file changes)
npm run test:watch
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

### Core Dependencies (from `package.json`)
- **effect** (^3.16.12)
- **ts-pattern** (^5.6.2)
### Development Dependencies (from `package.json`)
- **typescript** (^5.2.2)
- **jest** (^30.0.4)
- **ts-jest** (^29.1.1)
- **ts-node** (^10.9.1)
- **nodemon** (^3.0.1)
- **eslint** (^9.30.1)
- **@typescript-eslint/eslint-plugin** (^8.36.0)
- **@typescript-eslint/parser** (^8.36.0)
- **@types/jest** (^30.0.0)

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

**Runtime issues:**
```bash
# Ensure entry is correct for dev runs
cat src/app.ts
```

## 📝 Contributing

When contributing to this project:

1. Follow functional programming principles
2. Write comprehensive tests for new features
3. Use TypeScript strict mode
4. Follow the established code structure
5. Use Effect for side effects when appropriate
6. Update documentation as needed

## 📚 Additional Resources

### Effect Documentation
- [Effect Official Documentation](https://effect.website/)
- [Effect GitHub Repository](https://github.com/Effect-TS/effect)
- [Effect Examples](https://github.com/Effect-TS/effect/tree/main/examples)

### Functional Programming Resources
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

**Happy Learning! 🚀**

For questions or issues, please refer to the course materials or contact your instructor.
