import { LitElement } from 'lit';

export * from 'lit';
export * from 'lit/decorators';
export { classMap } from 'lit/directives/class-map';
export { styleMap } from 'lit/directives/style-map';
export { ReactiveElement } from 'lit';

export abstract class BaseElement extends LitElement {
  public something(): void {}
}
