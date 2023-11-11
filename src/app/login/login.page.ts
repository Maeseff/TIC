import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoderticService } from '../poder/podertic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public poderticService: PoderticService,
    public router: Router
  ) {}
  ngOnInit() {}
}