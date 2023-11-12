import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilAdministrativoPage } from './perfil-administrativo.page';

describe('PerfilAdministrativoPage', () => {
  let component: PerfilAdministrativoPage;
  let fixture: ComponentFixture<PerfilAdministrativoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilAdministrativoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
