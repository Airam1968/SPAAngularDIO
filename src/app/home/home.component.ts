import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  ngOnInit(): void {
  }

  cvonclick()
  {
    alert('Abrindo Rota para o CV!');
    //this.router.navigate(['/cvitae']);    
  }

  bookonclick()
  {
    alert('Bookmark nossa pagina!');    
  }

  reloadonclick()
  {
    alert('Recarregue a pagina!');    
  }

}




