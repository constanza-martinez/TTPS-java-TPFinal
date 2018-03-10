import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public storageService:StorageService) { }

  ngOnInit() {

  }

  logout(){
    this.storageService.deleteLocalStorage('token');
    this.router.navigate(['/home']);
  }
}
