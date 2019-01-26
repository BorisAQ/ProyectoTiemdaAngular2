import { ItemDetalleModule } from './item-detalle.module';

describe('ItemDetalleModule', () => {
  let itemDetalleModule: ItemDetalleModule;

  beforeEach(() => {
    itemDetalleModule = new ItemDetalleModule();
  });

  it('should create an instance', () => {
    expect(itemDetalleModule).toBeTruthy();
  });
});
