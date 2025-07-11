import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Mastering TypeScript: Advanced Patterns for Better Code | Muhammad Idrees",
  description:
    "Deep dive into advanced TypeScript patterns, generics, conditional types, and type manipulation techniques that will elevate your development skills and code quality.",
  keywords: [
    "TypeScript advanced patterns",
    "TypeScript generics",
    "conditional types",
    "type manipulation",
    "TypeScript best practices",
    "type safety",
  ],
  openGraph: {
    title: "Mastering TypeScript: Advanced Patterns for Better Code",
    description:
      "Deep dive into advanced TypeScript patterns, generics, conditional types, and type manipulation techniques that will elevate your development skills.",
    type: "article",
    publishedTime: "2024-01-05T00:00:00.000Z",
    authors: ["Muhammad Idrees"],
    url: "https://muhammadidrees.dev/blog/mastering-typescript-advanced-patterns",
    images: [
      {
        url: "/blog/typescript-advanced.jpg",
        width: 1200,
        height: 630,
        alt: "Advanced TypeScript Patterns",
      },
    ],
  },
}

export default function BlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Mastering TypeScript: Advanced Patterns for Better Code",
    description:
      "Deep dive into advanced TypeScript patterns, generics, conditional types, and type manipulation techniques that will elevate your development skills and code quality.",
    image: "/blog/typescript-advanced.jpg",
    author: {
      "@type": "Person",
      name: "Muhammad Idrees",
      url: "https://muhammadidrees.dev",
    },
    publisher: {
      "@type": "Person",
      name: "Muhammad Idrees",
      url: "https://muhammadidrees.dev",
    },
    datePublished: "2024-01-05T00:00:00.000Z",
    dateModified: "2024-01-05T00:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://muhammadidrees.dev/blog/mastering-typescript-advanced-patterns",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <div className="mb-6">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                Tech
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-gray-900 dark:text-white">
              Mastering TypeScript: Advanced Patterns for Better Code
            </h1>

            <div className="flex items-center text-gray-500 dark:text-gray-400 mb-8 space-x-6">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                January 5, 2024
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                10 min read
              </div>
              <button className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <Share2 size={18} className="mr-2" />
                Share
              </button>
            </div>

            <Image
              src="/blog/typescript-advanced.jpg"
              alt="Advanced TypeScript Patterns"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              priority
            />
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 font-lora mb-8 leading-relaxed">
              TypeScript has evolved from a simple type checker to a powerful tool for building robust, maintainable
              applications. In this comprehensive guide, we&apos;ll explore advanced TypeScript patterns that will transform
              how you write and think about code, enabling you to create more expressive, type-safe applications.
            </p>

            <h2 className="text-3xl font-bold font-poppins mt-12 mb-6">The Power of Advanced Generics</h2>

            <p className="mb-6">
              Generics are the foundation of TypeScript&apos;s type system, but their true power lies in advanced patterns
              that enable incredible flexibility while maintaining type safety. Let&apos;s explore sophisticated generic
              patterns that will elevate your code quality.
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-8">
              <h4 className="text-lg font-semibold mb-4">Advanced Generic Constraints</h4>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                {`// Conditional constraints with keyof
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Generic utility for API responses
type ApiResponse<T, E = string> = {
  data: T;
  error?: E;
  loading: boolean;
  timestamp: Date;
};

// Advanced constraint with multiple bounds
interface Serializable {
  serialize(): string;
}

function processData<T extends Serializable & { id: number }>(
  items: T[]
): string[] {
  return items.map(item => \`\${item.id}: \${item.serialize()}\`);
}`}
              </pre>
            </div>

            <h3 className="text-2xl font-semibold font-poppins mt-10 mb-4">Conditional Types: The Game Changer</h3>

            <p className="mb-6">
              Conditional types allow you to create types that adapt based on conditions, enabling incredibly flexible
              and reusable type definitions.
            </p>

            <Image
              src="/blog/typescript-generics.jpg"
              alt="TypeScript Generics and Conditional Types"
              width={700}
              height={400}
              className="w-full h-64 object-cover rounded-xl shadow-md my-8"
            />

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 my-8">
              <h4 className="text-lg font-semibold mb-4">Powerful Conditional Type Examples</h4>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                {`// Extract function return types
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Create union from object values
type ValueOf<T> = T[keyof T];

// Conditional type for API endpoints
type ApiEndpoint<T> = T extends 'users' 
  ? { id: number; name: string; email: string }
  : T extends 'posts'
  ? { id: number; title: string; content: string; authorId: number }
  : never;

// Advanced mapped type with conditions
type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold font-poppins mt-12 mb-6">
              Template Literal Types: String Manipulation at the Type Level
            </h2>

            <p className="mb-6">
              Template literal types enable sophisticated string manipulation at the type level, opening up new
              possibilities for creating expressive APIs and ensuring compile-time correctness.
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-8">
              <h4 className="text-lg font-semibold mb-4">Template Literal Type Patterns</h4>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                {`// CSS-in-JS type safety
type CSSProperty = 'margin' | 'padding' | 'border';
type CSSDirection = 'top' | 'right' | 'bottom' | 'left';
type CSSPropertyWithDirection = \`\${CSSProperty}-\${CSSDirection}\`;

// API route type generation
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiRoute = '/users' | '/posts' | '/comments';
type ApiEndpointType = \`\${HttpMethod} \${ApiRoute}\`;

// Event handler type generation
type EventType = 'click' | 'hover' | 'focus';
type ElementType = 'button' | 'input' | 'div';
type EventHandler = \`on\${Capitalize<EventType>}\${Capitalize<ElementType>}\`;

// Database query builder types
type QueryOperation = 'select' | 'insert' | 'update' | 'delete';
type TableName = 'users' | 'posts' | 'comments';
type QueryMethod = \`\${QueryOperation}\${Capitalize<TableName>}\`;`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold font-poppins mt-12 mb-6">Advanced Mapped Types and Key Remapping</h2>

            <p className="mb-6">
              Mapped types with key remapping provide unprecedented control over type transformations, allowing you to
              create sophisticated type utilities that adapt to your specific needs.
            </p>

            <h3 className="text-2xl font-semibold font-poppins mt-10 mb-4">Key Remapping Patterns</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">Getters Pattern</h4>
                <p className="text-sm text-purple-700 dark:text-purple-200 mb-3">
                  Transform object properties into getter methods automatically.
                </p>
                <pre className="bg-gray-900 text-green-400 p-2 rounded text-xs overflow-x-auto">
                  {`type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};`}
                </pre>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Event Emitter</h4>
                <p className="text-sm text-green-700 dark:text-green-200 mb-3">
                  Create type-safe event emitter interfaces from event maps.
                </p>
                <pre className="bg-gray-900 text-green-400 p-2 rounded text-xs overflow-x-auto">
                  {`type EventEmitter<T> = {
  [K in keyof T as \`on\${Capitalize<string & K>}\`]: (cb: (data: T[K]) => void) => void;
};`}
                </pre>
              </div>
            </div>

            <h2 className="text-3xl font-bold font-poppins mt-12 mb-6">Type-Level Programming: Recursive Types</h2>

            <p className="mb-6">
              TypeScript&apos;s type system is Turing complete, enabling complex computations at the type level. Recursive
              types allow you to process nested structures and perform sophisticated type transformations.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 my-8">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Advanced Recursive Pattern</h4>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                {`// Deep readonly implementation
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object 
    ? T[P] extends Function 
      ? T[P] 
      : DeepReadonly<T[P]>
    : T[P];
};

// Path extraction for nested objects
type Paths<T, D extends number = 10> = [D] extends [never] 
  ? never 
  : T extends object 
  ? {
      [K in keyof T]-?: K extends string | number
        ? \`\${K}\` | Join<K, Paths<T[K], Prev[D]>>
        : never;
    }[keyof T]
  : never;

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? \`\${K}.\${P}\`
    : never
  : never;

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ...0[]];`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold font-poppins mt-12 mb-6">
              Practical Applications: Building Type-Safe APIs
            </h2>

            <p className="mb-6">
              Let&apos;s apply these advanced patterns to create a type-safe API client that provides excellent developer
              experience while maintaining runtime safety.
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-8">
              <h4 className="text-lg font-semibold mb-4">Type-Safe API Client Implementation</h4>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                {`// Define API schema
interface ApiSchema {
  '/users': {
    GET: { response: User[]; query?: { page?: number; limit?: number } };
    POST: { response: User; body: CreateUserRequest };
  };
  '/users/:id': {
    GET: { response: User; params: { id: string } };
    PUT: { response: User; params: { id: string }; body: UpdateUserRequest };
    DELETE: { response: void; params: { id: string } };
  };
}

// Extract method types
type ApiMethods<T> = T extends Record<string, infer M> ? keyof M : never;
type ApiResponse<T, M> = T extends Record<string, Record<string, any>>
  ? T[keyof T] extends Record<M, any>
    ? T[keyof T][M] extends { response: infer R }
      ? R
      : never
    : never
  : never;

// Type-safe client implementation
class ApiClient<Schema extends Record<string, Record<string, any>>> {
  async request<
    Path extends keyof Schema,
    Method extends keyof Schema[Path]
  >(
    path: Path,
    method: Method,
    options?: Schema[Path][Method] extends { body: any }
      ? { body: Schema[Path][Method]['body'] }
      : Schema[Path][Method] extends { query: any }
      ? { query: Schema[Path][Method]['query'] }
      : {}
  ): Promise<Schema[Path][Method] extends { response: infer R } ? R : never> {
    // Implementation details...
    return {} as any;
  }
}`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold font-poppins mt-12 mb-6">
              Performance Considerations and Best Practices
            </h2>

            <p className="mb-6">
              While advanced TypeScript patterns are powerful, they can impact compilation performance. Here are
              essential best practices for maintaining optimal performance while leveraging advanced features.
            </p>

            <h3 className="text-2xl font-semibold font-poppins mt-10 mb-4">Optimization Strategies</h3>

            <ul className="mb-8 space-y-3">
              <li>
                <strong>Limit Recursion Depth:</strong> Use depth counters to prevent infinite recursion in recursive
                types
              </li>
              <li>
                <strong>Cache Complex Types:</strong> Store frequently used complex types in type aliases
              </li>
              <li>
                <strong>Use Distributive Conditional Types Wisely:</strong> Understand when conditional types distribute
                over unions
              </li>
              <li>
                <strong>Prefer Intersection over Union:</strong> Intersections are generally more performant than large
                unions
              </li>
            </ul>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-6 my-8">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Performance Warning</h4>
              <p className="text-red-700 dark:text-red-200">
                Excessive use of complex recursive types can significantly slow down TypeScript compilation. Always
                measure and optimize for your specific use case.
              </p>
            </div>

            <h2 className="text-3xl font-bold font-poppins mt-12 mb-6">Testing Advanced Types</h2>

            <p className="mb-6">
              Testing complex types is crucial for maintaining code quality. TypeScript provides several mechanisms for
              type testing that ensure your advanced patterns work as expected.
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-8">
              <h4 className="text-lg font-semibold mb-4">Type Testing Patterns</h4>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                {`// Type assertion testing
type Expect<T extends true> = T;
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false;

// Test cases
type TestCases = [
  Expect<Equal<DeepReadonly<{ a: { b: string } }>, { readonly a: { readonly b: string } }>>,
  Expect<Equal<Paths<{ user: { name: string; age: number } }>, "user" | "user.name" | "user.age">>,
  Expect<Equal<ApiResponse<ApiSchema, 'GET'>, User[] | User>>,
];

// Runtime type guards for advanced patterns
function isApiResponse<T>(value: unknown): value is ApiResponse<T> {
  return (
    typeof value === 'object' &&
    value !== null &&
    'data' in value &&
    'loading' in value &&
    'timestamp' in value
  );
}`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold font-poppins mt-12 mb-6">Real-World Applications</h2>

            <p className="mb-6">
              These advanced TypeScript patterns shine in real-world applications where type safety and developer
              experience are paramount. Here are some practical scenarios where these techniques provide significant
              value.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Form Validation</h4>
                <p className="text-sm text-blue-700 dark:text-blue-200">
                  Create type-safe form validation schemas that automatically infer field types and validation rules.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">State Management</h4>
                <p className="text-sm text-green-700 dark:text-green-200">
                  Build type-safe Redux stores with automatic action type inference and payload validation.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">Database ORMs</h4>
                <p className="text-sm text-purple-700 dark:text-purple-200">
                  Create type-safe database query builders that prevent SQL injection and ensure query correctness.
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">Configuration Systems</h4>
                <p className="text-sm text-orange-700 dark:text-orange-200">
                  Build flexible configuration systems with compile-time validation and intelligent defaults.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold font-poppins mt-12 mb-6">Conclusion</h2>

            <p className="mb-6">
              Mastering advanced TypeScript patterns opens up new possibilities for creating robust, maintainable
              applications. These techniques enable you to catch errors at compile time, improve developer experience,
              and build more expressive APIs.
            </p>

            <p className="mb-8">
              The key to successfully applying these patterns is understanding when and where to use them. Start with
              simpler patterns and gradually incorporate more advanced techniques as your understanding deepens.
              Remember that the goal is always to improve code quality and developer productivity, not to showcase
              complex type gymnastics.
            </p>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl my-12">
              <h3 className="text-2xl font-bold mb-4">Level Up Your TypeScript Skills</h3>
              <p className="mb-6">
                Ready to implement these advanced patterns in your projects? Let's discuss how these techniques can
                improve your codebase.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Start Your Project
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder-user.jpg"
                alt="Muhammad Idrees"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Muhammad Idrees</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Full-stack developer with expertise in TypeScript, React, and building type-safe applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
