import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  it('Prueba 1', () => {
    page.navigateTo();
    expect(page.getTitleText()).toContain('Bienvenido Estudiante');
  });
  it('Prueba 2', async () => {
    await page.navigateTo();
     expect(await page.getTitleTextH2()).toEqual('Hola Estudiante');
   });


   it('Prueba 3', async () => {
    await page.navigateTo();
     expect(await page.getTitleTextPar()).toEqual('Encuentra el error');
   });
});
