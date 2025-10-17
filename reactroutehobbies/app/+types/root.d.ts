export interface Route {}

export namespace Route {
  export type LinksFunction = (...args: any[]) => any;
  export type ErrorBoundaryProps = { error: unknown };
  export type MetaArgs = Record<string, any>;
}

export {};
