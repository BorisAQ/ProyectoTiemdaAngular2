import { CatalogoListaModule } from './catalogo-lista.module';

describe('CatalogoListaModule', () => {
  let catalogoListaModule: CatalogoListaModule;

  beforeEach(() => {
    catalogoListaModule = new CatalogoListaModule();
  });

  it('should create an instance', () => {
    expect(catalogoListaModule).toBeTruthy();
  });
});
